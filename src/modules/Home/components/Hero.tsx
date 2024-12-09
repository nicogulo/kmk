import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '@/components/Button';
import Container from '@/components/Container';

import CoinHero from '../images/coin-hero.png';
import CoinHeroMobile from '../images/coin-hero-mobile.png';
import HeroImage from '../images/hero.webp';
import HeroImageMobile from '../images/hero-mobile.webp';

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
        <div
            className='bg-primary-100 relative h-[800px] xl:h-[600px]'
            style={{
                backgroundImage: `url(${isMobile ? HeroImageMobile.src : HeroImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Container className='relative z-10 flex h-full flex-col items-center gap-8 pt-6 xl:flex-row xl:justify-between xl:gap-0 xl:pt-0'>
                <div className='flex flex-col gap-4 xl:gap-6'>
                    <span className='text-center text-[43px] font-bold leading-[47.3px] text-white xl:text-[80px] xl:leading-[88px]'>
                        Crypto Made <br /> Simple
                    </span>
                    <span className='h4 font-normal text-white'>
                        Experience effortless trading and secure <br /> transactions, <b>all in one place</b>.
                    </span>
                    <Button
                        className='mt-4 !rounded-full !bg-white !text-gray-900 xl:w-fit'
                        block={isMobile}
                        onClick={scrollToMarket}
                    >
                        Start Investing
                    </Button>
                </div>
                <Image
                    src={isMobile ? CoinHeroMobile.src : CoinHero.src}
                    unoptimized
                    alt='Hero'
                    width={isMobile ? 320 : 531}
                    height={isMobile ? 380 : 500}
                    className='absolute bottom-0  xl:left-[unset] xl:right-0 xl:top-[50px]'
                />
            </Container>
        </div>
    );
};

export default Hero;
