import Head from 'next/head';
import React, { useState } from 'react';
import { When } from 'react-if';

import useBalance from '@/hooks/useBalance';
import useProfile from '@/hooks/useProfile';

import Container from '@/components/Container';
import Tabs, { Tab } from '@/components/Tabs';

import BalanceInformation from './components/BalanceInformation';
import HistoryDeposit from './components/HistoryDeposit';
import HistoryWithdraw from './components/HistoryWithdraw';

const Wallet = () => {
    const [tab, setTab] = useState('deposit');
    const { profile } = useProfile();

    const { balance } = useBalance();

    return (
        <>
            <Container className='py-6'>
                <Head>
                    <title>Wallet | Binaloka</title>
                    <meta name='description' content='Login' />
                    <link rel='icon' href='/logo.ico' />
                </Head>
                <div className='flex flex-col gap-10'>
                    <BalanceInformation balance={balance} profile={profile} />
                    <div
                        className='flex flex-col
                  '
                    >
                        <div className='relative flex h-full flex-col gap-6'>
                            <div className='flex flex-row items-center justify-between '>
                                <p className='text-2xl font-bold text-gray-800'>Balance History</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Tabs>
                                    <Tab
                                        active={tab === 'deposit'}
                                        onClick={() => {
                                            setTab('deposit');
                                        }}
                                    >
                                        Deposit
                                    </Tab>
                                    <Tab
                                        active={tab === 'withdraw'}
                                        onClick={() => {
                                            setTab('withdraw');
                                        }}
                                    >
                                        Withdraw
                                    </Tab>
                                </Tabs>
                                <When condition={tab === 'deposit'}>
                                    <HistoryDeposit profile={profile} />
                                </When>
                                <When condition={tab === 'withdraw'}>
                                    <HistoryWithdraw profile={profile} />
                                </When>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Wallet;
