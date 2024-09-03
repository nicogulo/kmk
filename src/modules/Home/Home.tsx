import React from 'react';

import Seo from '@/components/Seo';

import Faq from './components/Faq';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MarketList from './components/MarketList';
import StartTrading from './components/StartTrading';

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
