import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

import useVerifyPhoneNumber from '@/hooks/usePhoneNumber';
import useProfile, { PhoneNumberStatus, ProfileStatus } from '@/hooks/useProfile';

import Alert from '@/components/Alert';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import { Case, Default, Switch, When } from '@/components/If';
import Modal from '@/components/Modal';
import Tabs, { Tab } from '@/components/Tabs';
import { toast } from '@/components/Toast';

import { copy } from '@/utils/clipboard';
import { formatDate } from '@/utils/format-date';

import Rocket from './images/rocket.png';

const Profile = () => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalPhone, setOpenModalPhone] = useState<boolean>(false);
    const [openVerifyPhone, setOpenVerifyPhone] = useState<boolean>(false);
    const [loadingSubmitPhone, setLoadingSubmitPhone] = useState<boolean>(false);
    const [form] = useForm();
    const { verifyPhoneNumber } = useVerifyPhoneNumber();
    const { loading, fetchProfile, profile } = useProfile();

    const isPhoneVerify = PhoneNumberStatus.ACTIVE === profile?.phoneStatus;
    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.kyc || ProfileStatus.REVOKE === profile?.kyc;

    const verifyPhone = async () => {
        setLoadingSubmitPhone(true);
        try {
            const res = await verifyPhoneNumber(profile?.phoneNumberUid as string);

            if (res === undefined || res === null) {
                throw new Error('Failed to verify phone number');
            }

            if (res.message === 'success') {
                toast.success('Phone number verified successfully');
                fetchProfile();
            }
        } catch (error) {
            toast.error('Failed to verify phone number');
        }
        form.resetFields();
        setLoadingSubmitPhone(false);
        setOpenVerifyPhone(false);
    };

    return (
        <>
            <Head>
                <title>Profile | KMK</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <Container className='!pt-10'>
                <div className='gap flex flex-col gap-10'>
                    <span className='h1'>Profile</span>
                    {isUnverifiedBasic && (
                        <Alert
                            variant='info'
                            closeable
                            withChildren
                            contentCenter={false}
                            content={
                                <div className='flex flex-1 flex-col gap-6 xl:flex-row xl:items-center'>
                                    <div className='flex flex-1 flex-col items-start gap-6 xl:flex-row xl:items-center'>
                                        <Image src={Rocket} unoptimized alt='rocket' width={80} height={80} />
                                        <div className='flex w-auto flex-col gap-2'>
                                            <p className='text-sm font-semibold text-gray-800'>
                                                Verifikasi akun Anda untuk memulai transaksi di KMK
                                            </p>
                                            <p className='text-sm font-normal text-gray-600'>
                                                Lakukan verifikasi akun hanya dalam 5 menit. Lengkapi informasi dengan
                                                benar dan ikuti petunjuknya dengan seksama.
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            if (!isPhoneVerify && isUnverifiedBasic) {
                                                setOpenModalPhone(true);
                                                return;
                                            }
                                            if (isUnverifiedBasic) {
                                                router.push('/profile/kyc');
                                            }
                                        }}
                                        className='mr-6 h-fit w-[136px]'
                                    >
                                        Verify Now
                                    </Button>
                                </div>
                            }
                        />
                    )}
                    <div className='flex flex-col gap-4 pb-4'>
                        <Tabs>
                            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
                                My Profile
                            </Tab>
                            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
                                Security Management
                            </Tab>
                        </Tabs>
                        <When condition={activeTab === 0}>
                            <div className='flex w-full flex-col items-start justify-center gap-4 xl:flex-row'>
                                <div className='flex w-full flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white p-4 xl:p-6'>
                                    <p className='text-[16px] font-bold leading-6 text-gray-800'>Your Details</p>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>
                                                User ID
                                            </p>
                                            <p className='line-clamp-3 w-full max-w-[120px] text-right text-sm font-bold text-gray-800 xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : (
                                                    <>
                                                        {profile?.userId || '-'}
                                                        <Icons
                                                            icon='Copy'
                                                            width={12}
                                                            height={12}
                                                            color='#525D66'
                                                            WrapperClassName='pl-1 cursor-pointer'
                                                            onClick={() => {
                                                                copy(profile?.userId as string);
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>
                                                Full Name
                                            </p>
                                            <p className='line-clamp-3 w-full max-w-[120px] text-right text-sm font-bold text-gray-800 xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : (
                                                    profile?.fullName || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>Email</p>
                                            <p className='line-clamp-3 max-w-[120px] overflow-hidden text-ellipsis break-words text-right text-sm font-bold text-gray-800 xl:w-full xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : (
                                                    profile?.email || '-'
                                                )}
                                            </p>
                                        </div>

                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>
                                                Country of residency
                                            </p>
                                            <p className='line-clamp-3 w-full max-w-[120px] text-right text-sm font-bold text-gray-800 xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : (
                                                    profile?.country || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>
                                                Phone Number
                                            </p>
                                            <p className='line-clamp-3 w-full max-w-[120px] text-right text-sm font-bold text-gray-800 xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : (
                                                    profile?.phoneNumber || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='text-sm font-normal text-gray-600 xl:min-w-[200px]'>
                                                Date of Birth
                                            </p>
                                            <p className='line-clamp-3 w-full max-w-[120px] text-right text-sm font-bold text-gray-800 xl:max-w-[unset] xl:text-left'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200 text-right xl:text-left' />
                                                ) : profile?.dateOfBirth ? (
                                                    formatDate(profile?.dateOfBirth, 'D MMM YYYY')
                                                ) : (
                                                    '-'
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative flex w-full flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white p-6'>
                                    <p className='text-[16px] font-bold leading-6 text-gray-800'>Verification Status</p>

                                    <div
                                    // className='border-left basic-kyc-border circle-top px-6 pb-4'
                                    >
                                        <span className='circle-bottom' />
                                        <div className='flex w-full flex-col gap-4 xl:mb-4'>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex items-center justify-between'>
                                                        <h2 className='gradient-text-basic text-[16px] font-bold leading-4 '>
                                                            Basic KYC
                                                        </h2>
                                                        <Switch>
                                                            <Case condition={profile?.kyc === ProfileStatus.PENDING}>
                                                                <Badge variant='blue'>In Review</Badge>
                                                            </Case>
                                                            <Case condition={profile?.kyc === ProfileStatus.VERIFIED}>
                                                                <Badge variant='green'>Verified</Badge>
                                                            </Case>
                                                            <Default>
                                                                <Badge variant='red'>Unverified</Badge>
                                                            </Default>
                                                        </Switch>
                                                    </div>

                                                    <p className='text-sm font-normal text-gray-800'>
                                                        Complete basic KYC to create live trading accounts and deposit
                                                        requests.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-between border-t pt-4 xl:gap-10'>
                                                <div className='flex flex-col gap-3 xl:min-w-[200px]'>
                                                    <p className='text-normal text-xs uppercase text-gray-500'>
                                                        Requirements
                                                    </p>
                                                    <div className='flex flex-col items-start gap-1'>
                                                        <p className='text-sm font-normal text-gray-800'>
                                                            Upload Document
                                                        </p>
                                                        <p className='text-sm font-normal text-gray-800'>
                                                            Personal Data
                                                        </p>
                                                        <p className='text-sm font-normal text-gray-800'>
                                                            Facial Recognition
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-3 xl:min-w-[200px]'>
                                                    <p className='text-normal text-xs uppercase text-gray-500'>
                                                        Permissions
                                                    </p>
                                                    <div className='flex flex-col items-start gap-1'>
                                                        <p className='flex flex-row items-center gap-1 text-sm font-normal text-gray-800'>
                                                            <Icons
                                                                icon='Wallet'
                                                                width={20}
                                                                height={20}
                                                                color='#00AA13'
                                                            />
                                                            Trading
                                                        </p>
                                                        <p className='flex flex-row items-center gap-1 text-sm font-normal text-gray-800'>
                                                            <Icons
                                                                icon='Wallet'
                                                                width={20}
                                                                height={20}
                                                                color='#00AA13'
                                                            />
                                                            Deposit
                                                        </p>
                                                        <p className='flex flex-row items-center gap-1 text-sm font-normal text-gray-800'>
                                                            <Icons
                                                                icon='Stack'
                                                                width={20}
                                                                height={20}
                                                                color='#00AA13'
                                                            />
                                                            Withdraw
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                block
                                                onClick={() => {
                                                    if (!isPhoneVerify && isUnverifiedBasic) {
                                                        setOpenModalPhone(true);
                                                        return;
                                                    }
                                                    if (isUnverifiedBasic) {
                                                        router.push('/profile/kyc');
                                                    }
                                                }}
                                                disabled={
                                                    ProfileStatus.VERIFIED === profile?.kyc ||
                                                    ProfileStatus.PENDING === profile?.kyc ||
                                                    loading
                                                }
                                                loading={loading}
                                            >
                                                Verify Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </When>
                        <When condition={activeTab === 1}>
                            <div className='flex flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white p-6 xl:w-[536px]'>
                                <p className='text-[16px] font-bold leading-4 text-gray-800 '>Authentication Method</p>
                                <div className='flex flex-col justify-between gap-2 rounded-xl border border-[#08192B1A] p-4 xl:flex-row xl:items-center xl:gap-[unset]'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold text-gray-800'>Email Address</p>
                                        <p className='text-sm font-normal text-gray-500'>{profile?.email}</p>
                                    </div>
                                    <Button variant='grayOutline' className='!text-gray-800' disabled>
                                        Verified
                                    </Button>
                                </div>
                                <div className='flex flex-col justify-between gap-2 rounded-xl border border-[#08192B1A] p-4 xl:flex-row xl:items-center xl:gap-[unset]'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold text-gray-800'>Phone Number</p>
                                        <p className='text-sm font-normal text-gray-500'>+62{profile?.phoneNumber}</p>
                                    </div>
                                    <Button
                                        variant={isPhoneVerify ? 'grayOutline' : 'primaryOutline'}
                                        disabled={isPhoneVerify}
                                        className={`${isPhoneVerify ? '!text-gray-800' : ''}`}
                                        onClick={() => {
                                            setOpenVerifyPhone(true);
                                        }}
                                    >
                                        {isPhoneVerify ? 'Verified' : 'Verify Phone Number'}
                                    </Button>
                                </div>
                            </div>
                        </When>
                    </div>
                </div>
            </Container>
            {/* modal, if phone not ferify, user shoul verify phone number */}
            <Modal
                title={<Icons icon='AlertFill' width={48} height={48} />}
                open={openModalPhone}
                onClose={() => setOpenModalPhone(false)}
                closePosition='right'
                width={424}
                footer={
                    <div className='flex justify-between gap-4'>
                        <Button
                            onClick={() => {
                                setOpenModalPhone(false);
                            }}
                            block
                            variant='grayOutline'
                        >
                            Cancel
                        </Button>
                        <Button
                            block
                            onClick={() => {
                                setOpenModalPhone(false);
                                setActiveTab(1);
                            }}
                        >
                            Verify Phone
                        </Button>
                    </div>
                }
            >
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-bold text-[#18181E]'>Verify Phone Number</p>
                    <p className='text-sm font-normal text-[#525D66]'>
                        To verify Basic KYC, you must first verify your phone number. This ensures you are familiar with
                        our platform and its features.
                    </p>
                </div>
            </Modal>
            {/* Modal, for user submit Verify phone number */}
            <Modal
                title={<Icons icon='AlertFill' width={48} height={48} />}
                open={openVerifyPhone}
                onClose={() => setOpenVerifyPhone(false)}
                closePosition='right'
                width={424}
                footer={
                    <div className='flex justify-between gap-4'>
                        <Button
                            onClick={() => {
                                setOpenVerifyPhone(false);
                                form.resetFields();
                            }}
                            block
                            variant='grayOutline'
                        >
                            Cancel
                        </Button>
                        <Button block onClick={verifyPhone} loading={loadingSubmitPhone} disabled={loadingSubmitPhone}>
                            Verify Phone
                        </Button>
                    </div>
                }
            >
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-bold text-[#18181E]'>Verify Phone Number</p>
                    <p className='text-sm font-normal text-[#525D66]'>
                        Please confirm your phone number to verify your account.
                    </p>
                    <Form
                        form={form}
                        // onFinish={handleSubmit}
                        autoComplete='off'
                        className='flex w-full flex-col items-start gap-4 xl:gap-8'
                    >
                        <Field
                            name='otp'
                            rules={[
                                {
                                    required: true,
                                    message: 'OTP is required'
                                }
                            ]}
                        >
                            <OtpInput
                                renderInput={(props) => <input {...props} />}
                                value={form.getFieldValue('otp')}
                                numInputs={4}
                                onChange={(e: any) => {
                                    if (e.length === 4) {
                                        // handleSubmit({ otp: e })
                                        verifyPhone();
                                    }
                                }}
                                inputType='number'
                                renderSeparator={<span>&nbsp;</span>}
                                inputStyle='!w-[70px] !h-[64px] xl:text-2xl text-lg text-primary-300 font-bold border-[1px] border-[#E0E0E0] rounded-lg !caret-primary-300 focus:!border-primary-300 focus:!outline-none focus:ring-0'
                                containerStyle='justify-between w-full'
                            />
                        </Field>
                        {form.getFieldsError().flatMap((item) => item.errors).length > 0 && (
                            <div className='-mt-2 flex w-full flex-row items-center justify-center gap-1'>
                                <Icons icon='Interuption' width={16} height={16} color='#C9353F' />
                                <p className='text-center text-xs text-[#C9353F] xl:text-sm '>
                                    {form.getFieldsError().flatMap((item) => item.errors)[0]}
                                </p>
                            </div>
                        )}
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default Profile;
