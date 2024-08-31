import Head from 'next/head';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';
import { Else, If, Then } from 'react-if';

import classNames from '@/lib/classnames';
import { useBank } from '@/hooks/useMasterData';
import useProfile from '@/hooks/useProfile';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import SelectSearch from '@/components/SelectSearch';
import Table, { TableColumn } from '@/components/Table/Table';

import EditBank from '@/modules/Wallet/components/EditBank';

interface FormValues {
    name: number;
    bankId: string;
    accountNumber: string;
}

const BankWithdraw = () => {
    const [openAddBank, setOpenAddBank] = useState(false);

    const [form] = useForm<FormValues>();
    const { profile } = useProfile();
    const { banks } = useBank();

    const breadcrumbItems = [
        {
            title: 'Wallet',
            href: '/wallet'
        },
        {
            title: 'Withdraw Request',
            href: '/wallet/withdraw/withdraw-request'
        },
        {
            title: 'Add Bank for Withdrawal',
            href: '/wallet/withdraw/withdraw-bank'
        }
    ];

    const name = profile?.fullName || 'John Doe';

    const bankOptions = banks.map((bank) => ({
        value: bank.value,
        label: bank.name
    }));

    const handleClose = () => {
        setOpenAddBank(false);
        form.resetFields();
    };
    const listBank = [
        {
            id: '1',
            name: 'Bank Central Asia',
            accountNumber: '1234567890',
            bankHolder: 'John Doe'
        },
        {
            id: '2',
            name: 'Bank Mandiri',
            accountNumber: '0987654321',
            bankHolder: 'John Doe'
        },
        {
            id: '3',
            name: 'Bank Rakyat Indonesia',
            accountNumber: '0987654321',
            bankHolder: 'John Doe'
        },
        {
            id: '4',
            name: 'Bank Negara Indonesia',
            accountNumber: '0987654321',
            bankHolder: 'John Doe'
        }
    ];

    const columns: TableColumn[] = [
        {
            title: 'BANK NAME / branch',
            dataIndex: 'name',
            render: (value) => <span className='text-[16px] leading-6 text-gray-800'>{value}</span>
        },
        {
            title: 'BANK ACCOUNT NUMBER',
            dataIndex: 'accountNumber',
            render: (value) => <span className='text-[16px] font-semibold leading-6 text-gray-800'>{value}</span>
        },
        {
            title: 'ACCOUNT HOLDER NAME',
            dataIndex: 'bankHolder',
            render: (value) => <span className='text-[16px]  leading-6 text-gray-800'>{value}</span>
        },
        {
            title: 'ACTION',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <EditBank
                        bankOptions={bankOptions}
                        data={record}
                        form={form}
                        name={name}
                        // callback after edit bank
                    />
                );
            }
        }
    ];

    return (
        <Container className='py-6'>
            <Head>
                <title>Withdraw Request | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex flex-col gap-10'>
                <Breadcrumb items={breadcrumbItems} />
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='!font-semibold text-gray-800'>Bank for Withdrawal</h3>
                    {listBank && listBank.length > 5 && (
                        <Button
                            variant='primary'
                            onClick={() => setOpenAddBank(true)}
                            className='mt-5'
                            disabled={listBank.length > 4}
                        >
                            Add Bank Account
                        </Button>
                    )}
                </div>
                <If condition={listBank.length === 0}>
                    <Then>
                        <div className='flex h-[60vh] flex-col items-center justify-center'>
                            <div className='flex w-[400px] flex-col items-center justify-center gap-3'>
                                <Illustration name='Notfound' width={160} height={160} />
                                <span className='h3 text-centerfont-semibold text-gray-800'>
                                    You don’t have bank for withdrawal
                                </span>
                                <span className='text-center text-[16px] font-normal text-gray-600'>
                                    You need to add a bank account to enable withdrawals. Click the button below to add
                                    a bank
                                </span>
                                <Button variant='primary' onClick={() => setOpenAddBank(true)} className='mt-5'>
                                    Add Bank Account{' '}
                                </Button>
                            </div>
                        </div>
                    </Then>
                    <Else>
                        <div className='mt-4 flex flex-col gap-6 rounded-2xl border border-[#08192B1A] bg-white px-6 py-8'>
                            <Table columns={columns} data={listBank} noHover />
                        </div>
                    </Else>
                </If>
            </div>
            <Modal open={openAddBank} onClose={handleClose} title='Add Bank Account' closePosition='right'>
                <div className='flex flex-col gap-5'>
                    <span className='xs text-gray-600'>
                        This account will be used as the destination for your withdrawal funds.
                    </span>
                    <Form form={form} className='flex flex-col gap-6 '>
                        {(_, { getFieldError, getFieldsError }) => {
                            const errors = getFieldsError().flatMap((item) => item.errors);
                            const errorBank = getFieldError('bankId')[0];
                            const errorAccountNumber = getFieldError('accountNumber')[0];
                            const errorName = getFieldError('name')[0];
                            const isSubmitDisabled = errors.length > 0;

                            return (
                                <>
                                    <Field name='bankId' rules={[{ required: true, message: 'Bank is required' }]}>
                                        <SelectSearch
                                            name='bankId'
                                            label='Bank Name'
                                            items={bankOptions}
                                            selected={{
                                                name: form.getFieldValue('bankId')
                                            }}
                                            onChange={(value) => {
                                                form.setFieldsValue({
                                                    bankId: value?.name
                                                });
                                            }}
                                            className={classNames({
                                                'border-[#C9353F]': errorBank
                                            })}
                                            required
                                        />
                                    </Field>
                                    {errorBank && (
                                        <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                            <Icons icon='Interuption' /> {errorBank}
                                        </span>
                                    )}
                                    <Field
                                        name='accountNumber'
                                        rules={[{ required: true, message: 'Branch Account Number is required' }]}
                                    >
                                        <Input
                                            label='Branch Account Number'
                                            placeholder='Account Number'
                                            className=''
                                            type='number'
                                            error={errorAccountNumber}
                                            required
                                        />
                                    </Field>
                                    <Field
                                        name='name'
                                        rules={[{ required: true, message: 'Account Holder Name is required' }]}
                                        initialValue={name}
                                    >
                                        <Input
                                            disabled
                                            label='Account Holder Name'
                                            placeholder='Name'
                                            className=''
                                            error={errorName}
                                            required
                                        />
                                    </Field>
                                    <div className='flex flex-row justify-end gap-4'>
                                        <Button disabled={isSubmitDisabled}>Submit</Button>
                                    </div>
                                </>
                            );
                        }}
                    </Form>
                </div>
            </Modal>
        </Container>
    );
};

export default BankWithdraw;
