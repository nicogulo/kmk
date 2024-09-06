import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';

import CoinImage from '../images/coins.png';
import Ellipise from '../images/ellipse-2.png';
import Hero from '../images/start-trading.webp';

const StartTrading = () => {
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
            <Container className='bg-secondary-100 relative z-[2] flex flex-row items-end justify-between rounded-2xl p-8'>
                <Image
                    src={CoinImage.src}
                    width={0}
                    height={0}
                    quality={100}
                    sizes='100vw'
                    alt='coin-image'
                    className='absolute top-0'
                    style={{ width: '100%' }}
                />
                <div className='flex flex-col gap-3'>
                    <span className='text-[56px] font-bold leading-[64px] text-gray-800'>
                        Start Trading <br /> Crypto Today
                    </span>
                    <span className='text-[16px] leading-6 text-gray-700'>
                        Start trading crypto easily and securely. Sign up now to unlock <br /> seamless transactions and
                        low fees.
                    </span>
                    <Button className='mt-3 w-fit' onClick={scrollToMarket}>
                        Start Investing
                    </Button>
                </div>
                <Image src={Hero.src} width={480} height={560} alt='start-trading' quality={100} />
            </Container>
        </div>
    );
};

export default StartTrading;
