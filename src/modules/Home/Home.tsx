import React from 'react';

import Seo from '@/components/Seo';

import Feature from './components/Feature';
import Hero from './components/Hero';
import MarketList from './components/MarketList';
import StartTrading from './components/StartTrading';
import Faq from './components/Faq';
import Footer from './components/Footer';

const Home = () => {
    return (
        <main className='flex flex-col bg-white'>
            <Seo />
            <Hero />
            <Feature />
            <MarketList />
            <StartTrading />
            <Faq />
            <Footer />
        </main>
    );
};

export default Home;
