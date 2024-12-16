/* eslint-disable react/no-unknown-property */
import dayjs from 'dayjs';
import React from 'react';

import Icons from '@/components/Icon';

interface Props {
    checked: boolean | null;
}

const Form1: React.FC<Props> = ({ checked }) => (
    <>
        <style jsx>{`
            table {
                width: 100%;
                border-collapse: collapse;
                color: #525d66;
            }

            // table,
            // th,
            // td {
            //     border: 1px solid black;
            // }

            th,
            td {
                padding: 15px;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
            }

            p,
            li {
                text-align: justify;
                color: #525d66;
            }
            /* styling ul li with number */
            ol,
            ul {
                list-style-type: decimal;
            }
            li {
                margin-left: 32px;
            }
        `}</style>
        <div className='flex items-center justify-center'>
            <Icons icon='Logo' width={90} height={32} />
        </div>
        <h3 className='text-center'>PERJANJIAN PELANGGAN</h3>

        <div>
            <p className='pb-3 !text-center'>
                <strong>PROFIL PERUSAHAAN </strong>
            </p>

            <p className='py-2'>
                PT KRIPTO MAKSIMA KOIN (“Perusahaan” atau “Kami”) adalah perseroan terbatas yang didirikan berdasarkan
                hukum Indonesia. Perusahaan telah mendapatkan tanda daftar sebagai calon pedagang fisik Aset Kripto dari
                Badan Pengawas Perdagangan Berjangka Komoditi (“BAPPEBTI”). Bappebti mensyaratkan Kami untuk memberikan
                informasi berikut mengenai Perusahaan kepada Anda:
            </p>

            <table className='border-text-transparent-10 border'>
                <tr>
                    <th>Alamat Perusahaan</th>
                    <td>
                        Gedung Pasaraya Blok M, Gedung B, Lantai 3, Jl. Iskandarsyah II No. 2, Kelurahan Melawai,
                        Kecamatan Kebayoran Baru, Jakarta Selatan 12160, Indonesia . Mohon diperhatikan bahwa Kami tidak
                        menawarkan bantuan Pelanggan apa pun dari alamat kantor ini. Untuk bantuan, silakan hubungi
                        Layanan Pengaduan Pelanggan Kami.
                    </td>
                </tr>

                <tr>
                    <th>Website</th>
                    <td>
                        <a href='https://kriptomaksima.com' className='text-blue-500'>
                            kriptomaksima.com
                        </a>
                    </td>
                </tr>
                <tr>
                    <th>Struktur Manajemen</th>
                    <td>
                        <br />
                        PT KRIPTO MAKSIMA KOIN memiliki Direksi dan Dewan Komisaris yang bertanggung jawab sepenuhnya
                        atas keseluruhan manajemen Perusahaan.
                    </td>
                </tr>
                <tr>
                    <th>Nomor Perizinan</th>
                    <td>
                        <table className='border-text-transparent-10 border'>
                            <tr className='border-text-transparent-10 border'>
                                <th className='border-text-transparent-10 border'>Nomor</th>
                                <th className='border-text-transparent-10 border'>Nama Perizinan</th>
                            </tr>
                            <tr className='border-text-transparent-10 border'>
                                <td className='border-text-transparent-10 border'>
                                    003/BAPPEBTI/CP-AK/01/2022 tertanggal 28 Januari 2022
                                </td>
                                <td className='border-text-transparent-10 border'>
                                    Calon Pedagang Fisik Aset Kripto BAPPEBTI
                                </td>
                            </tr>
                            <tr className='border-text-transparent-10 border'>
                                <td className='border-text-transparent-10 border'>
                                    001524.01/DJAI.PSE/11/2021 tertanggal 8 November 2021
                                </td>
                                <td className='border-text-transparent-10 border'>
                                    Tanda Daftar Penyelenggara Sistem Elektronik
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <th> Nomor telepon</th>
                    <td>
                        <a href='tel:+021 5094 1000'> 021 5094 1000</a>. Mohon diperhatikan bahwa Kami tidak menawarkan
                        bantuan Pelanggan apa pun dari nomor telepon ini. Untuk bantuan, silakan hubungi Layanan
                        Pengaduan Pelanggan Kami.
                    </td>
                </tr>
            </table>

            <br />
            <p className='pb-2 !text-center'>
                <strong>PERNYATAAN ADANYA RISIKO</strong>
            </p>
            <ul className='flex list-decimal flex-col gap-3'>
                <li>
                    Aset Kripto adalah komoditi yang tidak berwujud yang berbentuk digital, menggunakan kriptografi,
                    jaringan informasi teknologi, dan buku besar yang terdistribusi, untuk mengatur penciptaan unit
                    baru, memverifikasi transaksi, dan mengamankan transaksi tanpa campur tangan pihak lain.
                </li>
                <li>
                    Aktivitas perdagangan Aset Kripto merupakan aktivitas berisiko tinggi. Nilai dari Aset Kripto ini
                    dapat naik atau turun dengan volatilitas besar, dan akan dipengaruhi oleh hal-hal di luar kendali
                    Perusahaan. Semua Aset Kripto berpotensi mengalami perubahan nilai secara drastis atau bahkan
                    menjadi tidak memiliki manfaat ekonomi apa pun. Terdapat risiko kehilangan yang tinggi sebagai
                    dampak dari membeli, menjual, atau berdagang apa pun di pasar fisik Aset Kripto, dan Perusahaan
                    tidak bertanggung jawab atas perubahan fluktuasi dari nilai tukar Aset Kripto. Perusahaan juga tidak
                    bertanggung jawab atas kerugian yang terjadi dalam berinvestasi atau memperdagangkan Aset Kripto
                    dan/atau aset digital lainnya.
                </li>
                <li>
                    Anda wajib berhati-hatilah terhadap pernyataan bahwa Pelanggan Aset Kripto pasti mendapatkan
                    keuntungan besar dari perdagangan Aset Kripto. Walaupun perdagangan Aset Kripto dapat memberikan
                    keuntungan yang besar dalam tempo yang singkat, informasi ini tidak pasti berlaku, bahkan
                    perdagangan Aset Kripto dapat menimbulkan kerugian yang besar dalam tempo yang singkat juga. Kami
                    menyatakan bahwa dalam perdagangan Aset Kripto tidak ada yang dinamakan pasti untung sebagaimana
                    produk komoditas atau keuangan lainnya.
                </li>
                <li>
                    Anda wajib berhati-hati dalam mengukur situasi finansial dan memastikan bahwa Anda bersedia
                    menghadapi risiko yang ada dalam menjual, membeli, atau berdagang Aset Kripto. Anda juga disarankan
                    untuk melakukan riset pribadi atau berkonsultasi dengan pihak profesional/ahli independen sebelum
                    membuat keputusan untuk memperdagangkan Aset Kripto. Semua keputusan perdagangan Aset Kripto
                    merupakan keputusan independen dan mandiri oleh Anda secara sadar tanpa paksaan, dan melepaskan
                    Perusahaan atas kegiatan perdagangan Aset Kripto. Anda menyatakan bahwa semua Aset Kripto mempunyai
                    risiko, dan tidak ada strategi berdagang yang dapat menjamin untuk menghilangkan risiko tersebut.
                </li>
                <li>
                    5. Perusahaan tidak menjamin kelangsungan jangka panjang dari Aset Kripto yang diperdagangkan maupun
                    ditukar di dalam Platform Perusahaan. Perusahaan tidak melakukan kegiatan menambang (crypto mining)
                    atau menciptakan Aset Kripto. Aset Kripto diciptakan menggunakan aplikasi komputer khusus oleh para
                    penambang (miner) di luar kendali Perusahaan yang tersebar secara acak di seluruh dunia dan saling
                    terhubung dengan jaringan teknologi blockchain.
                </li>
                <li>
                    Pelanggan mengakui dan setuju bahwa Pelanggan akan mengakses dan menggunakan layanan dan produk
                    Perusahaan dengan risiko Pelanggan sendiri.
                </li>
                <li>
                    Pernyataan ini tidak memuat secara rinci seluruh risiko atau aspek penting lainnya tentang
                    perdagangan Aset Kripto. Oleh karena itu, Pelanggan harus mempelajari kegiatan perdagangan Aset
                    Kripto secara cermat sebelum memutuskan melakukan transaksi.
                </li>
            </ul>
            <br />
            <p>
                Dengan menggunakan layanan Perusahaan, Pelanggan menyatakan bahwa Pelanggan telah menerima dan membaca
                bagian tentang “PERNYATAAN ADANYA RISIKO” serta mengerti dan menyetujui isinya.
            </p>

            <br />
            <br />
            <p className='pb-2 !text-center'>
                <strong>ATURAN PERDAGANGAN ASET KRIPTO</strong>
            </p>

            <strong>DEFENISI</strong>
            <p>Kecuali ditentukan lain, istilah atau definisi di Perjanjian Pelanggan ini memiliki arti:</p>

            <ul className='flex list-decimal flex-col gap-3 py-4'>
                <li>
                    Akun Pelanggan adalah akses terhadap akun yang diberikan kepada Pelanggan yang sudah memenuhi
                    persyaratan yang ditetapkan oleh Perusahaan dan proses pendaftaran/Registrasi telah melalui proses
                    Verifikasi oleh Perusahaan.
                </li>
                <li>
                    Aset Kripto adalah komoditi yang tidak berwujud yang berbentuk digital menggunakan kriptografi,
                    jaringan informasi teknologi dan buku besar yang terdistribusi untuk mengatur penciptaan unit baru,
                    memverifikasi transaksi, dan mengamankan transaksi tanpa campur tangan pihak lain, yang tersedia
                    untuk diperdagangkan di Platform.
                </li>
                <li>Aturan adalah aturan perdagangan Aset Kripto yang diatur dalam Perjanjian Pelanggan ini.</li>
                <li>
                    BAKTI adalah Badan Arbitrase Perdagangan Berjangka Komoditi yang didirikan oleh Bappebti untuk
                    menyelesaikan sengketa di bidang perdagangan berjangka komoditi.
                </li>
                <li>Bappebti adalah Badan Pengawas Perdagangan Berjangka Komoditi.</li>
                <li>
                    Bursa Aset Kripto adalah Bursa Berjangka Penyelenggara Perdagangan Aset Kripto yang ditunjuk oleh
                    regulator untuk menyediakan dan menyelenggarakan sistem dan/atau sarana jual beli Aset Kripto.
                </li>
                <li>
                    Calon Pelanggan adalah perorangan yang melakukan proses pendaftaran/Registrasi namun belum melalui
                    proses Verifikasi oleh Perusahaan.
                </li>
                <li>
                    Know Your Customer (KYC) adalah proses penilaian terhadap Calon Pelanggan sebagai salah satu proses
                    Verifikasi dalam pendaftaran/Registrasi.
                </li>
                <li>
                    Layanan adalah jasa yang disediakan Perusahaan, termasuk namun tidak terbatas melalui Platform,
                    untuk memfasilitasi Pelanggan dalam melakukan jual, beli, ataupun perdagangan Aset Kripto.
                </li>
                <li>
                    Order Book adalah informasi yang menampilkan informasi perdagangan Aset Kripto, antara lain
                    penawaran harga jual dan beli, volume perdagangan, dan informasi permintaan pembelian dan daftar
                    penawaran jual Aset Kripto.
                </li>
                <li>
                    Pelanggan adalah perorangan maupun yang telah melakukan Registrasi dan Verifikasi pada Platform
                    sehingga dapat menggunakan Platform untuk menjual, membeli, atau transfer Aset Kripto.
                </li>
                <li>
                    Pemberitahuan Privasi adalah laman yang tersedia dalam Platform sehubungan dengan ketentuan
                    kebijakan privasi.
                </li>
                <li>
                    Platform adalah platform yang dimiliki dan/atau dikelola oleh Perusahaan dan/atau afiliasinya,
                    termasuk namun tidak terbatas pada pemilik, investor, afiliasi, karyawan dan pihak-pihak yang
                    terkait dengan Perusahaan. Tergantung pada konteksnya, Platform juga dapat merujuk pada produk,
                    layanan, atau fasilitas yang disediakan Perusahaan.
                </li>
                <li>
                    Registrasi adalah proses pendaftaran dengan cara memverifikasi data yang diajukan Calon Pelanggan
                    untuk kemudian ditentukan sebagai Pelanggan.
                </li>
                <li>
                    Verifikasi adalah proses pemeriksaan terhadap Pelanggan mengenai keterangan terkait data dan
                    informasi Pelanggan yang dicantumkan dalam proses Registrasi.
                </li>
            </ul>
            <span>
                Perusahaan menyediakan produk dan layanan berupa platform Aset Kripto (“Platform”). Platform memuat
                sejumlah Aset Kripto disertai harganya masing-masing yang dapat diakses oleh Anda melalui Platform
                perdagangan Aset Kripto di Perusahaan. Anda wajib tunduk pada Aturan perdagangan Aset Kripto (“Aturan”)
                dalam Platform Perusahaan, sebagai berikut:
            </span>
            <ul className='flex list-decimal flex-col gap-3 py-4'>
                <li>
                    <strong>Proses Pendaftaran Pelanggan Aset Kripto</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>1.1. Pelanggan setuju dan sepakat untuk tunduk dan patuh pada Perjanjian Pelanggan ini.</li>
                        <li>
                            1.2. Pelanggan dapat melakukan proses registrasi atau pendaftaran dengan syarat dan
                            ketentuan apabila telah berusia minimal 17 (tujuh belas) tahun.
                        </li>
                        <li>
                            1.3. Pelanggan wajib memiliki identitas yang sah menurut hukum (Kartu TPelanggan
                            Penduduk/KTP bagi warga negara Indonesia tampak jelas.
                        </li>
                        <li>1.4. Pelanggan mendaftarkan alamat email aktif, kata sandi, dan nomor ponsel.</li>
                        <li>
                            1.5. Pelanggan harus mendaftarkan nama lengkap, nomor kartu identitas, swafoto bersama
                            dengan kartu identitas yang keseluruhannya merupakan identitas asli Calon Pelanggan. Untuk
                            pendaftaran dan pembukaan akun Pelanggan, Calon Pelanggan wajib melengkapi data dan
                            informasi dengan benar dan lengkap pada formulir yang disediakan Perusahaan sebagai berikut:
                            <ul
                                style={{
                                    listStyle: 'lower-alpha'
                                }}
                            >
                                <li>Nama Lengkap;</li>
                                <li>Kartu Identitas;</li>
                                <li>Email</li>
                                <li>Tempat/Tanggal Lahir;</li>
                                <li>Nomor Ponsel;</li>
                                <li>Kode pos; dan</li>
                                <li>Kata sandi</li>
                            </ul>
                        </li>
                        <li>
                            1.6. Calon Pelanggan menyatakan dan menjamin bahwa hal-hal yang berkaitan dengan segala
                            bentuk data, dokumen, informasi, keterangan, pernyataan yang diberikan oleh Calon Pelanggan
                            kepada Perusahaan selama proses pendaftaran pada aplikasi Platform adalah benar, asli,
                            lengkap dan aktual, serta terpercaya.
                        </li>
                        <li>
                            1.7. Calon Pelanggan dengan ini mengakui dan menyetujui bahwa untuk memfasilitasi proses
                            registrasi yang dilakukan oleh Calon Pelanggan, Perusahaan dapat meminta dan/atau data-data
                            yang dibutuhkan untuk proses registrasi ke afiliasi Perusahaan yang Calon Pelanggan sudah
                            terdaftar sebagai Pelanggan.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Pembukaan Akun Pelanggan</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            2.1. Bahwa Calon Pelanggan dengan ini setuju bahwa proses untuk menjadi Pelanggan di
                            Platform Perusahaan hanya akan berlaku efektif setelah seluruh persyaratan yang ditetapkan
                            oleh Perusahaan telah dipenuhi oleh Calon Pelanggan dan proses pendaftaran/registrasi telah
                            melalui proses verifikasi untuk ditindaklanjuti dan apabila dinyatakan lengkap maka akan
                            disetujui oleh Perusahaan.
                        </li>
                        <li>
                            2.2. Perusahaan akan menyampaikan aktivasi akun yang didaftar dan dibuat oleh Calon
                            Pelanggan setelah Perusahaan melakukan verifikasi Calon Pelanggan dan menyelesaikan proses
                            Know-Your-Customer (KYC) berdasarkan peraturan perundang-undangan yang berlaku. Pelanggan
                            yang telah terdaftar harus melakukan verifikasi dan KYC, sebelum melakukan transaksi.
                        </li>
                        <li>
                            2.3. Calon Pelanggan hanya dapat membuka 1 (satu) akun untuk setiap Pelanggan dengan
                            identitas yang sama.
                        </li>
                        <li>
                            2.4. Bahwa Perusahaan akan melakukan pengawasan, mengelola, mengatur berdasarkan aturan dan
                            prosedur yang ditetapkan Perusahaan atas data, informasi, keterangan, pernyataan atau segala
                            sesuatu yang berkenaan dengan Pelanggan maupun kegiatan usaha atau transaksi Pelanggan yang
                            terkait dengan akun milik Pelanggan.
                        </li>
                        <li>
                            2.5. Bahwa segala sesuatu risiko yang mungkin akan timbul sehubungan dengan penutupan
                            /pemblokiran/pembekuan akun yang diakibatkan oleh kesalahan dan/atau kelalaian Pelanggan,
                            dengan ini akan menjadi tanggung jawab Pelanggan dan dengan ini Perusahaan tidak akan
                            memberikan ganti rugi dari Pelanggan atau pihak manapun sehubungan dengan adanya penutupan
                            /pemblokiran/pembekuan akun tersebut.
                        </li>
                        <li>
                            2.6. Pelanggan dengan ini memberikan persetujuan dan kuasa kepada Perusahaan untuk
                            menggunakan semua data, dokumen, informasi, keterangan, pernyataan yang diperoleh Perusahaan
                            mengenai Pelanggan termasuk namun tidak terbatas pada penggunaan sarana komunikasi pribadi
                            Pelanggan untuk segala keperluan lainnya sepanjang dimungkinkan dan diperbolehkan menurut
                            peraturan perundang-undangan yang berlaku, termasuk juga untuk keperluan pemasaran
                            produk-produk Perusahaan ataupun produk pihak lain yang bekerja sama dengan Perusahaan.
                            Ketentuan sehubungan dengan penggunaan data pribadi Pelanggan akan diatur lebih lanjut dalam
                            Kebijakan Privasi Perusahaan, yang dapat dilihat di halaman Pemberitahuan Privasi
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Tata Cara Kegiatan Transaksi Aset Kripto</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            3.1. Semua transaksi yang dilakukan oleh Pelanggan adalah berasal dari pengguna yang
                            terdaftar di Perusahaan.
                        </li>
                        <li>
                            3.2. Untuk melakukan transaksi pembelian Aset Kripto, Pelanggan wajib memiliki deposit yang
                            cukup dalam dompet fiat milik Pelanggan. Pelanggan dapat melakukan deposit dalam mata uang
                            Rupiah melalui metode deposit yang tersedia dari waktu ke waktu sebagaimana diberitahukan
                            oleh Perusahaan melalui Platform.
                        </li>
                        <li>
                            3.3. Metode Transaksi:
                            <ul
                                style={{
                                    listStyle: 'lower-alpha'
                                }}
                            >
                                <li>
                                    <strong>Metode Instan</strong>: Pelanggan dapat melakukan pembelian/penjualan Aset
                                    Kripto dengan Rupiah, secara instan atau langsung pada titik kesepakatan yang
                                    terdapat dalam Platform. Metode ini disebut juga Jual/Beli Instan yang memungkinkan
                                    order yang dimasukkan langsung cocok dengan order antrian terbaik yang terdapat di
                                    akun Pelanggan; atau
                                </li>
                            </ul>
                        </li>
                        <li>3.4. Transaksi jual beli di Platform dilakukan 24 jam dan 7 hari seminggu.</li>
                        <li>3.5. Terdapat biaya transaksi pada setiap proses jual atau beli Aset Kripto.</li>
                        <li>
                            3.6. Harga final yang dibayarkan dan/atau diterima (sebagaimana relevan) oleh Pelanggan
                            sehubungan dengan transaksi jual dan/atau beli oleh Pelanggan adalah harga yang tercantum
                            dalam bukti transaksi yang diberikan Perusahaan melalui Platform.
                        </li>
                        <li>
                            3.7. Penarikan uang fiat akan diproses dalam jangka waktu paling lambat 2 hari kerja setelah
                            permintaan penarikan uang fiat diterima oleh Perusahaan.
                        </li>

                        <li>
                            3.8. Penarikan uang fiat hanya bisa dilakukan ke rekening bank milik Pelanggan yang
                            didaftarkan ke Perusahaan.
                        </li>
                        <li>
                            3.9. Terdapat jumlah maksimum penarikan uang fiat yang bisa dilakukan oleh Pelanggan
                            sebagaimana diberitahukan dari waktu ke waktu oleh Perusahaan melalui Platform. Untuk
                            menghindari keraguan, Perusahaan berhak untuk menahan dan/atau menolak transaksi penarikan
                            uang fiat apabila terindikasi sebagai transaksi mencurigakan, melanggar Aturan dan/atau
                            peraturan perundang-undangan.
                        </li>
                        <li>
                            3.10. Pelanggan dapat mengirim dan menerima Aset Kripto yang tersedia melalui layanan di
                            Platform Perusahaan, yang dapat dikembangkan dari waktu ke waktu oleh Perusahaan. Anda
                            mengerti bahwa fitur kirim dan/atau terima Aset Kripto akan aktif dalam jangka waktu 24 jam
                            setelah anda mengaktifkan fitur transfer Aset Kripto.
                        </li>
                        <li>
                            3.11. Pelanggan mengerti dan setuju bahwa pada saat mengirim dan/atau menerima Aset Kripto,
                            Pelanggan yang melakukan transaksi tersebut bertanggung jawab untuk memastikan bahwa
                            transaksi dengan dilaksanakan dengan benar, termasuk namun tidak terbatas pada nominal
                            transaksi, jaringan blockchain yang digunakan untuk transaksi, memastikan alamat dompet
                            pengirim dan/atau alamat dompet penerima Aset Kripto telah dicantumkan dengan benar.
                            Perusahaan tidak bertanggung jawab atas segala bentuk kerugian yang mungkin timbul secara
                            langsung dan/atau tidak langsung dari kesalahan dan/atau kelalaian yang dilakukan oleh
                            Pelanggan.
                        </li>
                        <li>
                            3.12. Perusahaan mencatat semua transaksi data yang terjadi di dalam Platform Perusahaan.
                        </li>
                        <li>
                            3.13. Pelanggan dengan ini menyatakan bahwa Pelanggan mengetahui dan menyetujui Perusahaan
                            dapat bekerjasama dengan pihak ketiga dalam melakukan pemrosesan transaksi, termasuk namun
                            tidak terbatas pada proses penyelesaian transaksi yang diotorisasi oleh Pelanggan.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Transaksi Mencurigakan</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            4.1. Dalam hal terjadinya transaksi mencurigakan yang dilakukan melalui layanan Platform,
                            maka Perusahaan berhak untuk menghentikan/menonaktifkan Akun Pelanggan di Platform dan
                            memblokir dana transaksi serta melakukan penundaan transaksi kepada Pelanggan, sampai dengan
                            adanya pemberitahuan dari Perusahaan.
                        </li>
                        <li>
                            4.2. Dalam hal terjadi transaksi mencurigakan dan/atau transaksi yang melebihi batasan
                            volume transaksi yang ditetapkan oleh Perusahaan terhadap Pelanggan karena alasan apa pun
                            juga, maka Perusahaan berhak sewaktu-waktu menunda pengkreditan dana ke Akun Pelanggan
                            dan/atau melakukan pemblokiran Akun Pelanggan sampai proses investigasi selesai dilakukan
                            dalam jangka waktu yang ditentukan oleh Perusahaan.
                        </li>
                        <li>
                            4.3. Apabila terbukti bahwa transaksi tersebut pada angka 4.1 dan 4.2 tersebut di atas
                            mengenai transaksi mencurigakan adalah transaksi yang melanggar Aturan ini dan/atau
                            peraturan perundang-undangan yang berlaku, maka Pelanggan dengan ini memberi kuasa kepada
                            Perusahaan untuk mendebet Aset Kripto pada dompet digital Platform untuk mengganti kerugian
                            Perusahaan yang timbul akibat transaksi tersebut, tanpa mengurangi hak untuk melakukan
                            tuntutan ganti rugi atas seluruh kerugian yang timbul akibat transaksi tersebut dan
                            Pelanggan dengan ini setuju bahwa Perusahaan tidak wajib melakukan pengembalian atas dana
                            yang ditunda pengkreditannya oleh Perusahaan atau dana yang diblokir sebagaimana dimaksud
                            pada angka 4.2 ketentuan mengenai transaksi mencurigakan ini.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong> Biaya Transaksi</strong> <br />
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>5.1. Tidak ada biaya yang dikenakan kepada Pelanggan untuk Metode Instan;</li>
                        <li>
                            5.2. Untuk deposit fiat, terdapat biaya dengan jumlah tergantung pada metode deposit yang
                            dipilih oleh Pelanggan, yang mana besaran biaya tersebut akan diberitahukan oleh Perusahaan
                            dan/atau mitra penyedia kanal metode deposit kepada Pelanggan sebelum Pelanggan
                            mengotorisasi transaksi deposit tersebut.
                        </li>
                        <li>
                            5.3. Untuk penarikan uang fiat, terdapat biaya dengan jumlah tergantung pada kanal penarikan
                            yang dipilih oleh Pelanggan, yang mana besaran biaya tersebut akan diberitahukan oleh
                            Perusahaan kepada Pelanggan sebelum Pelanggan mengotorisasi transaksi penarikan uang fiat.
                        </li>
                        <li>
                            5.4. Untuk pengiriman dan/atau penerimaan Aset Kripto, terdapat biaya dengan besaran
                            tergantung pada tiap jenis Aset Kripto dan jaringan blockchain yang digunakan, yang mana
                            besaran biaya tersebut akan diberitahukan oleh Perusahaan melalui Platform sebelum Pelanggan
                            mengotorisasi transaksi.
                        </li>
                        <li>
                            5.5. Perusahaan dapat mengenakan biaya lainnya sehubungan dengan layanan yang diberikan
                            melalui Platform, yang mana biaya tersebut akan diberitahukan oleh Perusahaan sebelum
                            Pengguna mengotorisasi transaksi.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Batas Penarikan</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            6.1. Pelanggan dengan ini menyatakan setuju untuk mematuhi batas penarikan baik terhadap
                            Aset Kripto maupun uang yang berlaku terhadap Akun Pelanggan dan Perusahaan yang dalam hal
                            ini menerapkan prinsip Anti Pencucian Uang (Anti Money Laundering) sesuai dengan regulasi
                            Pemerintah Republik Indonesia diberi kuasa serta hak untuk tidak melakukan proses terhadap
                            transaksi yang telah melebihi batas penarikan harian.
                        </li>
                        <li>
                            6.2. Batas penarikan maksimal harian uang fiat adalah sebesar Rp250.000.000,- (dua ratus
                            lima puluh juta Rupiah).
                        </li>
                        <li>
                            6.3. Batas penarikan di-reset ulang atau kembali pada angka 0 (nol) setiap pukul 00.00 Waktu
                            Indonesia Barat.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Pajak</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            7.1. Pelanggan setuju bahwa atas transaksi Aset Kripto termasuk Pajak Pertambahan Nilai
                            (PPN) sesuai dengan peraturan perpajakan yang berlaku di Indonesia. .
                        </li>
                        <li>
                            7.2. Bilamana Perusahaan menyimpulkan bahwa atas transaksi Aset Kripto merupakan objek
                            pemotongan pajak penghasilan, Perusahaan diperkenankan melakukan pemotongan pajak
                            penghasilan dan menyetorkannya kepada otoritas pemerintah sesuai dengan ketentuan perpajakan
                            yang berlaku. .
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Penolakan, Penundaan Dan Pembatalan Transaksi</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            8.1. Perusahaan berhak untuk melakukan penundaan dan/atau penolakan transaksi apabila
                            Perusahaan mengetahui atau berdasarkan pertimbangan, menduga bahwa kegiatan penipuan
                            dan/atau aksi kejahatan telah dan/atau akan dilakukan.
                        </li>
                        <li>
                            8.2. Pelanggan setuju dan mengakui bahwa sepanjang diperbolehkan oleh ketentuan peraturan
                            perundang-undangan yang berlaku, Perusahaan wajib menolak untuk memproses segala transaksi.
                        </li>
                        <li>
                            8.3. Perusahaan berkewajiban untuk mematuhi hukum, peraturan dan permintaan lembaga
                            masyarakat dan pemerintah dalam yurisdiksi yang berbeda-beda yang berkaitan dengan
                            pencegahan atas pembiayaan untuk, antara lain, teroris dan pihak yang terkena sanksi. Hal
                            ini dapat menyebabkan Perusahaan untuk melakukan pencegatan dan menyelidiki segala perintah
                            pembayaran dan informasi atau komunikasi lainnya yang dikirimkan kepada atau oleh Pelanggan,
                            atau atas nama Pelanggan melalui sistem Perusahaan. Proses ini juga dapat melibatkan
                            Perusahaan untuk melakukan penyelidikan lebih lanjut untuk menentukan apakah nama yang
                            muncul dalam segala transaksi yang dilakukan atau akan dilakukan oleh Pelanggan melalui
                            Akunnya adalah nama teroris.
                        </li>
                        <li>
                            8.4. Perusahaan tidak akan bertanggung jawab untuk setiap kerugian (baik secara langsung dan
                            termasuk namun tidak terbatas pada kehilangan keuntungan atau bunga) atau kerugian yang
                            diderita oleh pihak mana pun yang timbul dari segala penundaan atau kelalaian dari
                            Perusahaan untuk memproses segala perintah pembayaran tersebut atau informasi atau
                            komunikasi lainnya atau untuk melaksanakan segala kewajiban lainnya, yang disebabkan secara
                            keseluruhan atau sebagian oleh segala tindakan yang diambil berdasarkan angka 8.3 ketentuan
                            Penolakan, Penundaan dan Pembatalan Transaksi ini.
                        </li>
                        <li>
                            8.5. Perusahaan berwenang untuk melakukan pemantauan atas Pelanggan dalam rangka pencegahan
                            kejahatan keuangan.
                        </li>
                        <li>
                            8.6. Pelanggan mengerti, memahami dan setuju bahwa terhadap setiap transaksi yang telah
                            dilakukan melalui Perusahaan bersifat final dan tidak dapat dilakukan pembatalan Pelanggan.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Keamanan Transaksi</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            9.1. Perusahaan menyediakan fitur pengamanan akun Pelanggan di Platform, khususnya Pelanggan
                            dapat menerapkan antara lain 2FA (Two Factor Authentication) SMS, 2FA Google Authenticator
                            dan/atau PIN. Pelanggan dapat mengaktifkan 2FA SMS atau 2FA Google Authenticator di
                            Platform. Kegunaan fitur keamanan 2FA ini agar akun, data, aset, serta riwayat transaksi
                            tidak diketahui oleh pihak yang tidak bertanggung jawab.
                        </li>
                        <li>
                            9.2. Untuk mengaktifkan fitur 2FA, Pelanggan dapat mengubah pengaturan dalam menu Keamanan
                            akun Pelanggan, yaitu memilih 2FA Otentikasi Google dan aktifkan. Pelanggan selanjutnya
                            mengikuti langkah-langkah aktivasi fitur 2FA pada ponsel Pelanggan sebagaimana
                            diinformasikan Perusahaan dalam Platform.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Pernyataan Dan Jaminan</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            10.1. Semua layanan dalam Platform Perusahaan tidak memberikan jaminan ataupun garansi apa
                            pun dan Perusahaan tidak menjamin bahwa Platform Perusahaan akan selalu dapat diakses setiap
                            waktu dikarenakan adanya gangguan atau pemeliharaan sistem dan jaringan secara berkala, yang
                            akan diberitahukan oleh Perusahaan kepada Pelanggan dari waktu ke waktu melalui media yang
                            dimiliki dan/atau dikelola oleh Perusahaan dan/atau afiliasinya.
                        </li>
                        <li>
                            10.2. Bahwa dengan ini Pelanggan menyatakan dan menjamin menggunakan dana atau Aset Kripto
                            milik sendiri dan bukan dana atau Aset Kripto yang bersumber atau milik dari orang lain,
                            atau hasil tindak pidana, pencucian uang, pendanaan terorisme dan/atau senjata pemusnah
                            massal.
                        </li>
                        <li>
                            10.3. Bahwa dengan ini Pelanggan menyatakan dan menjamin tidak akan menggunakan fasilitas
                            Platform yang diperuntukkan untuk tindak pidana kejahatan, tindakan yang melanggar hukum,
                            tindakan yang melawan hukum dan atau tindakan yang tidak diperkenan / dilarang oleh
                            peraturan perundang-undangan yang berlaku.
                        </li>
                        <li>
                            10.4. Bahwa Perusahaan telah memberikan keterangan dan penjelasan yang cukup mengenai
                            fasilitas Platform yang akan dipergunakan Pelanggan sesuai dengan Aturan ini dan Pelanggan
                            telah mengerti dan memahami serta bersedia untuk bertanggung jawab dan bersedia menanggung
                            segala bentuk konsekuensi / akibat yang mungkin timbul sehubungan dengan penggunaan layanan
                            dan fasilitas Platform termasuk manfaat, risiko, dan biaya-biaya yang melekat pada fasilitas
                            dan layanan di Perusahaan.
                        </li>
                        <li>
                            10.5. Bahwa Pelanggan dengan ini bertanggung jawab sepenuhnya dan setuju bahwa Perusahaan
                            tidak akan memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun kepada
                            Pelanggan atas segala bentuk kerugian, klaim, dan/atau tuntutan yang timbul atau mungkin
                            dialami sebagai akibat dari kelalaian, kesalahan atau kegagalan Pelanggan dalam menjalankan
                            transaksi.
                        </li>
                        <li>
                            10.6. Bahwa Pelanggan dengan ini menyatakan bahwa Pelanggan mengetahui dan menyetujui
                            Perusahaan dapat bekerjasama dengan pihak ketiga untuk menyediakan layanan (termasuk namun
                            tidak terbatas pada penyediaan layanan kustodian), baik melalui Platform atau kanal lainnya.
                        </li>
                        <li>
                            10.7. Bahwa Pelanggan dengan ini memberikan jaminan kepada Perusahaan bahwa Pelanggan
                            beserta dengan seluruh karyawannya dan atau pihak lain yang bekerja sama dengan Pelanggan
                            tidak akan memperbanyak dan/atau membuat, memberikan, menyewakan, menjual, memindahkan
                            mengalihkan, dan/atau mengalihfungsikan layanan Platform baik sebagian atau seluruhnya
                            kepada pihak lain dengan maksud, tujuan, dan alasan apapun, termasuk namun tidak terbatas
                            untuk kejahatan/penipuan/kecurangan. Bahwa apabila Pelanggan melanggar ketentuan tersebut,
                            maka Pelanggan dengan ini wajib bertanggung jawab atas segala kerugian, tuntutan, gugatan,
                            yang timbul akibat dari pelanggaran tersebut dan dengan ini Pelanggan setuju bahwa
                            Perusahaan tidak akan memberikan ganti rugi dan atau pertanggungjawaban dalam bentuk apapun
                            kepada Pelanggan atau pihak mana pun atas segala bentuk klaim, gugatan, dan/atau tuntutan
                            yang timbul akibat pelanggaran tersebut.
                        </li>
                        <li>
                            10.8. Bahwa dengan menyetujui persyaratan ini, Pelanggan menyatakan bahwa Pelanggan
                            berpartisipasi dalam jaringan berbasis blockchain sebagai bagian dari aktivitas profesional
                            Pelanggan dan terbiasa dengan token digital atau token kriptografi dan memperdagangkannya
                            serta risiko yang menyertainya dan perdagangannya.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Kewajiban dan Tanggung Jawab</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            11.1. Pelanggan dengan ini menyatakan dan menjamin akan menggunakan fasilitas di Platform
                            dengan baik dan penuh tanggung jawab serta tidak melakukan tindakan yang melanggar hukum
                            dan/atau melawan hukum serta segala bentuk peraturan perundangan-undangan yang berlaku.
                        </li>
                        <li>
                            11.2. Pelanggan setuju untuk menanggung setiap risiko, kerugian atau akibat yang diderita
                            Pelanggan yang disebabkan oleh:
                            <ul
                                style={{
                                    listStyle: 'lower-alpha'
                                }}
                            >
                                <li>
                                    kerusakan, keterlambatan, kehilangan atau kesalahan pengiriman perintah dan
                                    komunikasi, secara elektronik yang disebabkan oleh Pelanggan;
                                </li>
                                <li>
                                    pemberitahuan penggunaan layanan Platform yang dikirim kepada Pelanggan diterima
                                    atau dibaca atau disalahgunakan oleh pihak yang tidak berwenang atas Akun Pelanggan;
                                    dan
                                </li>
                                <li>
                                    Password / kata sandi Akun Pelanggan diketahui oleh orang/pihak lain atas kesalahan
                                    Pelanggan.
                                </li>
                            </ul>
                        </li>
                        <li>
                            11.3. Sepanjang diizinkan oleh hukum yang berlaku, Perusahaan (termasuk afiliasi, direktur,
                            karyawan dan agen) tidak bertanggung jawab, dan Pengguna setuju untuk tidak meminta
                            pertanggungjawaban Perusahaan, atas kerusakan atau kerugian (termasuk tetapi tidak terbatas
                            pada kehilangan uang, reputasi, keuntungan, atau kerugian tidak berwujud lainnya) yang
                            secara langsung atau tidak langsung disebabkan oleh penggunaan oleh Pengguna atas layanan
                            yang disediakan oleh Perusahaan.
                        </li>
                        <li>
                            11.4. Dalam melakukan transaksi menggunakan Platform Perusahaan, Pelanggan mengerti dan
                            menyetujui bahwa terdapat sanksi-sanksi tertentu yang dikenakan oleh kementerian/lembaga
                            yang berwenang.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Pengkinian Data</strong>
                    <br />
                    Perusahaan melakukan pengkinian data Pelanggan secara berlaku dengan tujuan:
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            a. Menganalisis dan menentukan risiko bahwa aktivitas Pelanggan, untuk jangka waktu sejak
                            pemeriksaan terakhir, umumnya dianggap sesuai dengan profil Pelanggan;
                        </li>
                        <li>
                            b. Memastikan bahwa penjelasan-penjelasan dicari dan/atau informasi lebih lanjut diperoleh
                            apabila muncul suatu transaksi atau aktivitas yang tidak sesuai/tidak wajar; dan
                        </li>
                        <li>c. Memastikan profil terkini Pelanggan.</li>
                    </ul>
                </li>
                <li>
                    <strong>Keadaan Memaksa</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            13.1. Perusahaan dapat melakukan penghentian perdagangan secara otomatis berdasarkan urutan
                            harga yang telah ditentukan oleh Pelanggan. Perusahaan dapat menghentikan perdagangan atas
                            wewenangnya sendiri, dengan tujuan untuk menjaga integritas pasar, termasuk jika terjadi
                            peristiwa atau keadaan yang terjadi di luar kekuasaan tahu kendali Perusahaan, meliputi
                            namun tidak terbatas pada:
                            <ul
                                style={{
                                    listStyle: 'lower-alpha'
                                }}
                            >
                                <li>Gangguan teknis dan pemutus arus listrik;</li>
                                <li>
                                    Perusahaan menjalakan perintah atau melakukan perbuatan yang diwajibkan oleh
                                    peraturan perundang-undangan; dan/atau
                                </li>
                                <li>
                                    Bencana alam, pemogokan, perang, revolusi, kerusuhan, pemberontakan, huru-hara,
                                    banjir, kebakaran, gempa bumi, ledakan, virus komputer, masalah-masalah internet,
                                    yang semuanya bukan dalam kendali wajar pihaknya;
                                </li>
                            </ul>
                        </li>
                        <li>
                            13.2. Selain itu, penghentian perdagangan dapat dilakukan jika terjadi kesalahan teknis yang
                            mencegah atau menurunkan kemampuan Pelanggan untuk menempatkan atau membatalkan Pesanan,
                            atau mencegah atau menurunkan akses ke API Platform atau Antarmuka Web atau memengaruhi
                            pengoperasian Order Book atau mesin pencocokan Pasar Platform.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>
                        Penerapan program Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme serta Proliferasi
                        Senjata Pemusnah Massal (APU-PPT)
                    </strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            14.1. Pelanggan mengakui bahwa Perusahaan tunduk kepada (i) Undang-Undang Nomor 8 Tahun 2010
                            tentang Pencegahan, Pemberantasan Tindak Pidana Pencucian Uang; (ii) Undang-Undang Nomor 9
                            Tahun 2013 tentang Pencegahan dan Pemberantasan Tindak Pidana Pendanaan Terorisme; (iii)
                            Peraturan BAPPEBTI Nomor 8 Tahun 2021 tentang Pedoman Penyelenggaraan Perdagangan Pasar
                            Fisik Aset Kripto di Bursa Berjangka, dan peraturan perundang-undangan yang berlaku di
                            Indonesia dan kebijakan internal Perusahaan. Untuk tujuan tersebut, Pelanggan dengan ini
                            setuju untuk memberikan segala informasi yang diminta oleh Perusahaan guna memenuhi
                            peraturan perundang-undangan tersebut termasuk namun tidak terbatas pada nama, alamat, usia,
                            jenis kelamin, keterangan identitas pribadi, pendapatan, pekerjaan, harta kekayaan, hutang,
                            sumber kekayaan, tujuan pembukaan Akun, tujuan investasi, segala rencana keuangan atau
                            informasi keuangan terkait lainnya dari Pelanggan. Jika diperlukan oleh Perusahaan,
                            Pelanggan juga setuju untuk menyediakan data terbaru tentang informasi tersebut kepada
                            Perusahaan.
                        </li>
                        <li>
                            14.2. Bahwa Perusahaan mematuhi ketentuan anti pencucian uang, melawan pendanaan terorisme
                            dan mengetahui kebijakan kepatuhan Pelanggan (“Kebijakan APU-PPT”). Berdasarkan kebijakan
                            tersebut, Perusahaan dapat atas kebijakannya sendiri, memerlukan verifikasi identitas dan
                            melalui prosedur penyaringan lainnya sehubungan dengan Pelanggan atau transaksi yang terkait
                            dengan Akun Pelanggan di Platform. Pelanggan setuju dan bersedia untuk memberikan kepada
                            Pelanggan setiap dan semua informasi dan dokumen yang Pelanggan mungkin dari waktu ke waktu
                            minta atau perlukan untuk keperluan ketentuan ini atau sehubungan dengan Akun Pelanggan di
                            Platform (termasuk, namun tidak terbatas pada, nama, alamat, nomor telepon, alamat email,
                            tanggal lahir, nomor identifikasi yang dikeluarkan pemerintah, foto kartu identitas atau
                            dokumen yang dikeluarkan pemerintah atau bukti foto identitas Pelanggan lainnya, dan
                            informasi mengenai Akun Pelanggan di Platform). Perusahaan tidak akan memiliki kewajiban
                            atau tanggung jawab atas ketidakmampuan permanen atau sementara untuk mengakses atau
                            menggunakan Platform, produk dan layanan apa pun sebagai akibat dari verifikasi identitas
                            atau prosedur penyaringan lainnya.
                        </li>
                        <li>
                            14.3. Bahwa sesuai dengan Kebijakan APU-PPT, Perusahaan dapat atas pertimbangannya sendiri,
                            melakukan pemantauan berkelanjutan terhadap semua Akun Pelanggan. Jika ada pola perdagangan
                            yang luar biasa besar atau tidak biasa atau keadaan yang tidak dapat dijelaskan atau
                            mencurigakan ditemukan, Perusahaan dapat, atas kebijakannya sendiri, melakukan penangguhan
                            administratif atau membekukan Akun Pelanggan di Platform. Pelanggan setuju bahwa Perusahaan
                            tidak akan memiliki kewajiban atau tanggung jawab atas ketidakmampuan permanen atau
                            sementara untuk mengakses atau menggunakan Platform, produk dan layanan apa pun yang
                            disebabkan oleh tindakan tersebut. Bahwa dalam hal ini apabila dikemudian hari ternyata
                            ditemukan bahwa segala bentuk data, dokumen, informasi, keterangan, pernyataan pribadi yang
                            diberikan oleh Calon Pelanggan kepada Perusahaan ternyata tidak benar dan dilakukan secara
                            melawan hukum dan/atau melanggar peraturan perundang-undangan yang berlaku, dan Perusahaan
                            mengetahui atau memperoleh informasi dari pihak manapun bahwa data, dokumen, informasi,
                            keterangan, pernyataan pribadi yang diberikan Calon Pelanggan ternyata tidak benar dan/atau
                            tidak sepenuhnya benar/palsu (pemalsuan data diri). Maka dengan ini Calon Pelanggan
                            menyatakan bersedia mempertanggungjawabkan perbuatan tersebut berdasarkan peraturan
                            perundang-undangan yang berlaku.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Layanan Pengaduan Pelanggan Aset Kripto</strong>
                    <br />
                    E-mail : <a href='mailto:customerservice@kriptomaksima.com'>customerservice@kriptomaksima.com</a>
                </li>
                <li>
                    <strong>Hukum yang Mengatur, Penyelesaian Perselisihan Pelanggan Aset Kripto, dan Bahasa</strong>
                    <ul className='flex list-outside !list-none flex-col gap-2'>
                        <li>
                            16.1. Anda menyetujui bahwa Perjanjian Pelanggan ini dan setiap klaim atau sengketa yang
                            timbul dari atau sehubungan dengan pokok permasalahan Perjanjian Pelanggan ini akan diatur
                            dan ditafsirkan sesuai dengan hukum Republik Indonesia.
                        </li>

                        <li>
                            16.2. Pelanggan dapat mengajukan aduan kepada Perusahaan melalui layanan pengaduan Pelanggan
                            yang dikelola Perusahaan.
                        </li>
                        <li>
                            16.3. Penyelesaian perselisihan Pelanggan terdiri atas:
                            <ul
                                style={{
                                    listStyle: 'lower-alpha'
                                }}
                            >
                                <li>Musyawarah untuk mufakat antara para pihak;</li>
                                <li>
                                    Jika tidak tercapai mufakat pada poin (a), maka penyelesaian perselisihan dilakukan
                                    melalui Bursa Aset Kripto; dan
                                </li>
                                <li>
                                    Jika tidak tercapai mufakat pada poin (b), maka penyelesaian perselisihan dilakukan
                                    melalui Badan Arbitrase Perdagangan Berjangka Komoditi (BAKTI).
                                </li>
                            </ul>
                        </li>
                        <li>
                            16.4. Perjanjian Pelanggan ini dibuat dalam bahasa Inggris dan bahasa Indonesia. Apabila
                            terjadi pertentangan antara versi bahasa Inggris dan versi bahasa Indonesia dari Perjanjian
                            Pelanggan ini, maka versi bahasa Indonesia yang akan berlaku.
                        </li>
                    </ul>
                </li>
            </ul>

            <div className='flex flex-row items-start gap-6 pt-6'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>Setuju</p>
                    </div>
                    <div>
                        <p>Tanggal Setuju</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-3'>
                        <div className='relative border p-3'>
                            Ya
                            {checked && <span className='absolute left-4 top-0 text-5xl'>✓</span>}
                        </div>
                        <div className='border p-3'>Tidak</div>
                    </div>
                    <div className='flex flex-col'>
                        <b>
                            <p>{dayjs().format('DD-MM-YYYY HH:mm WIB')}</p>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Form1;
