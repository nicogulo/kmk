import { AppProps } from 'next/app';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nProgress from 'nprogress';

import '@/styles/globals.css';

import DismissableToast from '@/components/DismissableToast';
import Layout from '@/components/layout/Layout';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <DismissableToast />
        <Component {...pageProps} />
    </Layout>
);

export default appWithTranslation(MyApp);
