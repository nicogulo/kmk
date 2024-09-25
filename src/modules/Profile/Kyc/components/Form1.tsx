/* eslint-disable react/no-unknown-property */
import Icons from '@/components/Icon';
import dayjs from 'dayjs';
import React from 'react';

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

            table,
            th,
            td {
                border: 1px solid black;
            }

            th,
            td {
                padding: 15px;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
            }

            p {
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
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minima perferendis rerum blanditiis sint
            distinctio sapiente corrupti veniam vero tenetur tempore natus deserunt nisi quo reiciendis, debitis qui
            maxime officia earum magni similique ad unde. Maxime maiores officiis consectetur, nam fugit voluptatem
            iste, magni sunt corporis atque fugiat vero minus aperiam nisi enim recusandae ducimus porro aliquid
            provident quaerat? Quaerat mollitia odit ut saepe vitae. Ipsum blanditiis excepturi beatae unde fuga quod,
            ea laboriosam iure nisi itaque quia consequuntur? Consequuntur illo incidunt repellat? Provident, vel. Nisi
            quas praesentium incidunt doloremque hic deserunt eveniet itaque ea in dolore velit voluptates autem fugit
            reprehenderit dolorum minima, fuga labore voluptatem. Cum earum quia qui odio illum ad, explicabo
            perspiciatis eum officiis reprehenderit deserunt laboriosam illo facilis dolor molestiae voluptatem incidunt
            temporibus accusamus eius quo fugiat. Ipsam sed, dicta, perferendis in cumque, architecto alias libero
            deserunt aliquam nulla autem error animi. Voluptates aspernatur adipisci debitis harum, fugit doloribus esse
            illo asperiores porro, natus sint. Quisquam rem eaque quis laudantium sint repudiandae praesentium
            blanditiis sed enim aut est tempore necessitatibus impedit suscipit, error qui illo dolorem perferendis
            sapiente quaerat quibusdam nam non inventore consequuntur. Possimus culpa omnis repudiandae et dolor ipsam
            vitae sunt, nostrum illum doloribus a reprehenderit excepturi ipsum dignissimos repellat ea quos beatae
            reiciendis accusamus. Exercitationem esse, rerum minima debitis dolores illo nulla. Totam iure suscipit
            omnis eius est, dolorum aut reprehenderit atque sed obcaecati dolor quisquam labore explicabo dolores,
            inventore corrupti facilis qui repellendus. Voluptas architecto pariatur quod temporibus nostrum similique
            perferendis doloribus in sit itaque eveniet alias nobis natus id, aperiam unde doloremque vitae dolorem a
            nulla est voluptate. Labore corporis voluptates vitae suscipit quo voluptatem, iste quas neque obcaecati
            nemo aliquid numquam placeat laboriosam quaerat error iure saepe. Ipsam ab quod esse tenetur quam accusamus
            molestias necessitatibus nemo veniam nostrum.
        </div>
        {/* <div>
            <p>
                <strong>Formulir PBK. CDDS. 01 </strong>
            </p>
            <p>&nbsp;</p>
            <p className='pb-3 !text-center'>
                <strong>PROFIL PERUSAHAAN PIALANG BERJANGKA</strong>
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                Nama : <strong>PT XTB INDONESIA BERJANGKA</strong>
                            </p>
                            <p>Alamat : Ruko Kopo Plaza Blok B No. 24, Jl. Peta (Lingkar Selatan) Suka Asih,&nbsp;</p>
                            <p>Bojongloa Kaler, Bandung - Jawa Barat 40231</p>
                            <p>No. Telepon : 022-20585060</p>
                            <p>Faksimili : 022-20582219</p>
                            <p>
                                E-mail : <a href='mailto:support@xtb.co.id'>support@xtb.co.id</a>
                            </p>
                            <p>
                                Home-page : <a href='http://www.xtb.co.id'>www.xtb.co.id</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Susunan Pengurus Perusahaan :</strong>
                            </p>
                            <p>
                                <strong>Dewan Direksi </strong>
                            </p>
                            <ol>
                                <li>
                                    Direktur Utama <strong>: Reyhan Adi Sulistiyo</strong>
                                </li>
                                <li>
                                    Direktur Kepatuhan : <strong>Salmun Baranna</strong>
                                </li>
                            </ol>
                            <p>
                                <strong>Dewan Komisaris </strong>
                            </p>
                            <ol>
                                <li>
                                    Komisaris Utama : <strong>Sabri Usman</strong>
                                </li>
                                <li>
                                    Komisaris : <strong>Theo Antares</strong>
                                </li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Susunan Pemegang Saham Perusahaan :&nbsp;</strong>
                            </p>
                            <ol>
                                <li>
                                    <strong>XTB Spolka Akcyjna (XTB S.A)</strong>
                                </li>
                                <li>
                                    <strong>Christian Wirajaya</strong>
                                </li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Nomor dan Tanggal Izin Usaha Dari Bappebti : </strong>
                            </p>
                            <p>
                                <strong>No. 003/BAPPEBTI/SI/08/2020 Tanggal : 27 Agustus 2020</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Nomor dan Tanggal Keanggotaan Bursa Berjangka :&nbsp;</strong>
                            </p>
                            <p>
                                <strong>No. 196/SPKB/ICDX/DIR/III/2020 Tanggal : 31 Maret 2020</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Nomor dan Tanggal Keanggotaan Lembaga Kliring Berjangka :&nbsp;</strong>
                            </p>
                            <p>
                                <strong>No. 177/SPKK/ICH/III/2020 Tanggal : 31 Maret 2020</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Nomor dan Tanggal Persetujuan Sebagai Peserta Sistem Perdagangan Alternatif :
                                </strong>
                            </p>
                            <p>
                                <strong>No. Tanggal :</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong> Nama Penyelenggara Sistem Perdagangan Alternatif</strong>
                                <strong> :</strong>
                            </p>
                            <p>
                                <strong>&nbsp;PT.&nbsp;</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Kontrak Berjangka Yang Diperdagangkan *) :</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Kontrak Multilateral Mata Uang (Forex)</strong>
                                </li>
                                <li>
                                    <strong>Kontrak Multilateral Olein</strong>
                                </li>
                                <li>
                                    <strong>Kontrak Multilateral Emas</strong>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Kontrak Derivatif Syariah Yang Diperdagangkan *):</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Kontrak Derivatif dalam Sistem Perdagangan Alternatif *):</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Kontrak Derivatif dalam Sistem Perdagangan Alternatif dengan volume minimum 0,1 (nol
                                    koma satu) lot Yang Ddiperdagangkan *):
                                </strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Biaya Secara Rinci yang Di Bebankan Pada Nasabah</strong> :
                            </p>
                            <ol>
                                <ol>
                                    <li>Komisi ( diuraikan dalam Trading Rules)</li>
                                    <li>Interest rate / swap ( mengacu pada Surat Edaran Bursa dan Kliring)</li>
                                </ol>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>Nomor atau alamat email jika terjadi keluhan :</strong>
                            </p>
                            <ol>
                                <li>Telepon 022-30300025 / 022-20582219</li>
                                <li>
                                    <a href='mailto:compliance@xtb.co.id'>compliance@xtb.co.id</a>
                                </li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Sarana Penyelesaian perselisihan yang dipergunakan apabila terjadi perselisihan :
                                </strong>
                            </p>
                            <p>Penyelesaian Perselisihan Mempergunakan Sarana Melalui Prosedur Sebagai Berikut.</p>
                            <ol>
                                <li>
                                    Nasabah membuat Akun Pengaduan pada Sistem Pengaduan Online Bappebti{' '}
                                    <a href='https://pengaduan.bappebti.go.id'>https://pengaduan.bappebti.go.id</a>
                                </li>
                                <li>
                                    Nasabah menyampaikan pengaduannya dengan mengisi ringkasan kasusnya pada Form
                                    Pengaduan Nasabah kemudian di upload melalui Sistem Pengaduan Online Bappebti{' '}
                                    <a href='https://pengaduan.bappebti.go.id'>https://pengaduan.bappebti.go.id</a> .
                                </li>
                                <li>
                                    Divisi Compliance berkoordinasi dengan departmen lainnya yang terkait akan melakukan
                                    verifikasi kasus atas dokumen-dokumen dan bukti-bukti pendukung lainnya dengan
                                    mengacu pada ketentuan yang berlaku di Perusahaan serta peraturan yang telah
                                    ditetapkan oleh instansi yang berwenang di bidang Perdagangan Berjangka Komoditi.
                                </li>
                                <li>
                                    Setelah diperoleh hasil verifikasi atas dokumen-dokumen dan bukti-bukti pendukung
                                    tersebut , Divisi Compliance akan menghubungi Nasabah serta pihak-pihak yang terkait
                                    pada kasus tersebut untuk melakukan musyawarah dengan tujuan mencapai mufakat
                                    maksimal 21 hari kerja setelah pengaduan diterima.
                                </li>
                                <li>
                                    Apabila perselisihan ternyata belum terselesaikan dalam musyawarah tersebut, maka
                                    selanjutnya penjelasannya akan memanfaatkan sarana penyelesaian yang tersedia di
                                    Bursa Berjangka (ICDX)
                                </li>
                                <li>
                                    Apabila Perselisihan ternyata belum terselesaikan di BBJ maka selanjutnya
                                    perselisihan akan di selesaikan melalui Badan Arbitrase Perdagangan Berjangka
                                    Komoditi (BAKTI).
                                </li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Nama-nama Wakil Pialang Berjangka yang Bekerja di Perusahaan Pialang Berjangka :
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Reyhan Adi Sulistiyo No. Izin : 0067/UPTP/SI/6/2021</strong>
                                </li>
                                <li>
                                    <strong>Hendrick Risqy Purnama No. Izin : 0082/UPTP/SI/6/2021</strong>
                                </li>
                                <li>
                                    <strong>Jessica Lhaurenszia No. Izin : 0013/UPTP/SI/1/2022</strong>
                                </li>
                                <li>
                                    <strong>Irvan Sutanto No. Izin : 0256/UPTP/SI/8/2022</strong>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Nama &ndash; Nama Wakil Pialang Berjangka yang secara khusus ditunjuk oleh Pialang
                                    Berjangka untuk melakukanVerifikasi dalam rangka penerimaan Nasabah elektronik on-
                                    Line :
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Hendrick Risqy Purnama No. Izin : 0082/UPTP/SI/6/2021</strong>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <strong>
                                    Nomor Rekening Terpisah (segregated Account) Perusahaan Pialang Berjangka :
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>
                                        No. Rekening Terpisah : 008 7575 911 IDR Bank BCA KCU Bandung, Asia Afrika
                                    </strong>
                                </li>
                                <li>
                                    <strong>No. Rekening Terpisah</strong>
                                    <strong>: 008 7575 229 USD Bank BCA KCU Bandung, Asia Afrika</strong>
                                </li>
                                <li>
                                    <strong>
                                        No. Rekening Terpisah : 101 5821 473 USD Bank CCB Indonesia KCP Rawamangun
                                    </strong>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className='pt-4 !text-center'>
                <strong>PERNYATAAN TELAH MEMBACA PROFIL PERUSAHAAN PIALANG BERJANGKA</strong>
            </p>
            <p>
                Dengan mengisi Kolom &ldquo;YA&rdquo; dibawah Ini, saya menyatakan bahwa saya telah membaca dan menerima
                informasi <strong>PROFIL PERUSAHAAN PIALANG BERJANGKA</strong>, mengerti dan memahami isinya.
            </p>
            <br />
            <div className='flex flex-row items-start gap-6'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p>Pernyataan menerima / Tidak</p>
                        <p>Agree Box</p>
                    </div>
                    <div>
                        <p>Pernyataan pada Tanggal</p>
                        <p>Current Date</p>
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

            <p>*) Isi sesuai dengan kontrak yang diperdagangkan (mini lot)</p>
        </div> */}
    </>
);

export default Form1;
