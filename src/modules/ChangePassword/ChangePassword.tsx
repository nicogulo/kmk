import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { useLogout } from '@/hooks/useAuth';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';

import FormChangePassword from './components/FormChangePassword';

const ChangePassword = () => {
    const [success, setSuccess] = useState(false);
    const { logout } = useLogout();
    const onSuccess = () => {
        logout(true);
        setSuccess(true);
    };
    return (
        <>
            <Head>
                <title>Change Password | Binaloka Indonesia</title>
                <meta name='description' content='Change Password' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex justify-center py-4 xl:py-10'>
                <Icons icon='Logo' width={120} height={32} />
            </div>
            <Container className='flex h-[calc(100vh-108px)] flex-col items-center justify-center'>
                {success ? (
                    <div className='flex h-full flex-col items-center justify-center gap-8 xl:w-[376px]'>
                        <Illustration name='Success' width={240} height={240} />
                        <div className='-mt-2 flex flex-col items-center justify-center gap-3'>
                            <h1 className='text-center text-2xl font-bold text-[#18181E] xl:text-[32px] xl:leading-10'>
                                Reset password successful
                            </h1>
                            <p className='text-center text-[14px] font-normal leading-6 text-[#525D66]'>
                                Your password has been successfully reset.
                            </p>
                        </div>

                        <div className='fixed bottom-6 left-0 right-0 w-full px-4 xl:static xl:px-0'>
                            <Link href='/login'>
                                <Button variant='primary' block>
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='flex h-full w-full flex-col items-center justify-center gap-8 xl:w-[376px]'>
                        <Icons icon='KeyIllustration' width={56} height={56} />
                        <div className='-mt-2 flex flex-col justify-center gap-3'>
                            <h1 className='text-center text-2xl font-bold text-[#18181E] xl:text-[32px] xl:leading-10'>
                                Set new password
                            </h1>
                            <p className='text-center text-[14px] font-normal leading-6 text-[#525D66]'>
                                Your new password must be different to previously <br /> used passwords.
                            </p>
                        </div>
                        <FormChangePassword onSuccess={onSuccess} />
                    </div>
                )}
            </Container>
        </>
    );
};

export default ChangePassword;
