import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '@/components/Button';
import Container from '@/components/Container';

import CoinImage from '../images/coins.png';
import CoinImageMobile from '../images/coins-mobile.png';
import Ellipise from '../images/ellipse-2.png';
import Hero from '../images/start-trading.webp';

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
        <div className='relative bg-gray-800 pb-[80px]'>
            <div
                className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${Ellipise.src})`, backgroundPosition: '50% -310px' }}
            />
            <Container className='bg-primary-100 relative z-[2] flex flex-col items-end justify-between gap-8 rounded-2xl p-8 xl:flex-row xl:gap-0'>
                <Image
                    src={isMobile ? CoinImageMobile.src : CoinImage.src}
                    width={0}
                    height={0}
                    quality={100}
                    sizes='100vw'
                    alt='coin-image'
                    className='top-0 xl:absolute'
                    style={{ width: '100%' }}
                />
                <div className='flex flex-col gap-3'>
                    <span className='text-[40px] font-bold leading-[44px] text-gray-800 xl:text-[56px] xl:leading-[64px]'>
                        Start Trading <br /> Crypto Today
                    </span>
                    <span className='h4 !font-normal text-gray-700'>
                        Start trading crypto easily and securely. Sign up now to unlock <br /> seamless transactions and
                        low fees.
                    </span>
                    <Button className='mt-3 xl:w-fit' onClick={scrollToMarket} block={isMobile}>
                        Start Investing
                    </Button>
                </div>
                <Image src={Hero.src} width={480} height={560} alt='start-trading' quality={100} />
            </Container>
        </div>
    );
};

export default StartTrading;
