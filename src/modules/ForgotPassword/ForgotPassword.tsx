/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useState } from 'react';
import { When } from 'react-if';

import { useForgotPassword } from '@/hooks/useAuth';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Input from '@/components/Input';

import { EMAIL_LOGIN_REGEX } from '@/constant/regex';

interface FormValues {
    email: string;
}

const ForgotPassword = () => {
    const [form] = useForm<FormValues>();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { forgotPassword } = useForgotPassword();

    const handleSubmit = async (values: FormValues) => {
        setIsLoading(true);
        try {
            const payload = {
                email: values.email
            };
            const res = await forgotPassword(payload.email);

            if (res.code === 200003003) {
                throw new Error(res.message || 'Failed to verify email');
            }

            if (res.message) {
                setIsSuccess(true);
            }
        } catch (error) {
            //
        }
        setIsLoading(false);
    };

    return (
        <>
            <Head>
                <title>Forgot Password | Binaloka Indonesia</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex justify-center py-4 xl:py-10'>
                <Icons icon='Logo' width={120} height={32} />
            </div>
            <Container className='flex h-[calc(100vh-108px)] flex-col items-center justify-center'>
                <div className='flex h-full w-full flex-col items-center justify-center gap-8 xl:w-[400px]'>
                    <Icons icon={isSuccess ? 'EmailIllustration' : 'KeyIllustration'} width={120} height={120} />
                    <div className='-mt-2 flex flex-col justify-center gap-3'>
                        <h1 className='text-center text-2xl font-bold text-gray-800 xl:text-[32px] xl:leading-10'>
                            {isSuccess ? 'Check your email' : 'Forgot password?'}
                        </h1>
                        <p className='text-center text-[14px] font-normal leading-6 text-gray-600'>
                            {isSuccess ? (
                                <>
                                    We have just sent you an email with instructions to reset your password <br />{' '}
                                    <br /> <b>{form.getFieldValue('email')}</b>
                                    <br />
                                    <br />
                                    Please ensure you check your email's spam folder.
                                </>
                            ) : (
                                'No worries, we’ll send you reset instructions.'
                            )}
                        </p>
                    </div>
                    <When condition={!isSuccess}>
                        <Form
                            form={form}
                            onFinish={handleSubmit}
                            autoComplete='off'
                            className='flex w-full flex-col items-start gap-4 xl:gap-8'
                        >
                            {(_, { getFieldError, getFieldsError }) => {
                                const errors = getFieldsError().flatMap((item) => item.errors);
                                const errorEmail = getFieldError('email')[0];

                                const isSubmitDisabled = errors.length > 0;
                                return (
                                    <>
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
                                                groupClassName='w-full'
                                                error={errorEmail}
                                            />
                                        </Field>

                                        <div className='relative flex w-full flex-col xl:pt-8'>
                                            <div className='fixed bottom-20 left-0 right-0 flex w-full px-4 xl:relative xl:bottom-6 xl:px-0'>
                                                <Button
                                                    variant='primary'
                                                    block
                                                    type='submit'
                                                    disabled={isSubmitDisabled || isLoading}
                                                    loading={isLoading}
                                                >
                                                    Verify Email
                                                </Button>
                                            </div>
                                            <div className='fixed bottom-6 left-0 right-0 flex w-full flex-row items-center  justify-center gap-1 px-4 xl:relative xl:top-4 xl:px-0'>
                                                <Icons icon='ArrowLeft' width={16} height={16} color='#14B2E6' />
                                                <Link
                                                    href='/'
                                                    className='text-primary-300 text-center text-xs font-bold xl:text-sm '
                                                >
                                                    Back to Homepage
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                );
                            }}
                        </Form>
                    </When>
                    <When condition={isSuccess}>
                        <div className='-mt-2 flex w-full flex-row items-center justify-center gap-1'>
                            <Icons icon='ArrowLeft' width={16} height={16} color='#14B2E6' />
                            <Link href='/' className='text-primary-300 text-center text-xs font-bold xl:text-sm '>
                                Back to Homepage
                            </Link>
                        </div>
                    </When>
                </div>
            </Container>
        </>
    );
};

export default ForgotPassword;
