import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import useProfile from '@/hooks/useProfile';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';

const Success = () => {
    const { profile } = useProfile();

    return (
        <>
            <Head>
                <title>Success Submit KYC | Binaloka Indonesia</title>
                <meta name='description' content='Email Verification' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex justify-center py-4 xl:py-10'>
                <Icons icon='Logo' width={120} height={32} />
            </div>
            <Container className='flex h-[calc(100vh-108px)] flex-col items-center justify-center'>
                <div className='flex h-full flex-col items-center justify-center gap-8 xl:w-[400px]'>
                    <Illustration name='Success' width={240} height={240} />
                    <div className='-mt-2 flex flex-col items-center justify-center gap-3'>
                        <h1 className='text-center text-2xl font-bold text-[#18181E] xl:text-[32px] xl:leading-10'>
                            Verification Successful
                        </h1>
                        <p className='text-center text-[14px] font-normal leading-6 text-[#525D66]'>
                            We’ll verify your account as soon as possible
                        </p>
                    </div>

                    <div
                        className='fixed bottom-6 left-0 right-0 w-full px-4 xl:static xl:px-0'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}
                    >
                        <Link href='/profile'>
                            <Button variant='primary' block type='submit'>
                                Ok, understood
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Success;
