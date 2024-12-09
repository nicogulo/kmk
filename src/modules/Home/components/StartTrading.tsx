import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '@/components/Button';
import Container from '@/components/Container';

import StartTradingImage from '../images/image-start-trading.png';
import StartTradingImageMobile from '../images/image-start-trading-mobile.png';

const StartTrading = () => {
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const scrollToMarket = () => {
        const marketListElement = document.getElementById('market-list');
        if (marketListElement) {
            const offset = -56;
            const elementPosition = marketListElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='mx-4 pb-[80px] xl:mx-0'>
            <Container className='relative flex flex-col items-end justify-between gap-8 overflow-hidden rounded-2xl bg-[#010101] p-8 xl:gap-0'>
                <div className='flex w-full flex-col items-center gap-3 pb-20 text-center'>
                    <span className='text-[40px] font-bold leading-[44px] text-white xl:text-[56px] xl:leading-[64px]'>
                        Start Trading Crypto Today
                    </span>
                    <span className='h4 !font-normal text-white'>
                        Start trading crypto easily and securely. Sign up now to unlock <br /> seamless transactions and
                        low fees.
                    </span>
                    <Button className='mt-3 xl:w-fit' onClick={scrollToMarket} block={isMobile}>
                        Start Investing
                    </Button>
                    {/* <Image src={StartTradingImage.src} width={480} height={560} alt='start-trading' quality={100} /> */}
                </div>
                <Image
                    src={isMobile ? StartTradingImageMobile.src : StartTradingImage.src}
                    width={0}
                    height={0}
                    quality={100}
                    sizes='100vw'
                    alt='coin-image'
                    className='absolute bottom-0 left-0'
                    style={{ width: '100%' }}
                />
            </Container>
        </div>
    );
};

export default StartTrading;
