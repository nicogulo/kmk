/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Head from 'next/head';
import { useRouter } from 'next/router';
import Form, { Field, useForm } from 'rc-field-form';
import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import { useRegister } from '@/hooks/useAuth';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';

interface FormValues {
    otp: string;
}

let interval: NodeJS.Timeout;

const EmailVerification = () => {
    const [form] = useForm<FormValues>();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [timer, setTimer] = useState(0);

    const router = useRouter();
    const { submitOtp, resendOtp } = useRegister();

    const handleSubmit = async (values: FormValues) => {
        setLoading(true);

        try {
            const payload = {
                otp: values.otp
            };
            const res = await submitOtp(payload);
            console.log(res);
            if (res) {
                router.push('/register/email-success');
            }
            setLoading(false);
        } catch (error) {
            //
        }
    };

    const handleResendClick = async () => {
        try {
            setTimer(120);

            await resendOtp();
        } catch (error) {
            console.error('Failed to resend OTP', error);
        }
    };

    useEffect(() => {
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        let value = '';
        value = localStorage.getItem('email') || '';
        setEmail(value);
    }, []);

    return (
        <>
            <Head>
                <title>Email Verification | XTB Indonesia</title>
                <meta name='description' content='Email Verification' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex justify-center py-4 xl:py-10'>
                <Icons icon='Logo' width={120} height={32} />
            </div>
            <Container className='flex h-[calc(100vh-108px)] flex-col items-center justify-center'>
                <div className='flex h-full flex-col items-center justify-center gap-8 xl:w-[400px]'>
                    <Icons icon='EmailIllustration' width={120} height={120} />
                    <div className='-mt-2 flex flex-col justify-center gap-3'>
                        <h1 className='text-2xl font-bold text-[#18181E] xl:text-[32px] xl:leading-10'>
                            Check your email
                        </h1>
                        <p className='text-center text-[14px] font-normal leading-6 text-[#525D66]'>
                            We sent a verification code to <br /> <b>{email}</b>
                        </p>
                    </div>
                    <Form
                        form={form}
                        onFinish={handleSubmit}
                        autoComplete='off'
                        className='flex w-full flex-col items-start gap-4 xl:gap-8'
                    >
                        {(_, { getFieldValue, getFieldsError }) => {
                            const errors = getFieldsError().flatMap((item) => item.errors);
                            return (
                                <>
                                    <Field
                                        name='otp'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'OTP is required'
                                            }
                                        ]}
                                    >
                                        <OtpInput
                                            renderInput={(props) => <input {...props} />}
                                            value={getFieldValue('otp')}
                                            numInputs={4}
                                            onChange={(e: any) => {
                                                if (e.length === 4) {
                                                    handleSubmit({ otp: e });
                                                }
                                            }}
                                            inputType='number'
                                            renderSeparator={<span>&nbsp;</span>}
                                            inputStyle='!w-[70px] !h-[64px] xl:text-2xl text-lg text-primary-200 font-bold border-[1px] border-[#E0E0E0] rounded-lg !caret-primary-200 focus:!border-primary-200 focus:!outline-none focus:ring-0'
                                            containerStyle='justify-between w-full'
                                        />
                                    </Field>
                                    {errors.length > 0 && (
                                        <div className='-mt-2 flex w-full flex-row items-center justify-center gap-1'>
                                            <Icons icon='Interuption' width={16} height={16} color='#C9353F' />
                                            <p className='text-center text-xs text-[#C9353F] xl:text-sm '>
                                                {errors[0]}
                                            </p>
                                        </div>
                                    )}

                                    <div className='fixed bottom-6 left-0 right-0 w-full px-4 xl:static xl:px-0'>
                                        <Button
                                            variant='primary'
                                            block
                                            type='submit'
                                            loading={isLoading}
                                            disabled={isLoading}
                                        >
                                            Verify Email
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Form>
                    <span className='text-sm text-[#384250]'>
                        Didn’t receive the email?{' '}
                        {timer > 0 ? (
                            <span className='font-bold text-[#758089]'>{`${Math.floor(timer / 60)}:${
                                timer % 60 < 10 ? `0${timer % 60}` : timer % 60
                            } `}</span>
                        ) : (
                            <span onClick={handleResendClick} className='text-primary-200 cursor-pointer font-bold'>
                                Click to Resend
                            </span>
                        )}
                    </span>
                </div>
            </Container>
        </>
    );
};

export default EmailVerification;
