import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Else, If, Then } from 'react-if';

import Container from '@/components/Container';
import Footer from '@/modules/Home/components/Footer';
import IndoVersion from '@/modules/TermsCondition/components/IndoVersion';
import EnglishVersion from '@/modules/TermsCondition/components/EnglishVersion';

const TermsCondition = () => {
    const { i18n } = useTranslation();
    const isLangId = i18n.language === 'id' ? true : false;

    return (
        <>
            <Container className='flex justify-center py-3'>
                <div className='tnc-text flex w-[50%] flex-col'>
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
