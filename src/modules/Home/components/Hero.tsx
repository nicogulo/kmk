import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '@/components/Button';
import Container from '@/components/Container';

import Circle from '../images/circle.png';
import Ellipise from '../images/ellipse.png';
import HeroImage from '../images/hero.webp';

const Hero = () => {
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
        <div className='bg-primary-100 relative h-[686px]'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${Circle.src})`, backgroundPosition: '50% -40%' }}
            />
            <div
                className='absolute inset-0 bg-auto bg-center bg-repeat-x'
                style={{ backgroundImage: `url(${Ellipise.src})`, backgroundPosition: '50% 100%', scale: 0.5 }}
            />
            <Container className='relative z-10 flex h-full flex-col items-center gap-8 pt-6 xl:flex-row xl:justify-between xl:gap-0 xl:pt-0'>
                <div className='flex flex-col gap-4 xl:gap-6'>
                    <span className='text-[43px] font-bold leading-[47.3px] text-gray-800 xl:text-[80px] xl:leading-[88px]'>
                        A New Era of <br /> Cryptocurrency
                    </span>
                    <span className='h4 font-normal text-gray-700'>
                        Your Gateway to Secure and Seamless <br />
                        Crypto Transactions
                    </span>
                    <Button className='mt-4 xl:w-fit' block={isMobile} onClick={scrollToMarket}>
                        Start Investing
                    </Button>
                </div>
                <Image src={HeroImage.src} unoptimized alt='Hero' width={671} height={573} />
            </Container>
        </div>
    );
};

export default Hero;
