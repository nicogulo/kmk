import Form, { Field } from 'rc-field-form';
import React, { useState } from 'react';

import classNames from '@/lib/classnames';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import SelectSearch from '@/components/SelectSearch';

interface Props {
    form: any;
    bankOptions: any;
    name: string;
    data: any;
}

const EditBank: React.FC<Props> = ({ bankOptions, form, name, data }) => {
    const [open, setOpen] = useState(false);
    const [openDeleteBank, setOpenDeleteBank] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    console.log(data);
    return (
        <>
            <div className='flex flex-row gap-2'>
                <Button variant='grayOutline' size='sm' onClick={() => setOpen(true)}>
                    Edit
                </Button>
                <Button
                    variant='dangerOutline'
                    size='sm'
                    className='!w-fit !p-2'
                    onClick={() => setOpenDeleteBank(true)}
                >
                    <Icons icon='Trash' width={16} height={16} />
                </Button>
            </div>
            <Modal open={open} onClose={handleClose} title='Add Bank Account' closePosition='right'>
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
                                        <Button>Submit</Button>
                                    </div>
                                </>
                            );
                        }}
                    </Form>
                </div>
            </Modal>
            <Modal
                open={openDeleteBank}
                onClose={() => setOpenDeleteBank(false)}
                title='Delete Bank Account'
                closePosition='right'
                footer={
                    <Button variant='dangerOutline' block>
                        Delete
                    </Button>
                }
            >
                <div className='flex flex-col gap-5'>
                    <span className='xs text-gray-600'>
                        Are you sure you want to delete this bank account? This action cannot be undone.
                    </span>
                </div>
            </Modal>
        </>
    );
};

export default EditBank;
