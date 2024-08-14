import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';

import { useLogin } from '@/hooks/useAuth';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
// import LoginRegisterSide from "@layouts/LoginRegisterSide"
import Input from '@/components/Input';
import InputPassword from '@/components/InputPassword';
import { toast } from '@/components/Toast';

import { EMAIL_LOGIN_REGEX } from '@/constant/regex';

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
                router.push('/dashboard');
            }
        } catch (error) {
            //
        }
        setIsLoading(false);
    };

    return (
        <div className='min-h-main flex items-center justify-center'>
            <Head>
                <title>Login | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>

            <div className='relative flex w-[460px] flex-col gap-4 overflow-hidden rounded-md bg-white px-10 py-8 shadow-[0_0_30px_0_rgba(196,_202,_214,_.29)]'>
                <div className='flex w-full justify-center'>
                    <Icons icon='Logo' width={180} height={64} />
                </div>
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
                                                message: 'Email is required'
                                            },
                                            {
                                                pattern: EMAIL_LOGIN_REGEX,
                                                message: 'Email is invalid'
                                            }
                                        ]}
                                    >
                                        <Input
                                            size='md'
                                            placeholder='Enter your email'
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
                                                message: 'Password is required'
                                            }
                                        ]}
                                    >
                                        <InputPassword
                                            placeholder='Enter password'
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
                                                    className='!accent-primary-200 !h-4 !w-4 !p-0'
                                                    required
                                                />
                                                <span className='text-xs font-normal text-[#18181E]'>Remember me</span>
                                            </label>
                                        </Field>
                                        <Link href='/forgot-password' className='text-primary-200 text-xs font-bold'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>

                                <Button
                                    type='submit'
                                    disabled={isSubmitDisabled || isLoading}
                                    loading={isLoading}
                                    block
                                >
                                    Login
                                </Button>
                            </>
                        );
                    }}
                </Form>
            </div>
        </div>
    );
};

export default Login;
