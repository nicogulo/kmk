import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ProfileModel, ProfileStatus } from '@/hooks/useProfile';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Modal from '@/components/Modal';
import ModalPendingVerif from '@/components/Modal/ModalPendingVerify';
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
    profile?: ProfileModel;
}

const BalanceInformation: React.FC<Props> = ({ balance, profile }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWithdraw, setOpenModalWithdraw] = useState(false);
    const [openModalPending, setOpenModalPending] = useState(false);
    const router = useRouter();

    const { total, available, open, pending } = balance;

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.kyc;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.kyc;

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
                                } else if (isVerifiedBasic) {
                                    router.push('/wallet/deposit');
                                } else {
                                    setOpenModalPending(true);
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
                                } else if (isVerifiedBasic) {
                                    setOpenModalWithdraw(true);
                                } else {
                                    setOpenModalPending(true);
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
            <Modal
                open={openModalWithdraw}
                onClose={() => setOpenModalWithdraw(false)}
                title='Withdraw'
                closePosition='right'
                width={480}
                wrapperClassName='max-w-[480px]'
            >
                <div className='flex flex-col gap-4'>
                    <div
                        className='flex cursor-pointer flex-row items-center gap-4 rounded-[3px] border border-gray-300 px-3 py-2 hover:bg-gray-100'
                        onClick={() => router.push('/wallet/withdraw/withdraw-request')}
                    >
                        <Icons icon='MoneyWithdraw' width={24} height={24} className='text-gray-700' />
                        <div className='flex flex-col gap-1'>
                            <span className='xs font-semibold text-gray-800'>Withdraw Request</span>
                            <span className='xs text-gray-600'>
                                Withdraw your available balance to your bank account.
                            </span>
                        </div>
                    </div>
                    <div
                        className='flex cursor-pointer flex-row items-center gap-4 rounded-[3px] border border-gray-300 px-3 py-2 hover:bg-gray-100'
                        onClick={() => router.push('/wallet/withdraw/withdraw-bank')}
                    >
                        <Icons icon='Bank' width={24} height={24} className='text-gray-700' />
                        <div className='flex flex-col gap-1'>
                            <span className='xs font-semibold text-gray-800'>Add Bank for Withdrawal</span>
                            <span className='xs text-gray-600'>Link a bank account to enable withdrawals.</span>
                        </div>
                    </div>
                </div>
            </Modal>

            <ModalPendingVerif isOpen={openModalPending} handleClose={() => setOpenModalPending(false)} />
        </>
    );
};

export default BalanceInformation;
