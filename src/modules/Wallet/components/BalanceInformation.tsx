import React, { useState } from 'react';

import { ProfileModel, ProfileStatus } from '@/hooks/useProfile';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import ModalUnverified from '@/components/Modal/ModalUnverified';

import { formatRupiah } from '@/utils/currency';

interface Balance {
    total: number;
    available: number;
    open: number;
    pending: number;
}

interface Props {
    balance: Balance;
    profile: ProfileModel;
}

const BalanceInformation: React.FC<Props> = ({ balance, profile }: Props) => {
    const [openModal, setOpenModal] = useState(false);

    const { total, available, open, pending } = balance;

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    return (
        <>
            <div className='border-text-transparent-10 flex flex-row items-start justify-between rounded-xl border bg-white p-6'>
                <div className='flex flex-col gap-0.5'>
                    <p className='text-gray-600'>Total Balance</p>
                    <p className='text-[32px] font-semibold leading-10 text-gray-800'>{formatRupiah(total)}</p>
                </div>
                <div className='flex flex-row items-center gap-6'>
                    <div className='flex min-w-[160px] flex-col'>
                        <p className='text-gray-600'>Available Balance</p>
                        <p className='text-xl font-semibold text-gray-800'>{formatRupiah(available)}</p>
                    </div>
                    <div className='flex min-w-[160px] flex-col'>
                        <p className='text-gray-600'>Orders</p>
                        <p className='text-xl font-semibold text-gray-800'>{formatRupiah(open)}</p>
                    </div>
                    <div className='flex min-w-[160px] flex-col'>
                        <p className='text-gray-600'>Pending Order</p>
                        <p className='text-xl font-semibold text-gray-800'>{formatRupiah(pending)}</p>
                    </div>
                    <div className='flex h-fit min-w-[160px] flex-row gap-4'>
                        <Button
                            onClick={() => {
                                if (isUnverifiedBasic) {
                                    setOpenModal(true);
                                }
                            }}
                        >
                            <Icons icon='ArrowLeft' className='-rotate-90' width={24} height={24} /> Deposit
                        </Button>
                        <Button
                            variant='secondary'
                            onClick={() => {
                                if (isUnverifiedBasic) {
                                    setOpenModal(true);
                                }
                            }}
                        >
                            <Icons icon='ArrowLeft' className='rotate-90' width={24} height={24} />
                            Withdraw
                        </Button>
                    </div>
                </div>
            </div>

            <ModalUnverified isOpen={openModal} handleClose={() => setOpenModal(false)} />
        </>
    );
};

export default BalanceInformation;
