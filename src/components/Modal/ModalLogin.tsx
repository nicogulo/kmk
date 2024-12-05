import Link from 'next/link';
import React from 'react';

import Illustration from '@/components/Illustrations';

import Modal from './Modal';
import Button from '../Button';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalLogin: React.FC<Props> = ({ handleClose, isOpen }) => {
    return (
        <Modal
            title={<Illustration name='Bell' />}
            open={isOpen}
            onClose={handleClose}
            closePosition='right'
            headerClassName='!items-start'
            footer={
                <div className='flex flex-row gap-3'>
                    <Link href='/login' className='!w-full'>
                        <Button block>Login</Button>
                    </Link>
                </div>
            }
        >
            <div className='flex flex-col gap-2'>
                <p className='h4 text-gray-800'>Login Required</p>
                <p className='xs text-[#637381]'>You need to login to access this feature. Do you want to proceed?</p>
            </div>
        </Modal>
    );
};

export default ModalLogin;
