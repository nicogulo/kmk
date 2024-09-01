import React from 'react';

import Illustration from '@/components/Illustrations';

import Modal from './Modal';
import Button from '../Button';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalPendingVerif: React.FC<Props> = ({ handleClose, isOpen }) => {
    return (
        <Modal
            title={<Illustration name='Notfound' />}
            open={isOpen}
            onClose={handleClose}
            closePosition='right'
            headerClassName='!items-start'
            closeBackdrop
            footer={
                <Button block onClick={handleClose}>
                    Ok, Understood
                </Button>
            }
        >
            <div className='flex flex-col gap-2'>
                <p className='h4 text-gray-800'>Your account is under review</p>
                <p className='xs text-[#637381]'>
                    Your account is currently being reviewed. Please wait while we complete the verification process.
                </p>
            </div>
        </Modal>
    );
};

export default ModalPendingVerif;
