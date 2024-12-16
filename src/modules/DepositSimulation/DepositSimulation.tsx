import Form, { Field } from 'rc-field-form';
import React, { useState } from 'react';

import useAuth from '@/hooks/useAuth';
import useVirtualAccount from '@/hooks/useVirtualAccount';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Input from '@/components/Input';
import SelectSearch from '@/components/SelectSearch';
import { toast } from '@/components/Toast';

interface FormValues {
    bank_account_number: string;
    bank_code: string;
    transfer_amount: number;
}

const DepositSimulation = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const { auth } = useAuth();
    const { virtualAccount } = useVirtualAccount();

    const handleSubmit = async (values: FormValues) => {
        if (!auth.isLoggedIn) {
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('https://api.xendit.co/pool_virtual_accounts/simulate_payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic eG5kX2RldmVsb3BtZW50X0duNlUwQnBERXIxeWYySDUxVVFJbXRDTzRlUDJaajNVV2FUenZOZDNqaFFaTVNaUThnM1lBTnJIbWl6MGF4V0U6`
                },
                body: JSON.stringify({
                    bank_account_number: values.bank_account_number,
                    bank_code: values.bank_code,
                    transfer_amount: values.transfer_amount
                })
            });
            const data = await response.json();

            if (data.error_code) {
                throw new Error(data.message);
            }
            if (data.status === 'COMPLETED') {
                toast.success(data.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
        setLoading(false);
    };
    return (
        <div className='min-h-main flex flex-col items-center justify-center gap-4'>
            <h3>Deposit Xendit</h3>
            <div className='border-text-transparent-10 w-[450px] rounded-xl border bg-white p-4 shadow-sm'>
                <Form form={form} onFinish={handleSubmit} className='flex flex-col gap-3'>
                    {(_, { getFieldError, getFieldsError }) => {
                        const errorAccountNumber = getFieldError('bank_account_number')[0];
                        const errorBank = getFieldError('bank_code')[0];
                        const errorAmount = getFieldError('transfer_amount')[0];
                        return (
                            <>
                                <Field
                                    name='bank_account_number'
                                    rules={[{ required: true, message: 'Bank Account Number is required' }]}
                                >
                                    <Input
                                        size='sm'
                                        label='Bank Account Number'
                                        type='number'
                                        error={errorAccountNumber}
                                        required
                                    />
                                </Field>
                                <Field name='bank_code'>
                                    <SelectSearch
                                        name='bank_code'
                                        label='Bank Name'
                                        items={virtualAccount}
                                        selected={{
                                            name: virtualAccount.find(
                                                (item) => item.code === form.getFieldValue('bank_code')
                                            )?.name
                                        }}
                                        onChange={(value) => {
                                            form.setFieldsValue({
                                                bank_code: value?.code
                                            });
                                        }}
                                        required
                                    />
                                </Field>
                                {errorBank && (
                                    <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                        <Icons icon='Interuption' /> {errorBank}
                                    </span>
                                )}
                                <Field
                                    name='transfer_amount'
                                    rules={[{ required: true, message: 'Transfer Amount is required' }]}
                                >
                                    <Input
                                        size='sm'
                                        label='Transfer Amount'
                                        type='number'
                                        required
                                        error={errorAmount}
                                    />
                                </Field>
                                <Button type='submit' loading={loading} disabled={loading}>
                                    Submit
                                </Button>
                            </>
                        );
                    }}
                </Form>
            </div>
        </div>
    );
};

export default DepositSimulation;
