import Image from 'next/image';
import React from 'react';

import chartData from '@/data/chart.json';
import data from '@/data/market.json';

import ChangePercentageText from '@/components/ChangePercentageText';
import Container from '@/components/Container';
import Table from '@/components/Table';
import { TableColumn } from '@/components/Table/Table';

import LineChart from '@/modules/Markets/components/LineChart';
import { formatAbbreviatedNumber, formatRupiah, removeTrailingZero } from '@/utils/currency';

const MarketList = () => {
    const columns: TableColumn[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 100,
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
            width: 80,
            align: 'right',
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>{formatRupiah(text as number)}</span>
            )
        },
        {
            title: 'Market Cap',
            dataIndex: 'market_cap',
            width: 60,
            align: 'right',
            render: (text) => (
                <span className='text-xs font-semibold !leading-5 text-gray-800'>
                    Rp{removeTrailingZero(formatAbbreviatedNumber(text as number, { format: '0,0.00a' }))}
                </span>
            )
        },

        {
            title: '24h Change',
            dataIndex: 'change_24h',
            align: 'right',
            width: 60,
            render: (text) => <ChangePercentageText value={text as number} prefix='icon' />
        },
        {
            title: 'Markets',
            dataIndex: 'chart',
            width: 60,
            render: (_, value) => {
                const chart = chartData.find((d) => d.Symbol === `${value.symbol}-USD`)?.Values;

                const colorLine = value.change_24h > 0 ? '#54D62C' : '#FF4842';
                return <LineChart data={chart} colorLine={colorLine} />;
            }
        }
    ];

    return (
        <Container className='flex flex-col items-center pb-[80px]'>
            <div className='flex flex-col gap-3 pb-14 text-center'>
                <h1 className='font-semibold text-gray-800'>Market Price</h1>
                <p className='text-[#637381]'>Trending crypto market price in Rupiah in the last 24 hours</p>
            </div>
            <div className='flex w-[70%] flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
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
        </Container>
    );
};

export default MarketList;
