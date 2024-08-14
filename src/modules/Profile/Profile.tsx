import Head from 'next/head';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';
import { Case, Default, Switch, When } from 'react-if';
import OtpInput from 'react-otp-input';

import useVerifyPhoneNumber from '@/hooks/usePhoneNumber';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Modal from '@/components/Modal';
import Tabs, { Tab } from '@/components/Tabs';
import { toast } from '@/components/Toast';

import { copy } from '@/utils/clipboard';
import { formatDate } from '@/utils/format-date';

export enum ProfileStatus {
    VERIFIED = 1,
    PENDING = 0,
    UNVERIFIED = 2
}

const Profile = () => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalPhone, setOpenModalPhone] = useState<boolean>(false);
    const [openVerifyPhone, setOpenVerifyPhone] = useState<boolean>(false);
    const [loadingSubmitPhone, setLoadingSubmitPhone] = useState<boolean>(false);
    const [form] = useForm();
    const { verifyPhoneNumber } = useVerifyPhoneNumber();

    const loading = false;
    const profile = {
        userId: '123456',
        fullName: 'John Doe',
        email: 'john@gmail.com',
        country: 'Indonesia',
        phoneNumber: '08123456789',
        dateOfBirth: new Date(),
        basic: 2,
        advance: 2,
        phoneNumberUid: '123456'
    };

    const isPhoneVerify = true;
    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;

    const verifyPhone = async () => {
        setLoadingSubmitPhone(true);
        try {
            const res = await verifyPhoneNumber(profile?.phoneNumberUid as string);

            if (res === undefined || res === null) {
                throw new Error('Failed to verify phone number');
            }

            if (res.message === 'success') {
                toast.success('Phone number verified successfully');
                // fetchProfile();
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
                <title>Profile | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <Container className='!pt-10'>
                <div className='gap flex flex-col gap-10'>
                    <span className='h1'>Profile</span>
                    <div className='flex flex-col gap-4'>
                        <Tabs>
                            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
                                My Profile
                            </Tab>
                            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
                                Security Management
                            </Tab>
                        </Tabs>
                        <When condition={activeTab === 0}>
                            <div className='flex w-full flex-row items-start justify-center gap-4'>
                                <div className='flex w-full flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white p-6'>
                                    <p className='text-[16px] font-bold leading-6 text-gray-800'>Your Details</p>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>User ID</p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
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
                                                                toast.info('Copied to clipboard');
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>Full Name</p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
                                                ) : (
                                                    profile?.fullName || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>Email</p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
                                                ) : (
                                                    profile?.email || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>
                                                Country of residency
                                            </p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
                                                ) : (
                                                    profile?.country || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>
                                                Phone Number
                                            </p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
                                                ) : (
                                                    profile?.phoneNumber || '-'
                                                )}
                                            </p>
                                        </div>
                                        <div className='flex flex-row justify-between gap-6'>
                                            <p className='min-w-[200px] text-sm font-normal text-gray-600'>
                                                Date of Birth
                                            </p>
                                            <p className='w-full text-sm font-bold text-gray-800'>
                                                {loading ? (
                                                    <span className='block h-4 w-32 animate-pulse rounded-md bg-gray-200' />
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
                                        <div className='mb-4 flex flex-col gap-4'>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-1'>
                                                    <div className='flex items-center justify-between'>
                                                        <h2 className='gradient-text-basic text-[16px] font-bold leading-4 '>
                                                            Basic KYC
                                                        </h2>
                                                        <Switch>
                                                            <Case condition={profile?.basic === ProfileStatus.PENDING}>
                                                                <Badge variant='blue'>In Review</Badge>
                                                            </Case>
                                                            <Case condition={profile?.basic === ProfileStatus.VERIFIED}>
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
                                            <div className='flex flex-row  gap-10 border-t pt-4'>
                                                {/* <div className='flex flex-col gap-3 min-w-[200px]'>
                                                <p className='text-xs text-gray-500 text-normal uppercase'>
                                                    Requirements
                                                </p>
                                                <div className='flex flex-col gap-1 items-start'>
                                                    <p className='text-sm text-gray-800 font-normal'>
                                                        Personal Details
                                                    </p>
                                                    <p className='text-sm text-gray-800 font-normal'>
                                                        Account Configuration
                                                    </p>
                                                </div>
                                            </div> */}
                                                <div className='flex min-w-[200px] flex-col gap-3'>
                                                    <p className='text-normal text-xs uppercase text-gray-500'>
                                                        Permissions
                                                    </p>
                                                    <div className='flex flex-col items-start gap-1'>
                                                        <p className='flex flex-row items-center gap-1 text-sm font-normal text-gray-800'>
                                                            <Icons
                                                                icon='Stack'
                                                                width={20}
                                                                height={20}
                                                                color='#08AA54'
                                                            />
                                                            1 Live Trading Account (Max Rp 25mio Equity)
                                                        </p>
                                                        <p className='flex flex-row items-center gap-1 text-sm font-normal text-gray-800'>
                                                            <Icons
                                                                icon='Wallet'
                                                                width={20}
                                                                height={20}
                                                                color='#08AA54'
                                                            />
                                                            Max daily deposit Rp10 Mio
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
                                                        router.push('/dashboard/profile/user/kyc/basic');
                                                    }
                                                }}
                                                disabled={
                                                    ProfileStatus.VERIFIED === profile?.basic ||
                                                    ProfileStatus.PENDING === profile?.basic ||
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
                            <div className='flex w-[536px] flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white p-6'>
                                <p className='text-[16px] font-bold leading-4 text-gray-800 '>Authentication Method</p>
                                <div className='flex flex-row items-center justify-between rounded-xl border border-[#08192B1A] p-4'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-sm font-bold text-gray-800'>Email Address</p>
                                        <p className='text-sm font-normal text-gray-500'>{profile?.email}</p>
                                    </div>
                                    <Button variant='grayOutline' className='!text-gray-800' disabled>
                                        Verified
                                    </Button>
                                </div>
                                <div className='flex flex-row items-center justify-between rounded-xl border border-[#08192B1A] p-4'>
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
                                // isInputNum
                                inputType='number'
                                renderSeparator={<span>&nbsp;</span>}
                                // className='gap-3'
                                inputStyle='!w-[70px] !h-[64px] xl:text-2xl text-lg text-primary-200 font-bold border-[1px] border-[#E0E0E0] rounded-lg !caret-primary-200 focus:!border-primary-200 focus:!outline-none focus:ring-0'
                                // focusStyle='focus:!border-primary-200 !outline-none'
                                // hasErrored={form.getFieldsError().flatMap((item) => item.errors).length > 0}
                                // errorStyle='!border-[#C9353F]'
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
