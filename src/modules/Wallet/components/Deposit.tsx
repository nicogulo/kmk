import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useEffect, useState } from 'react';
import { Else, If, Then, When } from 'react-if';

import useDeposit from '@/hooks/useDeposit';
import { useHistoryDetail } from '@/hooks/useHistory';
import useProfile, { ProfileStatus } from '@/hooks/useProfile';
import useVirtualAccount, { useDetailVirtualAccount } from '@/hooks/useVirtualAccount';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import ModalUnverified from '@/components/Modal/ModalUnverified';
import SelectSearch from '@/components/SelectSearch';
import { toast } from '@/components/Toast';

import { copy } from '@/utils/clipboard';
import { formatRupiah } from '@/utils/currency';

interface ResponseData {
    uid: string;
    created_at: string;
    amount: string;
    bank_account_logo: string;
    bank_account_name: string;
    bank_account_number: string;
}

const Deposit = () => {
    const [form] = useForm();

    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [paymentProof, setPaymentProof] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [loadingRequest, setLoadingRequest] = useState(false);
    const [openError, setOpenError] = useState(false);

    const [responseData, setResponseData] = useState<ResponseData>();
    const router = useRouter();
    const { deposit } = useDeposit();
    const { uploadBankReceipt } = useHistoryDetail();
    const { virtualAccount, loading } = useVirtualAccount();
    const { fetchDetailVirtualAccount, loading: loadingDetail, virtualAccountDetail } = useDetailVirtualAccount();

    const { profile } = useProfile();
    const isVerify = profile?.kyc === ProfileStatus.VERIFIED;

    const breadcrumbItems = [
        {
            title: 'Wallet',
            href: '/wallet'
        },
        {
            title: 'Deposit Request',
            href: '/wallet/deposit'
        }
    ];

    const amountValue = form.getFieldValue('amount');
    const getDetailVirtualAccount = async (uid: string) => {
        await fetchDetailVirtualAccount(uid);
    };

    const handleUpload = (e: any) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        if (file.size > 5242880) {
            // 5MB in bytes
            toast.error('File size should not exceed 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPaymentProof((reader.result as string) ?? '');
            setFile(file);
        };
        reader.readAsDataURL(file);
    };

    const handleChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > 5242880) {
                // 5MB in bytes
                toast.error('File size should not exceed 5MB.');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setPaymentProof((reader.result as string) ?? '');
                setFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setPaymentProof('');
            setFile(null);
        }
    };

    const handleRemoveFile = () => {
        setPaymentProof('');
        setFile(null);
    };

    const handleSubmitUpload = () => {
        if (file) {
            setLoadingUpload(true);
            uploadBankReceipt(file, responseData?.uid)
                .then((e) => {
                    if (e.code === 100001001) {
                        throw new Error(e.message);
                    }
                    setStep(0);
                    setOpen(false);
                    setPaymentProof('');
                    setFile(null);
                    toast.success('Payment proof uploaded successfully');
                    setTimeout(() => {
                        router.push('/wallet');
                    }, 1500);
                })
                .catch((e) => {
                    toast.error(e.message ?? 'Failed to upload payment proof');
                })
                .finally(() => {
                    setLoadingUpload(false);
                });
        } else {
            toast.error('Please upload a payment proof');
        }
    };

    const handleSubmit = async () => {
        if (isVerify) {
            setLoadingRequest(true);
            try {
                const values = form.getFieldsValue(true);
                const payload = {
                    amount: values.amount
                };

                const res = await deposit(payload);
                if (payload) {
                    setResponseData(res);
                    // setResponseData({
                    //     uid: '123',
                    //     created_at: new Date().toISOString(),
                    //     amount: payload.amount,
                    //     bank_account_logo: '',
                    //     bank_account_name: values.bank_name,
                    //     bank_account_number: values.bank_account_number
                    // });
                    toast.success('Deposit request submitted successfully');
                    setOpen(true);
                }
            } catch (error: any) {
                toast.error(error.message ?? 'Failed to deposit');
            } finally {
                setLoadingRequest(false);
            }
        } else {
            setOpenError(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
        setStep(0);
    };

    useEffect(() => {
        if (isVerify) {
            setOpenError(false);
        } else {
            setOpenError(true);
        }
    }, [isVerify]);

    useEffect(() => {
        form.setFieldsValue({
            bank_account_number: '821765274582',
            bank_name: 'BCA'
        });
    }, [form]);

    useEffect(() => {
        if (open) {
            setCount(21600); // Reset count when `open` changes to true
            const interval = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [open]);

    // Convert seconds to HH:mm:ss
    const formatCount = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return [hours, minutes, secs]
            .map((val) => (val < 10 ? `0${val}` : val)) // Add leading zero if necessary
            .join(':');
    };

    return (
        <>
            <Container className='py-6'>
                <Head>
                    <title>Deposit Request | Binaloka</title>
                    <meta name='description' content='Login' />
                    <link rel='icon' href='/logo.ico' />
                </Head>
                <div className='flex flex-col gap-10'>
                    <Breadcrumb items={breadcrumbItems} />
                    <h3 className='!font-semibold text-gray-800'>Deposit Request</h3>

                    <Form form={form} onFinish={handleSubmit} className='flex justify-center'>
                        {(_, { getFieldError, getFieldsError }) => {
                            const errors = getFieldsError().flatMap((item) => item.errors);
                            const isSubmitDisabled = errors.length > 0;

                            const amountError = getFieldError('amount')[0];
                            const errorBankName = getFieldError('bank_name')[0];
                            const errorBankAccountNumber = getFieldError('bank_account_number')[0];

                            return (
                                <div className='border-text-transparent-10 flex w-full max-w-5xl flex-col gap-3 rounded-xl border bg-white p-6 '>
                                    <div className='flex flex-col items-start gap-6 '>
                                        <Field
                                            name='amount'
                                            rules={[
                                                { required: true, message: 'Amount is required' },
                                                {
                                                    validator: (_, value) => {
                                                        if (value < 10000) {
                                                            return Promise.reject(
                                                                'The minimum amount to deposit is Rp10,000'
                                                            );
                                                        }

                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input
                                                label='Amount'
                                                name='amount'
                                                groupClassName='w-full'
                                                min={0}
                                                mask={Number}
                                                scale={2}
                                                size='md'
                                                placeholder='0.00'
                                                prefix='Rp'
                                                thousandsSeparator='.'
                                                radix=','
                                                required
                                                error={amountError}
                                            />
                                        </Field>
                                        <Field
                                            name='bank_name'
                                            rules={[{ required: true, message: 'Bank Name is required' }]}
                                        >
                                            <SelectSearch
                                                items={virtualAccount.filter((item) => item.code === 'BCA')}
                                                label='Bank Name'
                                                name='bank_name'
                                                selected={{
                                                    name: virtualAccount.find(
                                                        (item) => item.code === form.getFieldValue('bank_name')
                                                    )?.name
                                                }}
                                                onChange={(value) => {
                                                    form.setFieldsValue({
                                                        bank_name: value?.code
                                                    });
                                                    getDetailVirtualAccount(value?.uid);
                                                }}
                                                readOnly
                                                required
                                            />
                                        </Field>
                                        {errorBankName && (
                                            <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                                <Icons icon='Interuption' /> {errorBankName}
                                            </span>
                                        )}
                                        <Field
                                            name='bank_account_number'
                                            rules={[{ required: true, message: 'Bank Account Number is required' }]}
                                        >
                                            <Input
                                                label='Bank Account Number'
                                                placeholder='Enter your bank account number'
                                                groupClassName='w-full'
                                                size='md'
                                                mask={/^[0-9]*$/}
                                                required
                                                error={errorBankAccountNumber}
                                            />
                                        </Field>
                                    </div>

                                    <div className='flex flex-row items-end justify-end gap-6'>
                                        <Button
                                            type='submit'
                                            disabled={isSubmitDisabled || loadingRequest}
                                            loading={loadingRequest}
                                        >
                                            Submit Deposit Request
                                        </Button>
                                    </div>
                                </div>
                            );
                        }}
                    </Form>
                </div>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                closePosition='right'
                width={400}
                wrapperClassName='!px-0'
                headerClassName='px-6'
                footerClassName='px-6'
                title={
                    <Icons
                        icon='Dollar'
                        width={24}
                        height={24}
                        color='#14b2e6'
                        WrapperClassName='p-3 rounded-[10px] border border-[#08192B1A] shadow-[0px_1px_2px_0px_#1018280D]'
                    />
                }
                footer={
                    <>
                        <When condition={step === 0}>
                            <div className='flex flex-col gap-3'>
                                <Button block onClick={() => setStep(1)}>
                                    Upload Payment Proof
                                </Button>
                                <Button block variant='grayOutline' onClick={handleClose}>
                                    Pay Later
                                </Button>
                            </div>
                        </When>
                        <When condition={step === 1}>
                            <div className='flex w-full flex-row justify-end'>
                                <Button
                                    type='button'
                                    onClick={handleSubmitUpload}
                                    size='md'
                                    loading={loadingUpload}
                                    disabled={loadingUpload}
                                >
                                    Submit
                                </Button>
                            </div>
                        </When>
                    </>
                }
            >
                <div className='flex flex-col gap-5'>
                    <When condition={step === 0}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1 px-6'>
                                <p className='text-lg font-bold text-[#18181E]'>Deposit Instructions</p>
                                <p className='text-sm font-normal text-[#525D66]'>
                                    You must transfer the{' '}
                                    <span className='font-bold text-[#18181E]'> exact amount</span> as stated
                                </p>
                            </div>
                            <div className='flex flex-col gap-1 px-6'>
                                <p className='text-[10px] font-normal uppercase leading-[14px] text-[#758089]'>
                                    AMOUNT TO TRANSFER
                                </p>
                                <p className='text-2xl font-bold text-[#18181E]'>
                                    {formatRupiah(amountValue)}{' '}
                                    <Icons
                                        icon='Copy'
                                        width={20}
                                        height={20}
                                        color='#525D66'
                                        WrapperClassName='pl-1 cursor-pointer'
                                        onClick={() => {
                                            copy(amountValue as any as string);
                                        }}
                                    />
                                </p>
                            </div>
                            <div className='flex flex-col gap-1 px-6'>
                                <p className='text-[10px] font-normal uppercase leading-[14px] text-[#758089]'>
                                    TRANSFER TO
                                </p>
                                <div className='flex w-full flex-row items-center gap-4'>
                                    {/* <Image src={BCALogo} alt='BCA Logo' width={64} height={20} /> */}
                                    <p className='text-2xl font-bold text-[#18181E]'>
                                        821765274582
                                        <Icons
                                            icon='Copy'
                                            width={20}
                                            height={20}
                                            color='#525D66'
                                            WrapperClassName='pl-1 cursor-pointer'
                                            onClick={() => {
                                                copy(821765274582 as any as string);
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 px-6'>
                                <p className='text-[10px] font-normal uppercase leading-[14px] text-[#758089]'>
                                    ACCOUNT HOLDER NAME
                                </p>

                                <p className='text-2xl font-bold text-[#18181E]'>PT Binaloka Indonesia</p>
                            </div>
                            <div className='relative flex w-full flex-row items-center gap-2 bg-[#FFFAEB] px-6 py-2'>
                                <Icons icon='AlertTriangleFilled' width={24} height={24} />
                                <p className='text-sm font-normal text-[#525D66]'>
                                    Please complete payment in{' '}
                                    <span className='text-[16px] font-bold leading-6 text-[#DC6803]'>
                                        {formatCount(count)}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </When>
                    <When condition={step === 1}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1 px-6'>
                                <p className='text-lg font-bold text-[#18181E]'>Upload Payment Proof</p>
                                <p className='text-sm font-normal text-[#525D66]'>
                                    You must transfer the exact amount as stated
                                </p>
                            </div>
                            <If condition={paymentProof}>
                                <Then>
                                    <div className='mt-4 flex flex-row gap-4 px-6'>
                                        <div className='w-full'>
                                            <Image
                                                src={paymentProof}
                                                alt='Preview Payment Proof'
                                                width={216}
                                                height={164}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='flex w-full flex-col items-center gap-2'>
                                            <label className='w-full cursor-pointer'>
                                                <div className='text-center'>
                                                    <div className='flex h-10 w-full items-center justify-center rounded border border-[#08192B1A]'>
                                                        Change
                                                    </div>
                                                    <input
                                                        type='file'
                                                        className='hidden'
                                                        onChange={(e: any) => handleChangeFileUpload(e)}
                                                    />
                                                </div>
                                            </label>
                                            <Button
                                                variant='grayOutline'
                                                block
                                                className='!gap-1 !border-none !text-[#DB2430]'
                                                onClick={handleRemoveFile}
                                            >
                                                <Icons icon='Trash' width={16} height={16} /> Remove
                                            </Button>
                                        </div>
                                    </div>
                                </Then>
                                <Else>
                                    <div className='w-full px-6 pt-2'>
                                        <label className='flex h-[164px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-[#14b2e6] bg-[#14b2e608]'>
                                            <div className='text-center'>
                                                <Icons icon='Upload' width={24} height={24} color='#14b2e6' />
                                                <p className='text-sm font-bold text-[#14b2e6]'>Upload Payment Proof</p>
                                                <p className='text-xs font-normal text-[#525D66]'>
                                                    Click to upload or drag and drop <br />
                                                    PNG, JPG or PDF (max. 5 MB)
                                                </p>
                                                <input type='file' className='hidden' onChange={handleUpload} />
                                            </div>
                                        </label>
                                    </div>
                                </Else>
                            </If>
                        </div>
                    </When>
                </div>
            </Modal>
            <ModalUnverified isOpen={openError} handleClose={() => setOpenError(false)} />
        </>
    );
};

export default Deposit;
