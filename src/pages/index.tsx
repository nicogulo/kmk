import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
    return (
        <Layout>
            {/* <Seo templateTitle='Home' /> */}
            <Seo />

            <section className='bg-white'>
                <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
                    <h1>Binaloka Indonesia</h1>
                    <footer className='absolute bottom-2 text-gray-700'>
                        © {new Date().getFullYear()} By{' '}
                        <UnderlineLink href='https://www.binalokaindonesia.com'>Binaloka Indonesia</UnderlineLink>
                    </footer>
                </div>
            </section>
        </Layout>
    );
}
