import React from 'react';

import Collapse from '@/components/Collapse';
import Container from '@/components/Container';

const Faq = () => {
    const faqItems = [
        {
            question: 'Bagaimana cara membeli/menjual kripto?',
            answer: 'Untuk membeli atau menjual kripto di KMK, cukup buat akun, lengkapi proses verifikasi KYC, dan dana akun Anda menggunakan metode deposit yang tersedia. Setelah akun Anda terisi dana, Anda dapat membeli atau menjual kripto langsung dari platform trading.'
        },
        {
            question: 'Apakah KMK aman?',
            answer: 'Ya, KMK memprioritaskan keamanan dana dan informasi pribadi Anda. Kami menerapkan langkah-langkah keamanan standar industri, termasuk otentikasi dua faktor (2FA), enkripsi, dan penyimpanan dingin untuk sebagian besar aset digital. Kami juga terdaftar dan diatur oleh BAPPEBTI, memastikan kami mematuhi semua standar hukum dan keamanan.'
        },
        {
            question: 'Apa saja biaya yang dikenakan?',
            answer: 'KMK menawarkan biaya yang kompetitif, yang mencakup biaya trading, biaya penarikan, dan biaya deposit, tergantung pada metode pembayaran yang Anda pilih. Struktur biaya kami yang terperinci dapat ditemukan di halaman Biaya. Kami bertujuan untuk menjaga biaya kami transparan dan sekecil mungkin.'
        },
        {
            question: 'Bagaimana cara menghubungi dukungan?',
            answer: `Jika Anda membutuhkan bantuan, Anda dapat menghubungi tim dukungan kami melalui email di <a href="mailto:support@kriptomaksima.id">support@kriptomaksima.id</a>, live chat di situs web kami, atau hotline dukungan pelanggan kami. Kami siap membantu Anda 24/7 dengan pertanyaan atau masalah apa pun yang mungkin Anda miliki.`
        }
    ];

    return (
        <div className=' relative  pb-[80px] '>
            <Container className='flex flex-col items-center justify-between gap-9 xl:flex-row'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[40px] font-bold leading-10 text-gray-900'>
                        Apakah Anda memiliki <br />
                        pertanyaan lain?
                    </span>
                    <span className='text-[16px] font-normal leading-6 text-gray-700'>
                        Kami telah mengumpulkan topik-topik penting yang paling sering <br />
                        menjadi perhatian pelanggan kami. Jika Anda masih belum <br />
                        menemukan jawaban atas pertanyaan Anda, <br />
                        silakan hubungi Dukungan Pelanggan kami.
                    </span>
                </div>
                <div className=' xl:w-[548px]'>
                    {faqItems.map((item, index) => {
                        return (
                            <Collapse
                                title={item.question}
                                titleClassName='!text-[16px] !leading-6'
                                className='!border-none'
                                defaultExpanded={index === 0}
                                key={index}
                            >
                                <div className='xs text-gray-600' dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </Collapse>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Faq;
