import Link from 'next/link';
import React from 'react';

import Illustration from '@/components/Illustrations';

import Modal from './Modal';
import Button from '../Button';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalTrade: React.FC<Props> = ({ handleClose, isOpen }) => {
    return (
        <Modal
            title={<Illustration name='Bell' />}
            open={isOpen}
            onClose={handleClose}
            closePosition='right'
            headerClassName='!items-start'
            footer={
                <div className='flex flex-row gap-3'>
                    <Button block onClick={handleClose} variant='grayOutline'>
                        Cancel
                    </Button>
                    <Link
                        href='https://sandbox-trade.binalokaindonesia.com'
                        className='w-full'
                        target='_blank'
                        onClick={handleClose}
                    >
                        <Button block>Proceed</Button>
                    </Link>
                </div>
            }
        >
            <div className='flex flex-col gap-2'>
                <p className='h4 text-gray-800'>Open Trading Page</p>
                <p className='xs text-[#637381]'>
                    You're about to be redirected to the trading page, which will open in a new tab. Do you want to
                    proceed?
                </p>
            </div>
        </Modal>
    );
};

export default ModalTrade;
