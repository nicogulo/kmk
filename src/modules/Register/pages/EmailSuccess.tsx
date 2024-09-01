import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';
import Illustration from '@/components/Illustrations';

const EmailSuccess = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <Head>
                <title>Success Verification | Binaloka Indonesia</title>
                <meta name='description' content='Email Verification' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='flex justify-center py-4 xl:py-10'>
                <Icons icon='Logo' width={78} height={28} />
            </div>
            <Container className='flex h-[calc(100vh-108px)] flex-col items-center justify-center'>
                <div className='flex h-full flex-col items-center justify-center gap-8 xl:w-[400px]'>
                    <Illustration name='Success' width={240} height={240} />
                    <div className='-mt-2 flex flex-col items-center justify-center gap-3'>
                        <h1 className='text-2xl font-bold text-[#18181E] xl:text-[32px] xl:leading-10'>
                            Email has been verified
                        </h1>
                        <p className='text-center text-[14px] font-normal leading-6 text-[#525D66]'>
                            You’ve successfully created and verified your account!
                        </p>
                    </div>

                    <div className='fixed bottom-6 left-0 right-0 w-full px-4 xl:static xl:px-0'>
                        <Link href='/'>
                            <Button variant='primary' block type='submit'>
                                Go to Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default EmailSuccess;
