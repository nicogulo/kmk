/* eslint-disable @typescript-eslint/no-empty-function */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useEffect, useState } from 'react';

import classNames from '@/lib/classnames';
import useBalance from '@/hooks/useBalance';
import { useBankUser } from '@/hooks/useMasterData';
import useWithdraw from '@/hooks/useWithdraw';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import SelectSearch from '@/components/SelectSearch';
import { toast } from '@/components/Toast';

import { formatNumber } from '@/utils/currency';

interface FormValues {
    amount: number;
    bankId: string;
    balance?: string;
}

const WithdrawRequest = () => {
    const [form] = useForm<FormValues>();
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [bankId, setBankId] = useState('');
    const router = useRouter();
    const { bankUser } = useBankUser();
    const { withdraw } = useWithdraw();
    const { balance } = useBalance();

    const available = Number(balance?.available);

    const availableBalance = formatNumber(available, { precision: 0 });

    const breadcrumbItems = [
        {
            title: 'Wallet',
            href: '/wallet'
        },
        {
            title: 'Withdraw Request',
            href: '/wallet/withdraw/withdraw-request'
        }
    ];

    const listBank = Array.isArray(bankUser)
        ? bankUser.map((item) => ({
              name: item.bank_name + ' - ' + item.number,
              value: item.uid
          }))
        : [];

    const handleSubmit = async (values: FormValues) => {
        setLoading(true);
        try {
            const payload = {
                amount: String(values.amount),
                member_bank_uid: bankId
            };
            const res = await withdraw(payload);
            if (res.message === 'success') {
                toast.success('Withdrawal Request Sent');
                setOpenModal(true);

                form.resetFields();
                setTimeout(() => {
                    router.push('/wallet');
                }, 2500);
            }
        } catch (error: any) {
            if (error.response && error.response.status === 500) {
                toast.error('Internal Server Error. Please try again later.');
            } else {
                toast.error(error.message);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        form.setFieldValue('balance', availableBalance);
    }, [form, availableBalance]);
    return (
        <>
            <Container className='py-6'>
                <Head>
                    <title>Withdraw Request | Binaloka</title>
                    <meta name='description' content='Login' />
                    <link rel='icon' href='/logo.ico' />
                </Head>
                <div className='flex flex-col gap-10'>
                    <Breadcrumb items={breadcrumbItems} />
                    <div className='flex flex-row items-center justify-between'>
                        <h3 className='!font-semibold text-gray-800'>Withdraw Request</h3>
                        <Link
                            href='/wallet/withdraw/withdraw-bank'
                            className='flex h-fit flex-row items-center gap-1 text-[16px] font-semibold'
                        >
                            <Icons icon='Bank' width={20} height={22} /> Bank for Withdrawal
                        </Link>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Form
                            form={form}
                            onFinish={handleSubmit}
                            className='border-text-transparent-10 flex w-fit flex-col gap-6 rounded-xl border bg-white p-6'
                        >
                            {(_, { getFieldError, getFieldsError }) => {
                                const amountError = getFieldError('amount')[0];
                                const errorBank = getFieldError('bankId')[0];

                                const errors = getFieldsError().flatMap((item) => item.errors);
                                const isSubmitDisabled = errors.length > 0;

                                return (
                                    <>
                                        <Field name='balance'>
                                            <Input
                                                disabled
                                                label='Active Balance'
                                                placeholder='0'
                                                className='w-[420px]'
                                                thousandsSeparator='.'
                                                radix=','
                                                min={0}
                                                mask={Number}
                                                prefix='Rp'
                                                prefixClassName='font-bold'
                                            />
                                        </Field>
                                        <Field
                                            name='amount'
                                            rules={[
                                                { required: true, message: 'Amount is required' },
                                                {
                                                    validator: async (_, value) => {
                                                        if (Number(value) > Number(available)) {
                                                            return Promise.reject(
                                                                'Amount must be less than the available balance'
                                                            );
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                }
                                            ]}
                                        >
                                            <Input
                                                label='Amount to Withdraw'
                                                placeholder='0'
                                                error={amountError}
                                                className='w-[420px]'
                                                thousandsSeparator='.'
                                                radix=','
                                                min={0}
                                                mask={Number}
                                                prefix='Rp'
                                                prefixClassName='font-bold'
                                            />
                                        </Field>
                                        <Field name='bankId' rules={[{ required: true, message: 'Bank is required' }]}>
                                            <SelectSearch
                                                items={listBank}
                                                name='bankId'
                                                label='Bank'
                                                selected={{
                                                    name: form.getFieldValue('bankId')
                                                }}
                                                onChange={(value) => {
                                                    form.setFieldsValue({ bankId: value.name });
                                                    setBankId(value.value);
                                                }}
                                                className={classNames('w-[420px]', {
                                                    'border-[#C9353F]': errorBank
                                                })}
                                                readOnly
                                                required
                                                withAction
                                                action={
                                                    <Link
                                                        href='/wallet/withdraw/withdraw-bank'
                                                        className='flex flex-row items-center gap-1 font-semibold'
                                                    >
                                                        <Icons icon='PlusCircle' width={20} height={22} />
                                                        Add Bank for Withdrawal
                                                    </Link>
                                                }
                                            />
                                        </Field>
                                        {errorBank && (
                                            <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                                <Icons icon='Interuption' /> {errorBank}
                                            </span>
                                        )}
                                        <div className='flex flex-row justify-end gap-4'>
                                            <Button disabled={isSubmitDisabled || loading} loading={loading}>
                                                Submit Deposit Request
                                            </Button>
                                        </div>
                                    </>
                                );
                            }}
                        </Form>
                    </div>
                </div>
            </Container>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={<Illustration name='Success' width={96} height={96} />}
                closePosition='right'
                headerClassName='!items-start'
                footer={
                    <Button onClick={() => setOpenModal(false)} block>
                        Ok, Understood
                    </Button>
                }
            >
                <div className='flex flex-col gap-1'>
                    <span className='h4 font-semibold text-gray-800'>Withdrawal Request Sent</span>
                    <span className='xs text-gray-600'>
                        Your request will be processed. Please wait for the transaction to complete. Withdrawals
                        typically take 1-2 days to process.
                    </span>
                </div>
            </Modal>
        </>
    );
};

export default WithdrawRequest;
