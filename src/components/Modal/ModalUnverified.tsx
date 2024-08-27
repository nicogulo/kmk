import { useRouter } from 'next/router';
import React from 'react';

import Illustration from '@/components/Illustrations';

import Modal from './Modal';
import Button from '../Button';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalUnverified: React.FC<Props> = ({ handleClose, isOpen }) => {
    const router = useRouter();

    return (
        <Modal
            title={<Illustration name='Notfound' />}
            open={isOpen}
            onClose={handleClose}
            closePosition='right'
            headerClassName='!items-start'
            footer={
                <Button block onClick={() => router.push(`/profile/kyc`)}>
                    Verify Now
                </Button>
            }
        >
            <div className='flex flex-col gap-2'>
                <p className='h4 text-gray-800'>Complete Identity Verification</p>
                <p className='xs text-[#637381]'>You must complete identity verification to start trading</p>
            </div>
        </Modal>
    );
};

export default ModalUnverified;
