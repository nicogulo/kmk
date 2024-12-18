import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';

import classNames from '@/lib/classnames';
import { useRegister } from '@/hooks/useAuth';
import usePasswordValidator from '@/hooks/usePasswordValidator';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import { Else, If, Then, When } from '@/components/If';
import Input from '@/components/Input';
import InputPassword from '@/components/InputPassword';
import LoginRegisterSide from '@/components/layout/LoginRegisterSide';

interface FormValues {
    name: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    allow: boolean;
}

const Register: React.FC = () => {
    const [form] = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { register } = useRegister();

    const { confirmPassword, listValidation } = usePasswordValidator();

    const confirmCheck = (value: string) => {
        const validation = confirmPassword(form.getFieldValue('password')).find((e) => !e.check(value));
        return validation?.label;
    };

    const handleSubmit = async (values: FormValues) => {
        setIsLoading(true);
        try {
            const payload = {
                full_name: values.name,
                phone_number: values.phone,
                email: values.email,
                password: values.password
            };

            const res = await register(payload);
            if (res?.hash) {
                router.push('/register/email-verification');
            }
        } catch (error) {
            //
        }
        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Register | KMK Indonesia</title>
                <meta name='description' content='Register' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <LoginRegisterSide title='Buat akun dalam hitungan menit' subtitle='Sudah punya akun?'>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    autoComplete='off'
                    className='flex w-full flex-col items-start gap-4'
                >
                    {(_, { getFieldError, getFieldValue, getFieldsError }) => {
                        const errors = getFieldsError().flatMap((item) => item.errors);
                        const isSubmitDisabled = errors.length > 0;

                        // const emptyName = !getFieldValue("name")
                        // const emptyPhone = !getFieldValue("phone")
                        // const emptyEmail = !getFieldValue("email")
                        const emptyPassword = !getFieldValue('password');
                        // const emptyConfirmPassword = !getFieldValue("confirmPassword")
                        // const emptyTerms = !getFieldValue("terms")
                        // const emptyAllow = !getFieldValue("allow")

                        const errorName = getFieldError('name')[0];
                        const errorPhone = getFieldError('phone')[0];
                        const errorEmail = getFieldError('email')[0];

                        const requiredPassword = getFieldError('password').find(
                            (items) => items === 'Password is required'
                        );
                        const errorPassword = getFieldError('password')[0] !== requiredPassword;

                        const requiredConfirm = getFieldError('confirmPassword').find(
                            (items) => items === 'Confirm Password is required'
                        );
                        const errorConfirmPass = getFieldError('confirmPassword')[0] !== requiredConfirm;

                        const showErrorPass = requiredPassword || errorPassword || requiredConfirm || errorConfirmPass;

                        return (
                            <>
                                <div className='w-full'>
                                    <Field
                                        name='name'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Nama wajib diisi'
                                            },
                                            {
                                                pattern: /^[a-zA-Z ]*$/,
                                                message: 'Nama harus berupa huruf'
                                            }
                                        ]}
                                    >
                                        <Input
                                            size='md'
                                            placeholder='Masukan nama lengkap'
                                            required
                                            label='Nama'
                                            autoComplete='name_field'
                                            error={errorName}
                                        />
                                    </Field>
                                </div>
                                <div className='w-full'>
                                    <Field
                                        name='phone'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Phone wajib diisi'
                                            },
                                            {
                                                pattern: /^[0-9]*$/,
                                                message: 'Nomor telepon harus berupa angka'
                                            }
                                        ]}
                                    >
                                        <Input
                                            size='md'
                                            placeholder='81234567890'
                                            required
                                            label='Nomor Telepon'
                                            prefix='+62'
                                            autoComplete='phone_field'
                                            mask={/^[0-9]*$/}
                                            error={errorPhone}
                                        />
                                    </Field>
                                </div>
                                <div className='w-full'>
                                    <Field
                                        name='email'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Email wajib diisi'
                                            }
                                            // {
                                            //     pattern: EMAIL_REGEX,
                                            //     message: 'Email is invalid'
                                            // }
                                        ]}
                                    >
                                        <Input
                                            size='md'
                                            placeholder='Masukan email'
                                            required
                                            label='Email'
                                            mask={/^[^\n ]*$/}
                                            autoComplete='email_field'
                                            error={errorEmail}
                                        />
                                    </Field>
                                </div>
                                <div className='w-full'>
                                    <Field
                                        name='password'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Password wajib diisi'
                                            },
                                            {
                                                pattern: /[A-Z]/,
                                                message: 'Setidaknya satu huruf besar'
                                            },
                                            {
                                                pattern: /[a-z]/,
                                                message: 'Setidaknya satu huruf kecil'
                                            },
                                            {
                                                pattern: /^(?=.*[0-9])/,
                                                message: 'Setidaknya satu angka'
                                            },
                                            {
                                                pattern: /^.{8,}$/,
                                                message: 'Minimal 8 karakter'
                                            }
                                        ]}
                                    >
                                        <InputPassword
                                            placeholder='Masukan password'
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
                                                message: 'Konfirmasi Password wajib diisi'
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
                                                        return Promise.reject('Password tidak sama');
                                                    }

                                                    return Promise.resolve();
                                                }
                                            })
                                        ]}
                                    >
                                        <InputPassword
                                            placeholder='Konfirmasi Password'
                                            required
                                            label='Konfirmasi Password'
                                            error={requiredConfirm || errorConfirmPass}
                                            errorClassName={errorConfirmPass ? 'hidden' : ''}
                                            autoComplete='confirm_password_field'
                                        />
                                    </Field>
                                </div>
                                <When condition={showErrorPass}>
                                    <div className='flex w-full flex-col gap-2 rounded-lg bg-[#EAF2FF] p-4'>
                                        <p className='text-sm font-bold text-[#0F1215]'>
                                            Password harus memenuhi syarat berikut:
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
                                                                    <Icons icon='XCircle' className='text-[#FF4842]' />
                                                                </Then>
                                                                <Else>
                                                                    <If condition={isCorrect}>
                                                                        <Then>
                                                                            <Icons
                                                                                icon='ChecklistCircle'
                                                                                className='text-[#54D62C]'
                                                                            />
                                                                        </Then>
                                                                        <Else>
                                                                            <div className='h-2 w-2 rounded-full bg-[#2169D5]' />
                                                                        </Else>
                                                                    </If>
                                                                </Else>
                                                            </If>
                                                            <span className='text-xs text-[#18181E]'>{label}</span>
                                                        </div>
                                                    );
                                                })
                                            }
                                            {confirmPassword(form.getFieldValue('password')).map(({ label, check }) => {
                                                const isCorrect = check(form.getFieldValue('confirmPassword'));
                                                const isNotCorrect =
                                                    check(form.getFieldValue('confirmPassword')) !== true;

                                                const isError =
                                                    (!emptyPassword || requiredPassword) &&
                                                    (requiredPassword || isNotCorrect);

                                                return (
                                                    <div key={label} className='flex flex-row items-center gap-2'>
                                                        <If condition={isError}>
                                                            <Then>
                                                                <Icons icon='XCircle' className='text-[#FF4842]' />
                                                            </Then>
                                                            <Else>
                                                                <If condition={isCorrect}>
                                                                    <Then>
                                                                        <Icons
                                                                            icon='ChecklistCircle'
                                                                            className='text-[#54D62C]'
                                                                        />
                                                                    </Then>
                                                                    <Else>
                                                                        <div className='h-2 w-2 rounded-full bg-[#2169D5]' />
                                                                    </Else>
                                                                </If>
                                                            </Else>
                                                        </If>

                                                        <span className='text-xs text-[#18181E]'>{label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </When>
                                <div className='flex w-full flex-col gap-4'>
                                    <Field
                                        name='terms'
                                        valuePropName='checked'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'You must check this box'
                                            }
                                        ]}
                                    >
                                        <label
                                            className={classNames('relative flex items-start space-x-2 ', {
                                                'pb-4': getFieldError('terms')[0]
                                            })}
                                        >
                                            <Input
                                                type='checkbox'
                                                className='accent-primary-300 !h-4 !w-4 !p-0'
                                                required
                                                inputClassName='!text-primary-300'
                                                error={getFieldError('terms')[0]}
                                                errorClassName='absolute -bottom-1 left-0 !pt-0'
                                            />
                                            <span className='text-xs font-normal text-[#121416]'>
                                                Saya telah membaca, memahami dan menyetujui{' '}
                                                <Link
                                                    href='/terms-and-conditions'
                                                    className='text-primary-300 underline'
                                                >
                                                    Kebijakan Privasi PT Kripto Maksima Koin
                                                </Link>
                                            </span>
                                        </label>
                                    </Field>
                                    <Field
                                        name='allow'
                                        valuePropName='checked'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'You must check this box'
                                            }
                                        ]}
                                    >
                                        <label
                                            className={classNames('relative flex items-start space-x-2', {
                                                'pb-4': getFieldError('allow')[0]
                                            })}
                                        >
                                            <Input
                                                type='checkbox'
                                                className='accent-primary-300 !h-4 !w-4 !p-0'
                                                inputClassName='!text-primary-300'
                                                required
                                                error={getFieldError('allow')[0]}
                                                errorClassName='absolute -bottom-1 left-0 !pt-0'
                                            />
                                            <span className='text-xs font-normal text-[#121416]'>
                                                Saya memberikan izin kepada PT Kripto Maksima Koin untuk mengelola dan
                                                mentransfer data pribadi saya ke pihak ketiga dalam rangka registrasi
                                            </span>
                                        </label>
                                    </Field>
                                </div>

                                <Button
                                    type='submit'
                                    block
                                    disabled={isSubmitDisabled || isLoading}
                                    loading={isLoading}
                                    className={classNames({
                                        'mt-4': getFieldError('allow')[0]
                                    })}
                                >
                                    Register
                                </Button>
                            </>
                        );
                    }}
                </Form>
            </LoginRegisterSide>
        </>
    );
};

export default Register;
