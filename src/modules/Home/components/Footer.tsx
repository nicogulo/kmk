import Container from '@/components/Container';
import Icons from '@/components/Icon';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-800 pb-[80px]'>
            <Container className='flex flex-col gap-10'>
                <Icons icon='Logo' width={151} height={40} />
                <span className='text-xs text-gray-400'>
                    <strong>DISCLAIMER:</strong> Perdagangan bitcoin dan aset kripto memiliki peluang dan resiko yang
                    tinggi. Pastikan Anda menggunakan pertimbangan yang matang dalam membuat keputusan jual dan beli
                    aset Anda. Binaloka tidak memaksakan pengguna untuk melakukan transaksi jual beli dan semua
                    keputusan jual beli aset uang digital Anda adalah keputusan Anda sendiri dan tidak dipengaruhi oleh
                    pihak manapun.
                </span>
                <div className='flex flex-row items-center justify-between border-t border-t-gray-700 pt-4'>
                    <span className='text-xs text-gray-400'>Copyright {new Date().getFullYear()} © PT Binaloka</span>
                    <div className='flex flex-row items-center gap-2 text-xs text-gray-400'>
                        <span className='cursor-pointer'>Privacy Policy</span>•
                        <span className='cursor-pointer'>Terms & Condition</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
