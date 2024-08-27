import { useRouter } from 'next/router';
import React from 'react';
import { When } from 'react-if';

import { ProfileStatus } from '@/hooks/useProfile';

import Illustration from '@/components/Illustrations';

import Modal from './Modal';
import Button from '../Button';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalTrade: React.FC<Props> = ({ handleClose, isOpen }) => {
    const router = useRouter();

    const profile = {
        userId: '123456',
        fullName: 'John Doe',
        email: 'john@gmail.com',
        country: 'Indonesia',
        phoneNumber: '08123456789',
        dateOfBirth: new Date(),
        basic: 2,
        phoneNumberUid: '123456'
    };
    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    return (
        <Modal
            title={
                <>
                    <When condition={isUnverifiedBasic}>
                        <Illustration name='Notfound' />
                    </When>
                    <When condition={isVerifiedBasic}>
                        <Illustration name='Bell' />
                    </When>
                </>
            }
            open={isOpen}
            onClose={handleClose}
            closePosition='right'
            headerClassName='!items-start'
            footer={
                <>
                    <When condition={isUnverifiedBasic}>
                        <div className='flex flex-col gap-3'>
                            <Button
                                block
                                onClick={() => {
                                    router.push(`/profile`);
                                    handleClose();
                                }}
                            >
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
                        You're about to be redirected to the trading page, which will open in a new tab. Do you want to
                        proceed?
                    </p>
                </When>
            </div>
        </Modal>
    );
};

export default ModalTrade;
