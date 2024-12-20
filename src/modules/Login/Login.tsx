import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';

import { useLogin } from '@/hooks/useAuth';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputPassword from '@/components/InputPassword';
import LoginRegisterSide from '@/components/layout/LoginRegisterSide';
import { toast } from '@/components/Toast';

interface FormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [form] = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useLogin();
    const router = useRouter();

    const handleLogin = async (values: FormValues) => {
        setIsLoading(true);
        try {
            const payload = {
                email: values.email,
                password: values.password
            };

            const res = await login(payload);

            if (res.type === 'sign-up-verification') {
                router.push('/register/email-verification');
            }
            if (res?.token) {
                toast.success('Login success');
                router.push('/');
            }
        } catch (error) {
            //
        }
        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Login | KMK</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>

            <LoginRegisterSide title='Siap untuk berdagang dengan KMK?' subtitle='Tidak punya akun?'>
                <Form
                    form={form}
                    onFinish={(values) => handleLogin(values)}
                    autoComplete='off'
                    className='flex w-full flex-col items-start gap-4'
                >
                    {(_, { getFieldError, getFieldsError }) => {
                        const errors = getFieldsError().flatMap((item) => item.errors);
                        const isSubmitDisabled = errors.length > 0;

                        const errorEmail = getFieldError('email')[0];

                        const requiredPassword = getFieldError('password').find(
                            (items) => items === 'Password is required'
                        );
                        const errorPassword = getFieldError('password')[0] !== requiredPassword;

                        return (
                            <>
                                <div className='flex w-full flex-col gap-4 xl:pb-2'>
                                    <Field
                                        name='email'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Email wajib diisi'
                                            }
                                            // {
                                            //     pattern: EMAIL_LOGIN_REGEX,
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

                                    <Field
                                        name='password'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Password wajib diisi'
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
                                    <div className='flex flex-row justify-between pt-3 xl:pt-4'>
                                        <Field name='remember' valuePropName='checked'>
                                            <label className='flex items-start space-x-3'>
                                                <Input
                                                    type='checkbox'
                                                    className='!accent-primary-300 !h-4 !w-4 !p-0'
                                                    inputClassName='!text-primary-300'
                                                    required
                                                />
                                                <span className='text-xs font-normal text-[#18181E]'>Ingat saya</span>
                                            </label>
                                        </Field>
                                        <Link href='/forgot-password' className='text-primary-300 text-xs font-bold'>
                                            Lupa password?
                                        </Link>
                                    </div>
                                </div>

                                <Button
                                    type='submit'
                                    disabled={isSubmitDisabled || isLoading}
                                    loading={isLoading}
                                    block
                                >
                                    Masuk
                                </Button>
                            </>
                        );
                    }}
                </Form>
            </LoginRegisterSide>
        </>
    );
};

export default Login;
