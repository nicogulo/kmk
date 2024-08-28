/* eslint-disable @typescript-eslint/no-empty-function */
import { Dialog, DialogPanel, Tab, TabGroup, TabList, Transition, TransitionChild } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { Case, Else, If, Switch, Then } from 'react-if';

import useHistory, { useHistoryDetail } from '@/hooks/useHistory';
import { ProfileModel, ProfileStatus } from '@/hooks/useProfile';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import ModalUnverified from '@/components/Modal/ModalUnverified';
import Table from '@/components/Table';
import { TableColumn } from '@/components/Table/Table';
import { toast } from '@/components/Toast';

import { formatRupiah } from '@/utils/currency';
import { formatDate } from '@/utils/format-date';

interface ModalProps {
    data: any;
    onCallbak?: () => void;
}

const ModalViewProof = ({ data }: ModalProps) => {
    const [openModal, setOpenModal] = useState(false);

    const { fetchHistory, history, loading } = useHistoryDetail(data?.uid);
    const handleOpen = () => {
        setOpenModal(true);
        fetchHistory();
    };

    return (
        <>
            <Button variant='grayOutline' className='!w-fit !px-2 !py-1.5' onClick={handleOpen}>
                View Proof
            </Button>
            <Transition appear show={openModal} as={Fragment}>
                <Dialog as='div' className='relative z-[51]' onClose={() => setOpenModal(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black/90' />
                    </TransitionChild>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <Button onClick={() => setOpenModal(false)} className='absolute right-4 top-4'>
                            Close
                        </Button>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className='flex w-full max-w-md transform justify-center overflow-hidden rounded-2xl  p-6 text-left align-middle  transition-all'>
                                    {loading ? (
                                        <Loader type='Oval' width={80} height={80} />
                                    ) : (
                                        <Image
                                            src={history?.file_url || ''}
                                            alt='Proof'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{ height: '100%', width: 'auto' }}
                                        />
                                    )}
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

const ModalUploadProof = ({ data, onCallbak }: ModalProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [imageFile, setImageFile] = useState<File>();
    const [loading, setLoading] = useState(false);

    const { uploadBankReceipt } = useHistoryDetail(data.uid);

    const handleUpload = (e: any) => {
        const file = e.target.files[0];
        if (file && file.size > 5242880) {
            // 5MB in bytes
            toast.error('File size should not exceed 5MB.');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview((reader.result as string) ?? '');
            setImageFile(file);
        };
        reader.readAsDataURL(file);
    };
    const handleChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > 5242880) {
                // 5MB in bytes
                toast.error('File size should not exceed 5MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setImageFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview('');
        }
    };
    const handleRemoveFile = () => {
        setImagePreview('');
        setImageFile(undefined);

        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };
    const handleOpen = () => {
        setOpenModal(true);
    };
    const onSubmit = async () => {
        if (!imageFile) {
            toast.error('Please upload a payment proof.');
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', imageFile);
            const res = await uploadBankReceipt(imageFile);

            if (res.message === 'success') {
                toast.success('Upload payment proof success');
                onCallbak?.();
            }

            setOpenModal(false);
        } catch (error) {
            console.log('eee', error);
        }
        setLoading(false);
    };

    return (
        <>
            <Button variant='grayOutline' className='!w-fit !px-2 !py-1.5' onClick={handleOpen}>
                Upload Payment Proof
            </Button>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                closePosition='right'
                width={400}
                headerClassName='!items-start'
                title={
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg font-bold text-[#18181E]'>Upload Payment Proof</p>
                        <p className='text-sm font-normal text-[#525D66]'>
                            You must transfer the <span className='!font-bold !text-[#18181E]'> exact amount</span> as
                            stated
                        </p>
                    </div>
                }
                footer={
                    <div className='flex flex-row justify-end gap-3'>
                        <Button onClick={onSubmit} loading={loading} disabled={loading}>
                            Submit
                        </Button>
                    </div>
                }
            >
                <div className='flex flex-col gap-6'>
                    {imagePreview ? (
                        <div className='mt-4 flex flex-row gap-4'>
                            <div className='w-full'>
                                <Image src={imagePreview || ''} alt='Preview Proof' width={216} height={164} />
                            </div>
                            <div className='flex w-full flex-col items-center gap-2'>
                                <label className='w-full cursor-pointer'>
                                    <div className='text-center'>
                                        <div className='flex h-10 w-full items-center justify-center rounded border border-[#08192B1A]'>
                                            Change
                                        </div>
                                        <input
                                            type='file'
                                            className='hidden'
                                            onChange={(e: any) => handleChangeFileUpload(e)}
                                        />
                                    </div>
                                </label>
                                <Button
                                    variant='grayOutline'
                                    block
                                    className='!gap-1 !border-none !text-[#DB2430]'
                                    onClick={handleRemoveFile}
                                >
                                    <Icons icon='Trash' width={16} height={16} /> Remove
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className='w-full pt-2'>
                            <label className='border-primary-300 flex h-[164px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-[#D0F0FA4D]'>
                                <div className='text-center'>
                                    <Icons icon='Upload' width={24} height={24} color='#14B2E6' />
                                    <p className='text-primary-300 text-sm font-bold'>Upload Payment Proof</p>
                                    <p className='text-xs font-normal text-[#525D66]'>
                                        Click to upload or drag and drop <br />
                                        PNG, JPG (max. 5 MB)
                                    </p>
                                    <input type='file' className='hidden' onChange={(e: any) => handleUpload(e)} />
                                </div>
                            </label>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    );
};

interface Props {
    profile: ProfileModel;
}

const Deposit: React.FC<Props> = ({ profile }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState<number | undefined>();
    const [openModal, setOpenModal] = useState(false);
    const limit = 10;

    const router = useRouter();

    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    const { history, fetchHistory } = useHistory({
        filter: {
            limit,
            page: currentPage,
            sides: 'deposit',
            status
        }
    });

    // const data =
    //     history?.histories.map((item) => ({
    //         uid: item.uid,
    //         requestDate: item.created_at,
    //         amount: item.amount,
    //         status: item.status
    //     })) || [];

    const data = [
        {
            requestDate: 1719207840,
            amount: 16000000,
            status: 1
        },
        {
            requestDate: 1719106260,
            amount: 16000000,
            status: 2
        },
        {
            requestDate: 1718742480,
            amount: 16000000,
            status: 4
        },
        {
            requestDate: 1718499120,
            amount: 16000000,
            status: 3
        },
        {
            requestDate: 1718162700,
            amount: 16000000,
            status: 5
        },
        {
            requestDate: 1718001000,
            amount: 16000000,
            status: 1
        },
        {
            requestDate: 1717815360,
            amount: 16000000,
            status: 2
        },
        {
            requestDate: 1717470240,
            amount: 16000000,
            status: 4
        },
        {
            requestDate: 1717210980,
            amount: 16000000,
            status: 3
        },
        {
            requestDate: 1716846240,
            amount: 16000000,
            status: 5
        },
        {
            requestDate: 1716684540,
            amount: 16000000,
            status: 1
        },
        {
            requestDate: 1716407160,
            amount: 16000000,
            status: 2
        },
        {
            requestDate: 1716024960,
            amount: 16000000,
            status: 4
        },
        {
            requestDate: 1715801820,
            amount: 16000000,
            status: 3
        },
        {
            requestDate: 1715486640,
            amount: 16000000,
            status: 5
        }
    ];

    const filter = [
        {
            name: 'All',
            value: 0
        },
        {
            name: 'Pending Payment Proof',
            value: 1
        },
        {
            name: 'Waiting Approval',
            value: 2
        },
        {
            name: 'Success',
            value: 3
        },
        {
            name: 'Expired',
            value: 4
        },
        {
            name: 'Rejected',
            value: 5
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
                            return 'yellow';
                        case 2:
                            return 'yellow';
                        case 3:
                            return 'green';
                        case 4:
                            return 'red';
                        case 5:
                            return 'red';
                        default:
                            return 'gray';
                    }
                };
                return (
                    <Badge variant={getVariant()}>
                        <Switch>
                            <Case condition={data === 1}>Pending Payment Proof</Case>
                            <Case condition={data === 2}>Waiting Approval</Case>
                            <Case condition={data === 3}>Success</Case>
                            <Case condition={data === 4}>Expired</Case>
                            <Case condition={data === 5}>Rejected</Case>
                        </Switch>
                    </Badge>
                );
            }
        },
        {
            title: 'ACTION',
            dataIndex: 'status',
            headClassName: '!xs',
            render: (data, value) => {
                const proof = [2, 5];

                if (proof.includes(data as number)) {
                    return <ModalViewProof data={data} />;
                }
                if (data === 1) {
                    return <ModalUploadProof data={value} onCallbak={fetchHistory} />;
                }

                return <></>;
            }
        }
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalDataPage = 10;
    const startIndex = (currentPage - 1) * totalDataPage;
    const endIndex = startIndex + totalDataPage;
    const dataFilter = status ? data.filter((item) => item.status === status) : data;
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
                    </Else>
                </If>
            </TabGroup>
            <ModalUnverified isOpen={openModal} handleClose={() => setOpenModal(false)} />
        </>
    );
};

export default Deposit;
