import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import classNames from '@/lib/classnames';

import Container from '@/components/Container';
import Icons from '@/components/Icon';

const Footer = () => {
    const router = useRouter();
    const isTnc = router.pathname === '/terms-and-conditions';
    return (
        <div
            className={classNames('bg-gray-800 pb-[80px]', {
                '!bg-white pt-3': isTnc
            })}
        >
            <Container className='flex flex-col gap-10'>
                <Icons icon='Logo' width={151} height={40} />
                <span
                    className={classNames('text-xs text-gray-400', {
                        '!text-gray-800': isTnc
                    })}
                >
                    <strong>DISCLAIMER:</strong> Perdagangan bitcoin dan aset kripto memiliki peluang dan resiko yang
                    tinggi. Pastikan Anda menggunakan pertimbangan yang matang dalam membuat keputusan jual dan beli
                    aset Anda. KMK tidak memaksakan pengguna untuk melakukan transaksi jual beli dan semua keputusan
                    jual beli aset uang digital Anda adalah keputusan Anda sendiri dan tidak dipengaruhi oleh pihak
                    manapun.
                </span>
                <div className='flex flex-row items-center justify-between border-t border-t-gray-700 pt-4'>
                    <span
                        className={classNames('text-xs text-gray-400', {
                            '!text-gray-800': isTnc
                        })}
                    >
                        Copyright {new Date().getFullYear()} © PT KMK
                    </span>
                    <Link href='/terms-and-conditions'>
                        <div
                            className={classNames('flex flex-row items-center gap-2 text-xs text-gray-400', {
                                '!text-gray-800': isTnc
                            })}
                        >
                            <span className='cursor-pointer'>Privacy Policy</span>•
                            <span className='cursor-pointer'>Terms & Condition</span>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
