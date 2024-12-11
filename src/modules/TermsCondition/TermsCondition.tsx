import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import React from 'react';

import Container from '@/components/Container';
import { Else, If, Then } from '@/components/If';

import Footer from '@/modules/Home/components/Footer';
import EnglishVersion from '@/modules/TermsCondition/components/EnglishVersion';
import IndoVersion from '@/modules/TermsCondition/components/IndoVersion';

const TermsCondition = () => {
    const { i18n } = useTranslation();
    const isLangId = i18n.language === 'id' ? true : false;

    return (
        <>
            <Head>
                <title>Privacy policy & Terms condition | KMK</title>
                <meta name='description' content='Privacy policy & Terms condition' />
            </Head>
            <Container className='flex justify-center py-3'>
                <div className='tnc-text flex flex-col xl:w-[50%]'>
                    <If condition={isLangId}>
                        <Then>
                            <IndoVersion />
                        </Then>
                        <Else>
                            <EnglishVersion />
                        </Else>
                    </If>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default TermsCondition;
