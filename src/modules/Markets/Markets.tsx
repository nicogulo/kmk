import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import useProfile, { ProfileStatus } from '@/hooks/useProfile';

import ChangePercentageText from '@/components/ChangePercentageText';
import Container from '@/components/Container';
import List from '@/components/List';
import ModalTrade from '@/components/Modal/ModalTrade';
import ModalUnverified from '@/components/Modal/ModalUnverified';
import Table, { TableColumn } from '@/components/Table/Table';

import LineChart from '@/modules/Markets/components/LineChart';
import { formatAbbreviatedNumber, formatRupiah, removeTrailingZero } from '@/utils/currency';

const Markets = () => {
    const [openUnverif, setOpenUnverif] = useState(false);
    const [openTrade, setOpenTrade] = useState(false);
    const { profile } = useProfile();

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    const data = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 929319966,
            market_cap: 18.3271 * 1e14, // 18.3271T -> 18.3271 * 1e12
            volume_24h: 2.027 * 1e9, // 2.027B -> 2.027 * 1e9
            change_24h: 0.14,
            chart: 'up'
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            price: 41137868,
            market_cap: 4.9173 * 1e12, // 4.917,3T -> 4.9173 * 1e12
            volume_24h: 1.79 * 1e9, // 1.79B -> 1.79 * 1e9
            change_24h: -0.01,
            chart: 'down'
        },
        {
            name: 'Binance Coin',
            symbol: 'BNB',
            price: 8225661,
            market_cap: 1.194 * 1e12, // 1.194T -> 1.194 * 1e12
            volume_24h: 2.08 * 1e9, // 2.08B -> 2.08 * 1e9
            change_24h: 0.01,
            chart: 'up'
        },
        {
            name: 'USD Coin',
            symbol: 'USDC',
            price: 15902,
            market_cap: 5467 * 1e9, // 546,7T -> 546.7 * 1e9
            volume_24h: 24.455 * 1e9, // 24.455B -> 24.455 * 1e9
            change_24h: +0.06,
            chart: 'up'
        },
        {
            name: 'Ripple',
            symbol: 'XRP',
            price: 8934,
            market_cap: 4980 * 1e9, // 498T -> 498 * 1e9
            volume_24h: 370 * 1e6, // 370M -> 370 * 1e6
            change_24h: -0.01,
            chart: 'down'
        },
        {
            name: 'Dogecoin',
            symbol: 'DOGE',
            price: 1580,
            market_cap: 23060 * 1e9, // 230,6T -> 230.6 * 1e9
            volume_24h: 274 * 1e6, // 274M -> 274 * 1e6
            change_24h: 0.01,
            chart: 'up'
        },
        {
            name: 'Cardano',
            symbol: 'ADA',
            price: 5223,
            market_cap: 1875 * 1e9, // 187,5T -> 187.5 * 1e9
            volume_24h: 371.2 * 1e6, // 371.2M -> 371.2 * 1e6
            change_24h: -0.03,
            chart: 'down'
        },
        {
            name: 'Bytecoin',
            symbol: 'BCN',
            price: 5223,
            market_cap: 1875 * 1e9, // 187,5T -> 187.5 * 1e9
            volume_24h: 78 * 1e6, // 78M -> 78 * 1e6
            change_24h: -0.03,
            chart: 'down'
        },
        {
            name: 'Solana',
            symbol: 'SOL',
            price: 5223,
            market_cap: 1875 * 1e9, // 187,5T -> 187.5 * 1e9
            volume_24h: 70.56 * 1e6, // 70.56M -> 70.56 * 1e6
            change_24h: -0.03,
            chart: 'down'
        },
        {
            name: 'Tether',
            symbol: 'USDT',
            price: 5223,
            market_cap: 1875 * 1e9, // 187,5T -> 187.5 * 1e9
            volume_24h: 56.427 * 1e6, // 56.427M -> 56.427 * 1e6
            change_24h: -0.03,
            chart: 'down'
        }
    ];

    const dummy = {
        data: [
            {
                Symbol: 'BTC-USD',
                Volume: '2.35700',
                Open: '49079.301875',
                Close: '43120.18472',
                Values: [100, 98, 95, 94, 94, 91, 91, 87, 87, 85, 79, 70, 62, 61, 61, 60, 59, 58, 56, 46, 45, 31, 13, 0]
            },
            {
                Symbol: 'ETH-USD',
                Volume: '43.12703',
                Open: '2835.12185',
                Close: '3074.23527',
                Values: [0, 3, 8, 22, 27, 47, 52, 56, 57, 57, 80, 100, 97, 94, 82, 77, 77, 60, 55, 50, 30, 26, 25, 11]
            }
        ]
    };

    const columns: TableColumn[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 264,
            render: (text, record) => {
                const code = record.symbol.toLowerCase();
                return (
                    <div className='flex w-full flex-row items-center gap-4'>
                        <div className='h-9 w-9'>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${code}.png`}
                                width={36}
                                height={36}
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
            dataIndex: 'price',
            width: 160,
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>{formatRupiah(text as number)}</span>
            )
        },
        {
            title: 'Market Cap',
            dataIndex: 'market_cap',
            width: 120,
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>
                    Rp{removeTrailingZero(formatAbbreviatedNumber(text as number, { format: '0,0.00a' }))}
                </span>
            )
        },
        {
            title: 'Volume 24h',
            dataIndex: 'volume_24h',
            width: 120,
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>
                    {removeTrailingZero(formatAbbreviatedNumber(text as number, { format: '0.[00]a' }))}
                </span>
            )
        },
        {
            title: '24h Change',
            dataIndex: 'change_24h',
            width: 88,
            render: (text) => <ChangePercentageText value={text as number} prefix='icon' />
        },
        {
            title: 'Markets',
            dataIndex: 'chart',
            width: 120,
            render: (_, value) => {
                const chart = dummy.data.find((d) => d.Symbol === `${value.symbol}-USD`)?.Values;

                const colorLine = value.change_24h > 0 ? '#54D62C' : '#FF4842';
                return <LineChart data={chart} colorLine={colorLine} />;
            }
        }
    ];

    return (
        <>
            <Container className='flex flex-row gap-6 py-6'>
                <Head>
                    <title>Markets | Binaloka</title>
                    <meta name='description' content='Login' />
                    <link rel='icon' href='/logo.ico' />
                </Head>
                <div className='flex flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-gray-800'>Market Price</h1>
                        <p className='text-[#637381]'>Trending crypto market price in Rupiah in the last 24 hours</p>
                    </div>
                    <div className='  flex items-center justify-center pt-4'>
                        <Table
                            data={data}
                            columns={columns}
                            onRow={(record) => ({
                                onClick: () => {
                                    console.log('====================================');
                                    console.log('Trade', record.name);
                                    console.log('====================================');
                                }
                            })}
                        />
                    </div>
                </div>
                <div className='flex h-full flex-col gap-3 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                    <span className='h4 font-semibold text-gray-800'>Top Movers</span>
                    <div className='flex flex-col'>
                        {data.map((item, index) => {
                            const { symbol, name, change_24h, price } = item;
                            const logo = symbol.toLowerCase();
                            return (
                                <List.Coin
                                    key={index}
                                    coinCode={name}
                                    symbol={symbol}
                                    changePercentage={change_24h}
                                    priceChangeText={formatRupiah(price)}
                                    onClick={() => {
                                        if (isUnverifiedBasic) {
                                            setOpenUnverif(true);
                                        }
                                        if (isVerifiedBasic) {
                                            setOpenTrade(true);
                                            console.log('====================================');
                                            console.log('Trade', name);
                                            console.log('====================================');
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
            <ModalTrade isOpen={openTrade} handleClose={() => setOpenTrade(false)} />
        </>
    );
};

export default Markets;
