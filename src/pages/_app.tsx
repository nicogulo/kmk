import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AppProps } from 'next/app';
import { IBM_Plex_Sans } from 'next/font/google';
import Router, { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nProgress from 'nprogress';

import '@/styles/globals.css';
import '@/styles/nprogress.css';

import DismissableToast from '@/components/DismissableToast';
import { When } from '@/components/If';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

nProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 800,
    minimum: 0.3
});

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const pageIgnore = [
    '/register',
    '/register/email-verification',
    '/register/email-success',
    '/login',
    '/forgot-password',
    '/change-password'
];

const ibmPlex = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: 'normal'
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { user } = pageProps;

    const router = useRouter();
    const isIgnore = Boolean(pageIgnore.some((page) => router.pathname.includes(page)));

    return (
        // <UserProvider user={user} profileUrl='/api/page-router-auth/me' loginUrl='/api/page-router-auth/login'>
        <UserProvider>
            <main className={ibmPlex.className}>
                <Layout>
                    <When condition={!isIgnore}>
                        <Header />
                    </When>
                    <DismissableToast />
                    <div className='min-h-main bg-gray-50'>
                        <Component {...pageProps} />
                    </div>
                </Layout>
            </main>
        </UserProvider>
    );
};

export default appWithTranslation(MyApp);
