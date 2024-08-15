import { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nProgress from 'nprogress';
import { When } from 'react-if';

import '@/styles/globals.css';

import DismissableToast from '@/components/DismissableToast';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const pageIgnore = [
    '/register',
    '/register/email-verification',
    '/register/email-success',
    '/login',
    '/forgot-password',
    '/dashboard',
    '/change-password'
];

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isIgnore = Boolean(pageIgnore.some((page) => router.pathname.includes(page)));
    return (
        <Layout>
            <When condition={!isIgnore}>
                <Header />
            </When>

            <DismissableToast />
            <div className='min-h-main'>
                <Component {...pageProps} />
            </div>
        </Layout>
    );
};

export default appWithTranslation(MyApp);
