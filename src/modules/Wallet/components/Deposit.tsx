import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';

import classNames from '@/lib/classnames';
import useVirtualAccount, { useDetailVirtualAccount } from '@/hooks/useVirtualAccount';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Collapse from '@/components/Collapse';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';
import Loader from '@/components/Loader';
import Skeleton from '@/components/Skeleton';

import { copy } from '@/utils/clipboard';

import Bca from '../svgx/Bca';
import Bri from '../svgx/Bri';
import Mandiri from '../svgx/Mandiri';
import OtherBank from '../svgx/OtherBank';
import Permata from '../svgx/Permata';

const Deposit = () => {
    const [selectBank, setSelectBank] = useState<string>('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const { virtualAccount, loading } = useVirtualAccount();
    const { fetchDetailVirtualAccount, loading: loadingDetail, virtualAccountDetail } = useDetailVirtualAccount();

    const breadcrumbItems = [
        {
            title: 'Wallet',
            href: '/wallet'
        },
        {
            title: 'Deposit Request',
            href: '/wallet/deposit'
        }
    ];

    const getDetailVirtualAccount = async (uid: string) => {
        await fetchDetailVirtualAccount(uid);
    };

    // console.log(virtualAccountDetail);

    const listPaymentGuide = [
        {
            code: 'mandiri',
            image: <Mandiri width={34} height={20} />,
            transfer_options: [
                {
                    option_name: {
                        en: 'Mobile Banking',
                        id: 'Mobile Banking'
                    },
                    steps: [
                        {
                            en: '<p><span style="color: rgb(0, 0, 0);">Open Livin Mandiri app, choose </span><strong style="color: rgb(0, 0, 0);">Transfer</strong><span style="color: rgb(0, 0, 0);"> menu</span>',
                            id: '<p><span style="color: rgb(0, 0, 0);">Buka aplikasi Livin Mandiri, pilih menu </span><strong style="color: rgb(0, 0, 0);">Transfer</strong>'
                        },
                        {
                            en: '<p> Search <strong style="color: rgb(0, 0, 0);">Xendit 88608 </strong><span style="color: rgb(0, 0, 0);">on the </span><strong style="color: rgb(0, 0, 0);">Cari penyedia jasa</strong></p>',
                            id: '<p><span style="color: rgb(0, 0, 0);"> Lakukan pencarian </span><strong style="color: rgb(0, 0, 0);">Xendit 88608 </strong><span style="color: rgb(0, 0, 0);">pada </span><strong style="color: rgb(0, 0, 0);">Cari penyedia jasa</strong></p>'
                        },
                        {
                            en: '<p><span style="color: rgb(0, 0, 0);"> In the </span><strong style="color: rgb(0, 0, 0);">No Virtual Account</strong><span style="color: rgb(0, 0, 0);">, Input VA number</span></p>',
                            id: '<p><span style="color: rgb(0, 0, 0);">Pada </span><strong style="color: rgb(0, 0, 0);">No Virtual Account</strong><span style="color: rgb(0, 0, 0);">, masukkan nomor VA</span></p>'
                        },
                        {
                            en: '<p><span style="color: rgb(0, 0, 0);">In the </span><strong style="color: rgb(0, 0, 0);">Nominal</strong><span style="color: rgb(0, 0, 0);">, input transfer amount</span></p>',
                            id: '<p><span style="color: rgb(0, 0, 0);">Pada </span><strong style="color: rgb(0, 0, 0);">Nominal</strong><span style="color: rgb(0, 0, 0);">, masukkan jumlah transfer</span></p>'
                        },
                        {
                            en: '<p><span style="color: rgb(0, 0, 0);"> Click</span><strong style="color: rgb(0, 0, 0);"> Next</strong><span style="color: rgb(0, 0, 0);">, do the </span><strong style="color: rgb(0, 0, 0);">Payment Confirmation</strong></p>',
                            id: '<p><span style="color: rgb(0, 0, 0);">Klik</span><strong style="color: rgb(0, 0, 0);"> Lanjutkan</strong><span style="color: rgb(0, 0, 0);">, lakukan </span><strong style="color: rgb(0, 0, 0);">Konfirmasi Pembayaran</strong></p>'
                        }
                    ]
                }
            ]
        },
        {
            code: 'bri',
            image: <Bri width={34} height={20} />,
            transfer_options: [
                {
                    option_name: {
                        en: 'Mobile Banking',
                        id: 'Mobile Banking'
                    },
                    steps: [
                        {
                            en: '<p>Open BRImo app, choose <strong>Pembayaran </strong>menu</p>',
                            id: '<p>Buka aplikasi BRImo, pilih menu <strong>Pembayaran</strong></p>'
                        },
                        {
                            en: '<p>Choose <strong>BRIVA</strong></p>',
                            id: '<p>Pilih <strong>BRIVA</strong></p>'
                        },
                        {
                            en: '<p>Click <strong>Tambah Pembayaran Baru</strong></p>',
                            id: '<p>Klik <strong>Tambah Pembayaran Baru</strong></p>'
                        },
                        {
                            en: '<p>In the <strong>Nomor Tujuan</strong>, input VA number</p>',
                            id: '<p>Pada <strong>Nomor Tujuan</strong>, masukkan nomor VA</p>'
                        },
                        {
                            en: '<p>In the<strong> Nomina</strong>l, input transfer amount</p>',
                            id: '<p>Pada<strong> Nomina</strong>l, masukkan jumlah transfer</p>'
                        },
                        {
                            en: '<p>Click <strong>Lanjutkan</strong>, do the <strong>Payment Confirmation</strong></p>',
                            id: '<p>Klik <strong>Lanjutkan</strong>, lakukan <strong>Konfirmasi Pembayaran</strong></p>'
                        },
                        {
                            en: '<p>If the amount of transfer exceeds your bank card limit, do the split transfer amount</p>',
                            id: '<p>Jika jumlah transfer melebihi limit kartu bank Anda, lakukan pembagian jumlah transfer secara berkala (split transfer)</p>'
                        }
                    ]
                }
            ]
        },
        {
            code: 'bca',
            image: <Bca width={34} height={20} />,
            transfer_options: [
                {
                    option_name: {
                        en: 'Mobile Banking',
                        id: 'Mobile Banking'
                    },
                    steps: [
                        {
                            en: '<p>Buka aplikasi m-BCA, pilih menu <strong>m-Transfer</strong></p>',
                            id: '<p>Open m-BCA app, choose <strong>m-Transfer </strong>menu</p>'
                        },
                        {
                            en: '<p>Pada <strong>Transfer</strong>, pilih <strong>Antar Bank</strong></p>',
                            id: '<p>In the <strong>Transfer</strong>, choose <strong>Antar Bank</strong></p>'
                        },
                        {
                            en: '<p>Klik <strong>Bank</strong>,<strong> </strong>pilih <strong>Bank Tujuan</strong></p>',
                            id: '<p>Click <strong>Bank</strong>,<strong> </strong>choose <strong>Bank Tujuan</strong></p>'
                        },
                        {
                            en: '<p>Klik <strong>Ke Rekening Tujuan</strong>,<strong> </strong>pilih nomor rekening atas nama <strong>Binaloka</strong></p>',
                            id: '<p>Click <strong>Ke Rekening Tujuan</strong>,<strong> </strong>choose the account number on behalf of of <strong>Binaloka</strong></p>'
                        },
                        {
                            en: '<p>Pada <strong>Jumlah Uang</strong>, masukkan jumlah transfer</p>',
                            id: '<p>In the <strong>Jumlah Uang</strong>, input the transfer amount</p>'
                        },
                        {
                            en: '<p>Pada <strong>Layanan Transfer</strong>, pilih <strong>BI-FAST</strong></p>',
                            id: '<p>In the <strong>Layanan Transfer</strong>, choose <strong>BI-FAST</strong></p>'
                        }
                    ]
                }
            ]
        },
        {
            code: 'permata',
            image: <Permata width={34} height={20} />,
            transfer_options: [
                {
                    option_name: {
                        en: 'Mobile Banking',
                        id: 'Mobile Banking'
                    },
                    steps: [
                        {
                            en: '<p>Open mobile Permata app, choose <strong>Pembayaran Tagihan</strong></p>',
                            id: '<p>Pada aplikasi mobile Permata, pilih <strong>Pembayaran Tagihan</strong></p>'
                        },
                        {
                            en: '<p>Choose <strong>Virtual Account</strong></p>',
                            id: '<p>Pilih <strong>Virtual Account</strong></p>'
                        },
                        {
                            en: '<p>In the <strong>Nomor Virtual Account</strong>, input VA number</p>',
                            id: '<p>Pada <strong>Nomor Virtual Account</strong>, masukkan nomor VA</p>'
                        },
                        {
                            en: '<p>Click <strong>Next</strong>, in the <strong>Nominal</strong> input transfer amount</p>',
                            id: '<p>Klik <strong>Selanjutnya</strong>, pada <strong>Nominal</strong> masukkan jumlah transfer</p>'
                        },
                        {
                            en: '<p>Click<strong> OK</strong>, do the <strong>Payment Confirmation</strong></p>',
                            id: '<p>Klik<strong> OK</strong>, lakukan <strong>Konfirmasi Pembayaran</strong></p>'
                        }
                    ]
                }
            ]
        },
        {
            code: 'other',
            image: <OtherBank width={34} height={20} />,
            transfer_options: [
                {
                    option_name: {
                        en: 'Mobile Banking',
                        id: 'Mobile Banking'
                    },
                    steps: [
                        {
                            en: '<p>Open the mobile banking app, choose <strong>Transfer </strong>menu</p>',
                            id: '<p>Buka aplikasi mobile banking, pilih menu <strong>Transfer</strong></p>'
                        },
                        {
                            en: '<p>Choose<strong> Bank Tujuan</strong></p>',
                            id: '<p>Pilih<strong> Bank Tujuan</strong></p>'
                        },
                        {
                            en: '<p>In the<strong> Rekening Tujuan,</strong> input the VA number</p>',
                            id: '<p>Pada<strong> Rekening Tujuan,</strong> masukkan nomor VA</p>'
                        },
                        {
                            en: '<p>Input the <strong>Transfer Amount</strong></p>',
                            id: '<p>Pada <strong>Nominal Transfer, m</strong>asukkan jumlah transfer</p>'
                        },
                        {
                            en: '<p>Do the <strong>Payment Co</strong>n<strong>firmation</strong></p>',
                            id: '<p>Lakukan <strong>Konfirmasi</strong> <strong>Pembayaran</strong></p>'
                        }
                    ]
                }
            ]
        }
    ];

    useEffect(() => {
        if (isFirstLoad && virtualAccount.length > 0) {
            fetchDetailVirtualAccount(virtualAccount[0].uid);
            setSelectBank(virtualAccount[0].code);
            setIsFirstLoad(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [virtualAccount]);

    // const accountNumber = virtualAccount.find((item) => item.uid === selectBank)?.uid;
    // const accountName = virtualAccount?.find((item) => item?.uid === selectBank)?.name;

    return (
        <Container className='py-6'>
            <Head>
                <title>Deposit Request | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex flex-col gap-10'>
                <Breadcrumb items={breadcrumbItems} />
                <h3 className='!font-semibold text-gray-800'>Deposit Request</h3>
                <div className='flex flex-row gap-4 '>
                    <div className='border-text-transparent-10 flex h-full w-[360px] flex-col rounded-xl border bg-white p-6 '>
                        <span className='pb-3 text-xs text-gray-700'>Virtual Account Transfer</span>
                        <If condition={loading}>
                            <Then>
                                <div className='flex flex-col gap-2'>
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <Skeleton key={index} className='h-12 w-[238px]' />
                                    ))}
                                </div>
                            </Then>
                            <Else>
                                {virtualAccount.map((item, index) => (
                                    <div
                                        className={classNames(
                                            'border-text-transparent-15 mb-2 flex cursor-pointer flex-row items-center gap-3 rounded-[3px] border p-3 transition-colors duration-150',
                                            {
                                                'border-primary-300 bg-blue-100':
                                                    selectBank.toUpperCase() === item.code,
                                                'bg-white': selectBank.toUpperCase() !== item.code
                                            }
                                        )}
                                        key={index}
                                        onClick={async () => {
                                            console.log(item.uid);
                                            await getDetailVirtualAccount(item.uid);
                                            setSelectBank(item.code);
                                        }}
                                    >
                                        {/* {
                                            listPaymentGuide.find((guide) => guide.code.toUpperCase() === item.code)
                                                ?.image
                                        } */}
                                        <span className='xs font-semibold text-gray-800'>{item.name}</span>
                                    </div>
                                ))}
                            </Else>
                        </If>
                    </div>
                    <div className='border-text-transparent-10 flex w-full flex-col rounded-xl border bg-white p-6 '>
                        <span className='h4 font-semibold text-gray-800'>Deposit Instructions</span>
                        <If condition={loadingDetail}>
                            <Then>
                                <div className='flex h-full flex-col items-center justify-center '>
                                    <Loader />
                                </div>
                            </Then>
                            <Else>
                                <If condition={virtualAccountDetail !== null}>
                                    <Then>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex flex-col gap-2 rounded-[3px] border border-gray-300 bg-[#D0F0FA80] px-4 py-3'>
                                                <span className='text-xs uppercase text-gray-600'>
                                                    {virtualAccountDetail?.account_name}
                                                </span>
                                                <div className='flex flex-row items-center gap-4'>
                                                    <div className='flex flex-row items-center gap-2'>
                                                        {/* {
                                                            listPaymentGuide.find(
                                                                (item) => item.code.toUpperCase() === selectBank
                                                            )?.image
                                                        } */}
                                                        <span className='h4 font-semibold text-gray-800'>
                                                            {virtualAccountDetail?.account_number}
                                                        </span>
                                                    </div>
                                                    <Button
                                                        size='sm'
                                                        onClick={() => copy(virtualAccountDetail?.account_number || '')}
                                                    >
                                                        <Icons icon='Copy' /> Copy
                                                    </Button>
                                                </div>
                                            </div>

                                            {listPaymentGuide
                                                .find((item) => item.code.toUpperCase() === selectBank)
                                                ?.transfer_options.map((option, index) => (
                                                    <Collapse
                                                        title={
                                                            <span className='xs font-semibold text-gray-800'>
                                                                {option.option_name.en}
                                                            </span>
                                                        }
                                                        key={index}
                                                        defaultExpanded={index === 0}
                                                    >
                                                        <div className='flex flex-col gap-[6px]'>
                                                            {option.steps.map((step, index) => (
                                                                <div className='flex flex-row gap-2' key={index}>
                                                                    <div className='text-secondary-300 flex h-6 w-6 items-center justify-center rounded-full bg-[#E4D4FB80] text-xs font-semibold'>
                                                                        {index + 1}
                                                                    </div>
                                                                    <div
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: step.en
                                                                        }}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Collapse>
                                                ))}
                                        </div>
                                    </Then>
                                    <Else>
                                        <div className='flex h-full flex-col items-center justify-center gap-3'>
                                            <Illustration name='Notfound' width={214} height={214} />
                                            <span className='h4 font-semibold text-gray-800'>
                                                Virtual Account not found
                                            </span>

                                            <span className='xs text-gray-600'>
                                                Virtual Account not found, please select another virtual account
                                            </span>
                                        </div>
                                    </Else>
                                </If>
                            </Else>
                        </If>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Deposit;
