import Image from 'next/image';
import React, { useState } from 'react';

import { useMarkets } from '@/hooks/useMarkets';

import ChangePercentageText from '@/components/ChangePercentageText';
import Container from '@/components/Container';
import ModalLogin from '@/components/Modal/ModalLogin';
import ModalPendingVerif from '@/components/Modal/ModalPendingVerify';
import ModalTrade from '@/components/Modal/ModalTrade';
import ModalUnverified from '@/components/Modal/ModalUnverified';

import { formatRupiah } from '@/utils/currency';

const MarketList = () => {
    const [openUnverif, setOpenUnverif] = useState(false);
    const [openTrade, setOpenTrade] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const [openModalPending, setOpenModalPending] = useState(false);

    const { markets } = useMarkets();

    return (
        <>
            <Container className='flex flex-col items-center pb-[80px]'>
                <div className='flex flex-col gap-3 pb-14 text-center' id='market-list'>
                    <h1 className='font-semibold text-gray-800'>Aset Kripto Populer</h1>
                    <p className='text-[#637381]'>Harga market crypto yang sedang trending dalam 24 jam terakhir</p>
                </div>
                <div className='flex w-full items-center justify-center pt-4'>
                    <div className='flex w-full flex-col justify-center gap-6 xl:flex-row'>
                        {markets
                            ?.filter((item) => item.close)
                            .map((item, index) => {
                                return (
                                    <div
                                        className='flex flex-row gap-8 rounded-3xl bg-gray-200 p-4 xl:flex-col'
                                        key={index}
                                    >
                                        <div className='flex w-full flex-col gap-3 xl:min-w-[188px]'>
                                            <div className='flex flex-row items-center gap-4'>
                                                <Image
                                                    src={item.logo as string}
                                                    width={36}
                                                    height={36}
                                                    alt={item.name as string}
                                                    className='rounded-full'
                                                />
                                                <span className='text-2xl font-semibold text-gray-800'>
                                                    {item.code}
                                                </span>
                                            </div>
                                            <span className='text-xl text-gray-700'>{formatRupiah(item.close)}</span>
                                        </div>
                                        <ChangePercentageText
                                            value={item.changePercentage}
                                            prefix='icon'
                                            className='!text-2xl'
                                        />
                                    </div>
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

export default MarketList;
