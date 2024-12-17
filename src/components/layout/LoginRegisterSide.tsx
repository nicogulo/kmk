import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons from '@/components/Icon';

import WelcomeScreen from '@/assets/Images/welcome.png';

interface LoginRegisterSideProps {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
}

const LoginRegisterSide: React.FC<LoginRegisterSideProps> = ({ title, subtitle, children }) => {
    const router = useRouter();
    const isRegister = router.pathname === '/register';
    return (
        <div className='flex flex-col justify-center xl:flex-row'>
            <div className='flex justify-center py-4 xl:hidden'>
                <Icons icon='Logo' width={105} height={28} />
            </div>

            <div
                className='h-screen overflow-y-scroll pb-10 xl:basis-4/5 xl:py-20 '
                style={{
                    scrollbarWidth: 'none'
                }}
            >
                <Container className='flex flex-col items-center'>
                    <div className='flex w-full flex-col items-start xl:w-[400px]'>
                        <div className='flex flex-col items-start gap-2 pb-10'>
                            <Button
                                onClick={() => router.push('/')}
                                variant='grayOutline'
                                className='!gap-1 !border-0 px-0 text-gray-700'
                            >
                                <Icons icon='ArrowLeft' width={16} height={16} />
                                Back
                            </Button>
                            <h1 className='text-2xl font-bold text-gray-800 xl:text-[32px] xl:leading-10'>{title}</h1>
                            <p className='text-[14px] leading-6 text-gray-600'>
                                {subtitle}{' '}
                                <Link
                                    href={isRegister ? '/login' : '/register'}
                                    passHref
                                    className='text-primary-300 font-bold'
                                >
                                    {isRegister ? 'Masuk' : 'Daftar'}
                                </Link>
                            </p>
                        </div>
                        {children}
                    </div>
                </Container>
            </div>
            <div className='bg-primary-100 hidden max-h-screen basis-1/5 flex-col items-center justify-center gap-[72px] px-10 xl:flex'>
                <Icons icon='Logo' width={120} height={32} />
                <Image src={WelcomeScreen} alt='Welcome Screen' />
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-center text-xl font-bold text-[#18181E]'>Much more than Crypto!</p>
                    <p className='text-center text-sm font-normal text-[#525D66]'>
                        Invest and trade in wide range of crypto assets and more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterSide;
