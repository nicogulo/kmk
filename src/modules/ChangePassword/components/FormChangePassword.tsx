import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';
import { useChangePassword } from '@/hooks/useAuth';
import usePasswordValidator from '@/hooks/usePasswordValidator';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import { Else, If, Then } from '@/components/If';
import InputPassword from '@/components/InputPassword';
import { toast } from '@/components/Toast';

interface FormValues {
    password: string;
    confirmPassword: string;
}

interface FormChangePasswordProps {
    onSuccess: () => void;
}

const FormChangePassword: React.FC<FormChangePasswordProps> = ({ onSuccess }) => {
    const [form] = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const { changePassword } = useChangePassword();
    const router = useRouter();

    const { confirmPassword, listValidation } = usePasswordValidator();

    const confirmCheck = (value: string) => {
        const validation = confirmPassword(form.getFieldValue('password')).find((e) => !e.check(value));
        return validation?.label;
    };

    const handleSubmit = (values: FormValues) => {
        const { password } = values;
        const hash = router.query.hash as string;

        setIsLoading(true);
        changePassword(hash, password)
            .then((res) => {
                if (res.errors) {
                    throw new Error(res.errors[0].message);
                }
                if (res.code) {
                    throw new Error(res.message);
                }
                setIsLoading(false);
                onSuccess();
                return res;
            })
            .catch((err) => {
                toast.error(err.message);
                setIsLoading(false);
            });
    };

    return (
        <div className='w-full'>
            <Form
                form={form}
                onFinish={handleSubmit}
                autoComplete='off'
                className='flex w-full flex-col items-start gap-4'
            >
                {(_, { getFieldError, getFieldValue, getFieldsError }) => {
                    const errors = getFieldsError().flatMap((item) => item.errors);
                    const isSubmitDisabled = errors.length > 0;

                    const emptyPassword = !getFieldValue('password');

                    const requiredPassword = getFieldError('password').find(
                        (items) => items === 'Password is required'
                    );
                    const errorPassword = getFieldError('password')[0] !== requiredPassword;

                    const requiredConfirm = getFieldError('confirmPassword').find(
                        (items) => items === 'Confirm Password is required'
                    );
                    const errorConfirmPass = getFieldError('confirmPassword')[0] !== requiredConfirm;

                    return (
                        <>
                            <div className='w-full'>
                                <Field
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Password is required'
                                        },
                                        {
                                            pattern: /[A-Z]/,
                                            message: 'One uppercase letter'
                                        },
                                        {
                                            pattern: /[a-z]/,
                                            message: 'One lowercase letter'
                                        },
                                        {
                                            pattern: /^(?=.*[0-9])/,
                                            message: 'One digit from 0 to 9'
                                        },
                                        {
                                            pattern: /^.{8,}$/,
                                            message: 'Minimum of 8 characters'
                                        }
                                    ]}
                                >
                                    <InputPassword
                                        placeholder='Create password'
                                        required
                                        label='Password'
                                        autoComplete='password_field'
                                        error={requiredPassword || errorPassword}
                                        errorClassName={errorPassword ? 'hidden' : ''}
                                    />
                                </Field>
                            </div>
                            <div className='w-full'>
                                <Field
                                    name='confirmPassword'
                                    dependencies={['password']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Confirm Password is required'
                                        },
                                        {
                                            validator: (__, value) => {
                                                const error = confirmCheck(value);

                                                if (error) {
                                                    return Promise.reject(error);
                                                }
                                                return Promise.resolve();
                                            }
                                        },

                                        (context) => ({
                                            validator(__, value) {
                                                // eslint-disable-next-line @typescript-eslint/naming-convention
                                                const { password } = context.getFieldsValue(true);

                                                if (password !== value) {
                                                    // eslint-disable-next-line prefer-promise-reject-errors
                                                    return Promise.reject('Password must match');
                                                }

                                                return Promise.resolve();
                                            }
                                        })
                                    ]}
                                >
                                    <InputPassword
                                        placeholder='Confirm Password'
                                        required
                                        label='Confirm Password'
                                        error={requiredConfirm || errorConfirmPass}
                                        errorClassName={errorConfirmPass ? 'hidden' : ''}
                                        autoComplete='confirm_password_field'
                                    />
                                </Field>
                            </div>
                            <div className='mt-8 flex w-full flex-col gap-2 rounded-lg border border-gray-300 bg-gray-200 p-4'>
                                <p className='text-sm font-bold text-gray-800'>
                                    Your password should include the following:
                                </p>
                                <div className='flex flex-col gap-1'>
                                    {
                                        // eslint-disable-next-line @typescript-eslint/naming-convention
                                        listValidation.map(({ label, check }) => {
                                            const isCorrect = check(getFieldValue('password'));
                                            const isNotCorrect = check(form.getFieldValue('password')) !== true;

                                            const isError =
                                                (!emptyPassword || requiredPassword) &&
                                                (requiredPassword || isNotCorrect);

                                            return (
                                                <div key={label} className='flex flex-row items-center gap-2'>
                                                    <If condition={isError}>
                                                        <Then>
                                                            <Icons icon='XCircle' className='text-[#C9353F]' />
                                                        </Then>
                                                        <Else>
                                                            <If condition={isCorrect}>
                                                                <Then>
                                                                    <Icons
                                                                        icon='ChecklistCircle'
                                                                        className='text-primary-300'
                                                                    />
                                                                </Then>
                                                                <Else>
                                                                    <div className='h-2 w-2 rounded-full bg-[#C4CDD5]' />
                                                                </Else>
                                                            </If>
                                                        </Else>
                                                    </If>
                                                    <span className='text-xs text-gray-600'>{label}</span>
                                                </div>
                                            );
                                        })
                                    }
                                    {confirmPassword(form.getFieldValue('password')).map(({ label, check }) => {
                                        const isCorrect = check(form.getFieldValue('confirmPassword'));
                                        const isNotCorrect = check(form.getFieldValue('confirmPassword')) !== true;

                                        const isError =
                                            (!emptyPassword || requiredPassword) && (requiredPassword || isNotCorrect);

                                        return (
                                            <div key={label} className='flex flex-row items-center gap-2'>
                                                <If condition={isError}>
                                                    <Then>
                                                        <Icons icon='XCircle' className='text-[#C9353F]' />
                                                    </Then>
                                                    <Else>
                                                        <If condition={isCorrect}>
                                                            <Then>
                                                                <Icons
                                                                    icon='ChecklistCircle'
                                                                    className='text-primary-300'
                                                                />
                                                            </Then>
                                                            <Else>
                                                                <div className='h-2 w-2 rounded-full bg-[#C4CDD5]' />
                                                            </Else>
                                                        </If>
                                                    </Else>
                                                </If>

                                                <span className='text-xs text-gray-600'>{label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className='relative h-full w-full '>
                                <Button
                                    type='submit'
                                    block
                                    disabled={isSubmitDisabled || isLoading}
                                    loading={isLoading}
                                    className={classNames('bottom-4 left-4 mx-auto  xl:!w-full', {
                                        'mt-4': getFieldError('allow')[0]
                                    })}
                                    style={{
                                        position: isMobile ? 'fixed' : 'unset',
                                        width: 'calc(100% - 32px)'
                                    }}
                                >
                                    Reset Password
                                </Button>
                            </div>
                        </>
                    );
                }}
            </Form>
        </div>
    );
};

export default FormChangePassword;
