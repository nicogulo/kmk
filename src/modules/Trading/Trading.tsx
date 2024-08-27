import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { When } from 'react-if';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Modal from '@/components/Modal';

import { ProfileStatus } from '@/modules/Profile/Profile';

const Trading = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const profile = {
        userId: '123456',
        fullName: 'John Doe',
        email: 'john@gmail.com',
        country: 'Indonesia',
        phoneNumber: '08123456789',
        dateOfBirth: new Date(),
        basic: 1,
        phoneNumberUid: '123456'
    };
    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    const handleClose = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Head>
                <title>Trading | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <Modal
                title={
                    <>
                        <When condition={isUnverifiedBasic}>
                            <Icons
                                icon='UserCircle'
                                width={24}
                                height={24}
                                color='#08AA54'
                                WrapperClassName='p-3 rounded-[10px] border border-[#08192B1A] shadow-[0px_1px_2px_0px_#1018280D]'
                            />
                        </When>
                        <When condition={isVerifiedBasic}>
                            <Icons
                                icon='ChartGreen'
                                width={24}
                                height={24}
                                color='#08AA54'
                                WrapperClassName='p-3 rounded-[10px] border border-[#08192B1A] shadow-[0px_1px_2px_0px_#1018280D]'
                            />
                        </When>
                    </>
                }
                open={isOpen}
                onClose={handleClose}
                closePosition='right'
                footer={
                    <>
                        <When condition={isUnverifiedBasic}>
                            <div className='flex flex-col gap-3'>
                                <Button block onClick={() => router.push(`/profile/kyc`)}>
                                    Verify Now
                                </Button>
                            </div>
                        </When>
                        <When condition={isVerifiedBasic}>
                            <div className='flex flex-row gap-3'>
                                <Button block onClick={handleClose} variant='grayOutline'>
                                    Cancel
                                </Button>
                                <Button block onClick={() => router.push(`/profile/kyc`)}>
                                    Proced
                                </Button>
                            </div>
                        </When>
                    </>
                }
            >
                <div className='flex flex-col gap-2'>
                    <When condition={isUnverifiedBasic}>
                        <p className='h4 text-gray-800'>Complete Identity Verification</p>
                        <p className='xs text-[#637381]'>You must complete identity verification to start trading</p>
                    </When>
                    <When condition={isVerifiedBasic}>
                        <p className='h4 text-gray-800'>Open Trading Page</p>
                        <p className='xs text-[#637381]'>
                            You're about to be redirected to the trading page, which will open in a new tab. Do you want
                            to proceed?
                        </p>
                    </When>
                </div>
            </Modal>
        </>
    );
};

export default Trading;
