import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Container from '@/components/Container';

import Feature2 from '../images/feature-2.png';
import Feature3 from '../images/feature-3.png';
import Feature4 from '../images/feature-4.png';
import FeatureMobile2 from '../images/feature-mobile-2.png';
import FeatureMobile3 from '../images/feature-mobile-3.png';
import FeatureMobile4 from '../images/feature-mobile-4.png';

const Feature = () => {
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    return (
        <Container className='flex flex-col items-center justify-center gap-10 py-[80px]'>
            <h1 className='text-center font-semibold text-gray-800'>Kenapa Memilih Kami?</h1>
            <div className='flex flex-col gap-6 xl:flex-row'>
                <div className='relative flex transform flex-col gap-4 rounded-xl  transition-transform duration-300 hover:scale-[1.03]'>
                    <Image
                        src={isMobile ? FeatureMobile2 : Feature2.src}
                        alt='Feature 2'
                        width={isMobile ? 320 : 330}
                        height={isMobile ? 388 : 184}
                        quality={100}
                    />
                    <div className='absolute left-4 top-4 flex max-w-[330px] flex-col gap-1 text-white'>
                        <span className='text-[20px] font-bold leading-7 '>Transaksi Instan</span>
                    </div>
                </div>

                <div className='relative flex transform flex-col gap-4 rounded-xl  transition-transform duration-300 hover:scale-[1.03]'>
                    <Image
                        src={isMobile ? FeatureMobile3 : Feature3.src}
                        alt='Feature 1'
                        width={isMobile ? 320 : 330}
                        height={isMobile ? 388 : 184}
                        quality={100}
                    />
                    <div className='absolute left-4 top-4 flex max-w-[330px] flex-col gap-1 text-white'>
                        <span className='text-[20px] font-bold leading-7 '>Transaksi Mudah & Fleksibel</span>
                    </div>
                </div>
                <div className='relative flex transform flex-col gap-4 rounded-xl  transition-transform duration-300 hover:scale-[1.03]'>
                    <Image
                        src={isMobile ? FeatureMobile4 : Feature4.src}
                        alt='Feature 1'
                        width={isMobile ? 320 : 330}
                        height={isMobile ? 388 : 184}
                        quality={100}
                    />
                    <div className='absolute left-4 top-4 flex max-w-[330px] flex-col gap-1 text-white'>
                        <span className='text-[20px] font-bold leading-7 '>Dukungan Pelanggan 24/7</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Feature;
