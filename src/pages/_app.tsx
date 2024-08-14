import { AppProps } from 'next/app';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nProgress from 'nprogress';

import '@/styles/globals.css';

import DismissableToast from '@/components/DismissableToast';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Header />
        <DismissableToast />
        <div className='min-h-main bg-gray-50'>
            <Component {...pageProps} />
        </div>
    </Layout>
);

export default appWithTranslation(MyApp);
