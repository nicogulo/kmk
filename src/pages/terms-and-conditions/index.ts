import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TermsCondition from '@/modules/TermsCondition';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(locale && (await serverSideTranslations(locale, ['common'])))
            // Will be passed to the page component as props
        }
    };
};

export default TermsCondition;
