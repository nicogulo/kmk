import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import { useMarkets } from '@/hooks/useMarkets';
import useProfile, { ProfileStatus } from '@/hooks/useProfile';

import ChangePercentageText from '@/components/ChangePercentageText';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Input from '@/components/Input';
import List from '@/components/List';
import ModalLogin from '@/components/Modal/ModalLogin';
import ModalPendingVerif from '@/components/Modal/ModalPendingVerify';
import ModalTrade from '@/components/Modal/ModalTrade';
import ModalUnverified from '@/components/Modal/ModalUnverified';
import Table, { TableColumn } from '@/components/Table/Table';

import { formatAbbreviatedNumber, formatRupiah, removeTrailingZero } from '@/utils/currency';

const Markets = () => {
    const [openUnverif, setOpenUnverif] = useState(false);
    const [openTrade, setOpenTrade] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openModalPending, setOpenModalPending] = useState(false);
    const [search, setSearch] = useState<string>('');

    const { profile } = useProfile();
    const { markets, loading: loadingMarket } = useMarkets({ search });

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.kyc || ProfileStatus.REVOKE === profile?.kyc;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.kyc;
    const isPendingBasic = ProfileStatus.PENDING === profile?.kyc;

    const columns: TableColumn[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 240,
            render: (text, record) => {
                const code = record.symbol.toLowerCase();
                return (
                    <div className='flex w-full flex-row items-center gap-4'>
                        <div className='h-9 w-9 rounded-full'>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${code}.png`}
                                width={36}
                                height={36}
                                className='rounded-full'
                                alt={text as string}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs font-semibold !leading-5 text-gray-800'>{text}</span>
                            <span className='text-xs uppercase text-gray-600'>{code}</span>
                        </div>
                    </div>
                );
            }
        },
        {
            title: 'Price',
            dataIndex: 'close',
            width: 160,
            align: 'right',
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>
                    {formatRupiah(text as number, { precision: null })}
                </span>
            )
        },

        {
            title: 'Volume 24h',
            dataIndex: 'volume',
            width: 120,
            align: 'right',
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>
                    {removeTrailingZero(formatAbbreviatedNumber(text as number, { format: '0.[00]a' }))}
                </span>
            )
        },
        {
            title: '24h Change',
            dataIndex: 'changePercentage',
            width: 100,
            align: 'right',
            render: (text) => <ChangePercentageText value={text as number} prefix='icon' />
        }
    ];

    return (
        <>
            <Container className='flex flex-row gap-6 py-6'>
                <Head>
                    <title>Markets | KMK</title>
                    <meta name='description' content='Login' />
                    <link rel='icon' href='/logo.ico' />
                </Head>
                <div className='flex flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-semibold text-gray-800'>Market Price</h1>
                            <p className='text-[#637381]'>
                                Trending crypto market price in Rupiah in the last 24 hours
                            </p>
                        </div>
                        <Input
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e)}
                            prefix={<Icons icon='Search' width={24} height={24} className='text-primary-300' />}
                            className='!w-[320px] !rounded-lg'
                        />
                    </div>
                    <div className='flex items-center justify-center pt-4'>
                        <Table
                            data={markets}
                            columns={columns}
                            loading={loadingMarket}
                            loadingRowCount={10}
                            emptyMessage='No data available'
                            emptySubtitle='Please try again later'
                            onRow={() => ({
                                onClick: () => {
                                    switch (true) {
                                        case isUnverifiedBasic:
                                            setOpenUnverif(true);
                                            break;
                                        case isVerifiedBasic:
                                            setOpenTrade(true);
                                            break;
                                        case isPendingBasic:
                                            setOpenModalPending(true);
                                            break;
                                        default:
                                            setOpenLogin(true);
                                            break;
                                    }
                                }
                            })}
                        />
                    </div>
                </div>
                <div className='flex h-full flex-col gap-3 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                    <span className='h4 font-semibold text-gray-800'>Top Movers</span>
                    <div className='flex flex-col'>
                        {[...markets]
                            .sort((a, b) => b.changePercentage - a.changePercentage)
                            .map((item, index) => {
                                const { symbol, name, changePercentage, close } = item;
                                const logo = symbol.toLowerCase();
                                return (
                                    <List.Coin
                                        key={index}
                                        coinCode={name}
                                        symbol={symbol}
                                        changePercentage={changePercentage}
                                        priceChangeText={formatRupiah(close)}
                                        onClick={() => {
                                            switch (true) {
                                                case isUnverifiedBasic:
                                                    setOpenUnverif(true);
                                                    break;
                                                case isVerifiedBasic:
                                                    setOpenTrade(true);
                                                    break;
                                                case isPendingBasic:
                                                    setOpenModalPending(true);
                                                    break;
                                                default:
                                                    setOpenLogin(true);
                                                    break;
                                            }
                                        }}
                                        coinLogo={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${logo}.png`}
                                    />
                                );
                            })}
                    </div>
                </div>
            </Container>
            <ModalUnverified isOpen={openUnverif} handleClose={() => setOpenUnverif(false)} />
            <ModalPendingVerif isOpen={openModalPending} handleClose={() => setOpenModalPending(false)} />
            <ModalTrade isOpen={openTrade} handleClose={() => setOpenTrade(false)} />
            <ModalLogin isOpen={openLogin} handleClose={() => setOpenLogin(false)} />
        </>
    );
};

export default Markets;
