import Feature2 from '../images/feature-2.webp';
import Feature3 from '../images/feature-3.webp';
import Image from 'next/image';
import React from 'react';

import Container from '@/components/Container';

import Feature1 from '../images/feature-1.webp';

const Feature = () => {
    return (
        <Container className='flex flex-row justify-center gap-10 py-[80px]'>
            <div className='bg-primary-100 border-text-transparent-10 flex transform flex-col gap-4 rounded-xl border p-6 transition-transform duration-300 hover:scale-[1.03]'>
                <Image src={Feature1.src} alt='Feature 1' width={330} height={184} quality={100} />
                <div className='flex max-w-[330px] flex-col gap-1'>
                    <span className='text-[20px] font-bold leading-7 text-gray-800'>Instant Transactions</span>
                    <span className='text-[16px] leading-6 text-gray-700'>
                        Experience lightning-fast and secure <br /> transactions with zero delays.
                    </span>
                </div>
            </div>
            <div className='bg-secondary-100 border-text-transparent-10 flex transform flex-col gap-4 rounded-xl border p-6 transition-transform duration-300 hover:scale-[1.03]'>
                <Image src={Feature2.src} alt='Feature 2' width={330} height={184} quality={100} />
                <div className='flex max-w-[330px] flex-col gap-1'>
                    <span className='text-[20px] font-bold leading-7 text-gray-800'>
                        Wide Range of Cryptocurrencies
                    </span>
                    <span className='text-[16px] leading-6 text-gray-700'>
                        Explore an extensive portfolio of digital assets. We've got the right options for you.
                    </span>
                </div>
            </div>
            <div className='bg-warning-100 border-text-transparent-10 flex transform flex-col gap-4 rounded-xl border p-6 transition-transform duration-300 hover:scale-[1.03]'>
                <Image src={Feature3.src} alt='Feature 1' width={330} height={184} quality={100} />
                <div className='flex max-w-[330px] flex-col gap-1'>
                    <span className='text-[20px] font-bold leading-7 text-gray-800'>24/7 Customer Support</span>
                    <span className='text-[16px] leading-6 text-gray-700'>
                        Our expert support team is here around the clock to assist you, anytime, anywhere.
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default Feature;
