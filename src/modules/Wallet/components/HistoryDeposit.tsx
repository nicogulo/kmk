/* eslint-disable @typescript-eslint/no-empty-function */
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { Case, Else, If, Switch, Then } from 'react-if';

import useHistory from '@/hooks/useHistory';
import { ProfileModel, ProfileStatus } from '@/hooks/useProfile';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Illustration from '@/components/Illustrations';
import Loader from '@/components/Loader';
import ModalUnverified from '@/components/Modal/ModalUnverified';
import Table from '@/components/Table';
import { TableColumn } from '@/components/Table/Table';

import { formatRupiah } from '@/utils/currency';
import { formatDate } from '@/utils/format-date';

interface Props {
    profile?: ProfileModel;
}

const DepositHistory: React.FC<Props> = ({ profile }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState<number | undefined>();
    const [openModal, setOpenModal] = useState(false);
    const limit = 10;

    const router = useRouter();

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.kyc;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.kyc;

    const { history, loading } = useHistory({
        filter: {
            limit,
            page: currentPage,
            sides: 'deposit',
            status
        }
    });

    const data =
        history?.histories.map((item) => ({
            uid: item.uid,
            requestDate: item.created_at,
            amount: item.idr_gross_amount,
            status: item.status
        })) || [];

    // const data = [
    //     {
    //         requestDate: 1719207840,
    //         amount: 16000000,
    //         status: 1
    //     },
    //     {
    //         requestDate: 1719106260,
    //         amount: 16000000,
    //         status: 2
    //     },
    //     {
    //         requestDate: 1718742480,
    //         amount: 16000000,
    //         status: 4
    //     },
    //     {
    //         requestDate: 1718499120,
    //         amount: 16000000,
    //         status: 3
    //     },
    //     {
    //         requestDate: 1718162700,
    //         amount: 16000000,
    //         status: 5
    //     },
    //     {
    //         requestDate: 1718001000,
    //         amount: 16000000,
    //         status: 1
    //     },
    //     {
    //         requestDate: 1717815360,
    //         amount: 16000000,
    //         status: 2
    //     },
    //     {
    //         requestDate: 1717470240,
    //         amount: 16000000,
    //         status: 4
    //     },
    //     {
    //         requestDate: 1717210980,
    //         amount: 16000000,
    //         status: 3
    //     },
    //     {
    //         requestDate: 1716846240,
    //         amount: 16000000,
    //         status: 5
    //     },
    //     {
    //         requestDate: 1716684540,
    //         amount: 16000000,
    //         status: 1
    //     },
    //     {
    //         requestDate: 1716407160,
    //         amount: 16000000,
    //         status: 2
    //     },
    //     {
    //         requestDate: 1716024960,
    //         amount: 16000000,
    //         status: 4
    //     },
    //     {
    //         requestDate: 1715801820,
    //         amount: 16000000,
    //         status: 3
    //     },
    //     {
    //         requestDate: 1715486640,
    //         amount: 16000000,
    //         status: 5
    //     }
    // ];

    const filter = [
        {
            name: 'All',
            value: undefined
        },
        {
            name: 'Pending',
            value: 0
        },

        {
            name: 'Success',
            value: 1
        },
        {
            name: 'Failed',
            value: 2
        }
    ];
    const columns: TableColumn[] = [
        {
            title: 'REQUEST DATE',
            dataIndex: 'requestDate',
            headClassName: '!xs',
            render: (data) => <p className='p text-gray-800'>{formatDate(data, 'DD MMMM YYYY, HH:mm')}</p>
        },
        {
            title: 'AMOUNT',
            dataIndex: 'amount',
            headClassName: '!xs',
            render: (data) => <p className='p text-gray-800'>{formatRupiah(data as number)}</p>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            headClassName: '!xs',
            render: (data) => {
                const getVariant = () => {
                    switch (data) {
                        case 1:
                            return 'green';
                        case 2:
                            return 'red';
                        case 0:
                            return 'yellow';
                        default:
                            return 'gray';
                    }
                };
                return (
                    <Badge variant={getVariant()}>
                        <Switch>
                            <Case condition={data === 0}>Pending</Case>
                            <Case condition={data === 1}>Success</Case>
                            <Case condition={data === 2}>Failed</Case>
                        </Switch>
                    </Badge>
                );
            }
        }
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalDataPage = 10;
    const startIndex = (currentPage - 1) * totalDataPage;
    const endIndex = startIndex + totalDataPage;
    const dataFilter = status !== undefined && status !== null ? data.filter((item) => item.status === status) : data;
    const dataPerPage = dataFilter.slice(startIndex, endIndex);

    return (
        <>
            <TabGroup className='relative'>
                <If condition={data?.length > 0}>
                    <Then>
                        <div className='flex h-10 flex-row justify-between'>
                            <TabList className='flex gap-2'>
                                {filter.map(({ name, value }) => (
                                    <Tab
                                        as='p'
                                        onClick={() => {
                                            setCurrentPage(1);
                                            setStatus(value);
                                        }}
                                        key={name}
                                        className='data-[selected]:bg-primary-300 border-text-transparent-10 hover:bg-primary-100 flex cursor-pointer items-center justify-center rounded-full border px-4 py-1 text-xs font-semibold text-gray-600 focus:outline-none data-[selected]:text-white'
                                    >
                                        {name}
                                    </Tab>
                                ))}
                            </TabList>
                        </div>
                        <div className='mt-4 flex flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                            <Table
                                data={dataPerPage}
                                columns={columns}
                                loading={loading}
                                noHover
                                maxRow={totalDataPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                totalPages={Math.ceil(dataFilter.length / totalDataPage)}
                                withPagination={dataFilter.length > totalDataPage}
                                emptyMessage='No data found'
                                emptySubtitle='You don’t have any deposit request history'
                            />
                        </div>
                    </Then>
                    <Else>
                        {loading ? (
                            <div className='absolute -bottom-[360px] flex w-full flex-col items-center justify-center gap-4 py-6'>
                                <Loader type='Oval' width={40} height={40} />
                            </div>
                        ) : (
                            <div className='absolute -bottom-[460px] flex w-full flex-col items-center justify-center gap-4 py-6'>
                                <Illustration name='Notfound' width={155} height={172} />
                                <p className='text-center text-[32px] font-bold leading-10 text-[#121416]'>
                                    You don't have deposit <br />
                                    request history
                                </p>
                                <Button
                                    onClick={() => {
                                        if (isUnverifiedBasic) {
                                            setOpenModal(true);
                                        }
                                    }}
                                >
                                    Submit Deposit Request
                                </Button>
                            </div>
                        )}
                    </Else>
                </If>
            </TabGroup>
            <ModalUnverified isOpen={openModal} handleClose={() => setOpenModal(false)} />
        </>
    );
};

export default DepositHistory;
