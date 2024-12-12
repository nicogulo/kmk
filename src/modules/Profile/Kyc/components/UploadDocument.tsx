import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import useUpload, { useGetDocuments } from '@/hooks/useUpload';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import { Else, If, Then } from '@/components/If';
import Loader from '@/components/Loader';
import { toast } from '@/components/Toast';

import CorrectKTP from '../images/correct-ktp.png';
import CorrectNpwp from '../images/correct-npwp.png';
import CorrectSelfie from '../images/correct-selfie.png';
import WrongKTP from '../images/wrong-ktp.png';
import WrongNpwp from '../images/wrong-npwp.png';
import WrongSelfie from '../images/wrong-selfie.png';

interface Props {
    setTab: (tab: number) => void;
}
interface RenderUploadDocumentProps {
    handleUpload: (e: any) => void;
}
const RenderUploadDocumentKtp = ({ handleUpload }: RenderUploadDocumentProps) => (
    <div className='w-full pt-2'>
        <label className='border-primary-300 flex h-[164px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-[#D0F0FA4D]'>
            <div className='text-center'>
                <Icons icon='Upload' width={24} height={24} color='#00AA13' />
                <p className='text-primary-300 text-sm font-bold'>Unggah KTP</p>
                <p className='text-xs font-normal text-[#525D66]'>
                    Klik untuk mengunggah atau seret dan lepas <br />
                    PNG, JPG or PDF (max. 5 MB)
                </p>
                <input
                    type='file'
                    className='hidden'
                    accept='image/*'
                    capture='user'
                    onChange={(e: any) => handleUpload(e)}
                />
            </div>
        </label>
    </div>
);

const UploadDocument: React.FC<Props> = ({ setTab }) => {
    const [ktpPreview, setKtpPreview] = useState<string>('');
    const [ktpFile, setKtpFile] = useState<File>();
    const [selfiePreview, setSelfiePreview] = useState('');
    const [selfieFile, setSelfieFile] = useState<File>();
    const [npwpPreview, setNpwpPreview] = useState('');
    const [npwpFile, setNpwpFile] = useState<File>();
    const [loadingUpload, setLoadingUpload] = useState(false);

    const [fileInputKey, setFileInputKey] = useState(Date.now());

    const [ktpPreviewUrl, setKtpPreviewUrl] = useState('');
    const [selfiePreviewUrl, setSelfiePreviewUrl] = useState('');
    const [npwpPreviewUrl, setNpwpPreviewUrl] = useState('');

    const router = useRouter();

    const { upload } = useUpload();
    const { loading: loadingDoc, documents, getDocuments } = useGetDocuments();
    const { user } = useUser();

    const handleUpload = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            toast.error(e);
        }
        toast.error(e);
        if (file && file.size > 5242880) {
            toast.error('Ukuran file tidak boleh melebihi 5MB.');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setKtpPreview((reader.result as string) ?? '');
            setKtpFile(file);
        };
        reader.readAsDataURL(file);
    };

    const handleChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > 5242880) {
                // 5MB in bytes
                toast.error('Ukuran file tidak boleh melebihi 5MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setKtpPreview(reader.result as string);
                setKtpFile(file);
                setKtpPreviewUrl('');
            };
            reader.readAsDataURL(file);
        } else {
            setKtpPreview('');
        }
    };
    const handleRemoveFile = () => {
        setKtpPreview('');
        setKtpPreviewUrl('');
        setKtpFile(undefined);

        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };
    const handleSelfieUpload = (e: any) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        if (file.size > 5242880) {
            // 5MB in bytes
            toast.error('Ukuran file tidak boleh melebihi 5MB.');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelfiePreview(reader.result as string);
            setSelfieFile(file);
        };
        reader.readAsDataURL(file);
    };

    const handleChangeSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > 5242880) {
                // 5MB in bytes
                toast.error('Ukuran file tidak boleh melebihi 5MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelfiePreview(reader.result as string);
                setSelfieFile(file);
                setSelfiePreviewUrl('');
            };
            reader.readAsDataURL(file);
        } else {
            setSelfiePreview('');
        }
    };

    const handleRemoveSelfie = () => {
        setSelfiePreview('');
        setSelfiePreviewUrl('');
        setSelfieFile(undefined);
        setFileInputKey(Date.now());
    };

    const handleUploadNpwp = (e: any) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        if (file.size > 5242880) {
            // 5MB in bytes
            toast.error('Ukuran file tidak boleh melebihi 5MB.');
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setNpwpPreview(reader.result as string);
            setNpwpFile(file);
        };
        reader.readAsDataURL(file);
    };

    const handleChangeNpwpUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > 5242880) {
                // 5MB in bytes
                toast.error('Ukuran file tidak boleh melebihi 5MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setNpwpPreview(reader.result as string);
                setNpwpFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setNpwpPreview('');
        }
    };
    const handleRemoveNpwp = () => {
        setNpwpPreview('');
        setNpwpFile(undefined);
    };

    const handleSubmit = async () => {
        const newUploads: Array<{ file: File | undefined; type: string }> = [];

        if (!ktpPreviewUrl || ktpPreview !== ktpPreviewUrl) {
            if (!ktpPreview) {
                toast.error('Silahkan unggah KTP');
                return;
            }
            newUploads.push({ file: ktpFile, type: 'ktp' });
        }

        if (!selfiePreviewUrl || selfiePreview !== selfiePreviewUrl) {
            if (!selfiePreview) {
                toast.error('Silahkan unggah Selfie Holding KTP');
                return;
            }
            newUploads.push({ file: selfieFile, type: 'selfie' });
        }

        // Assuming npwpPreview, npwpPreviewUrl, and npwpFile are defined similarly to ktp and selfie
        if (!npwpPreviewUrl || npwpPreview !== npwpPreviewUrl) {
            if (!npwpPreview) {
                toast.error('Silahkan unggah NPWP');
                return;
            }
            newUploads.push({ file: npwpFile, type: 'npwp' });
        }

        if (newUploads.length === 0) {
            toast.success('Tidak ada file yang diunggah.');
            setTab(1);
            return;
        }

        setLoadingUpload(true); // Set loading to true before starting the upload

        try {
            const uploadResults = await Promise.all(
                newUploads.map(async (item) =>
                    upload({
                        file: item.file,
                        type: item.type as 'ktp' | 'selfie' | 'npwp'
                    })
                )
            );

            let allUploadsSuccessful = true;
            uploadResults.forEach((result) => {
                if (result && result.url) {
                    const { type, url } = result;
                    switch (type) {
                        case 'ktp':
                            toast.success('Unggah KTP berhasil');
                            setKtpPreviewUrl(url);
                            break;
                        case 'selfie':
                            toast.success('Unggah Selfie berhasil');
                            setSelfiePreviewUrl(url);
                            break;
                        case 'npwp':
                            toast.success('Unggah NPWP berhasil');
                            setNpwpPreviewUrl(url);
                            break;
                        default:
                            allUploadsSuccessful = false;
                    }
                } else {
                    allUploadsSuccessful = false;
                }
            });

            if (allUploadsSuccessful) {
                setTab(1);
            } else {
                toast.error('Gagal mengunggah file. Silahkan coba lagi.');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan saat mengunggah file. Silahkan coba lagi.');
        } finally {
            setLoadingUpload(false); // Set loading to false after the upload process is complete
        }
    };

    useEffect(() => {
        getDocuments('ktp');
        getDocuments('selfie');
        getDocuments('npwp');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if (documents?.type === 'ktp') {
            setKtpPreviewUrl(documents?.url as string);
            setKtpPreview(documents?.url as string);
        }
        if (documents?.type === 'selfie') {
            setSelfiePreviewUrl(documents?.url as string);
            setSelfiePreview(documents?.url as string);
        }

        if (documents?.type === 'npwp') {
            setNpwpPreviewUrl(documents?.url as string);
            setNpwpPreview(documents?.url as string);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [documents]);

    return (
        <div className='flex flex-col items-center gap-6 '>
            <div className='flex w-full flex-col items-start gap-6 xl:max-w-[465px]'>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold text-[#18181E]'>Unggah Dokumen untuk Verifikasi</p>

                    <p className='text-sm font-normal text-[#525D66]'>
                        Tolong unggah dokumen-dokumen berikut dengan benar.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold text-[#121416]'>Unggah KTP</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-6'>
                            <div className='w-full'>
                                <Image src={CorrectKTP} alt='Correct KTP' width={212} height={148} unoptimized />
                            </div>
                            <div className='w-full'>
                                <Image src={WrongKTP} alt='Wrong KTP' width={212} height={148} unoptimized />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 rounded-lg bg-[#F2F6FA] p-4'>
                            <p className='text-xs font-normal uppercase text-[#758089]'>Panduan Foto KTP</p>
                            <ul className='ml-6 list-disc text-sm font-normal text-[#525D66]'>
                                <li>Unggah foto KTP Anda yang masih berlaku.</li>
                                <li>Foto KTP harus jelas, tidak buram, dan tidak memantulkan cahaya.</li>
                                <li>Foto KTP harus berada dalam bingkai yang disediakan.</li>
                            </ul>
                        </div>
                        <If condition={loadingDoc}>
                            <Then>
                                <div className='flex h-40 items-center justify-center'>
                                    <Loader type='Oval' />
                                </div>
                            </Then>
                            <Else>
                                {ktpPreviewUrl || ktpPreview ? (
                                    <div className='mt-4 flex flex-row gap-4'>
                                        <div className='w-full'>
                                            <Image
                                                src={ktpPreviewUrl || ktpPreview}
                                                alt='Preview KTP'
                                                width={216}
                                                height={164}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='flex w-full flex-col items-center gap-2'>
                                            <label className='w-full cursor-pointer'>
                                                <div className='text-center'>
                                                    <div className='flex h-10 w-full items-center justify-center rounded border border-[#08192B1A]'>
                                                        Ubah
                                                    </div>
                                                    <input
                                                        type='file'
                                                        className='hidden'
                                                        onChange={(e: any) => handleChangeFileUpload(e)}
                                                    />
                                                </div>
                                            </label>
                                            <Button
                                                variant='grayOutline'
                                                block
                                                className='!gap-1 !border-none !text-[#DB2430]'
                                                onClick={handleRemoveFile}
                                            >
                                                <Icons icon='Trash' width={16} height={16} /> Hapus
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <RenderUploadDocumentKtp handleUpload={handleUpload} />
                                )}
                            </Else>
                        </If>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold text-[#121416]'>Unggah Foto Selfie Anda dengan Memegang KTP</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex  flex-row justify-center gap-10'>
                            <Image src={CorrectSelfie} alt='Correct KTP' width={124} height={196} unoptimized />
                            <Image src={WrongSelfie} alt='Wrong KTP' width={124} height={196} unoptimized />
                        </div>
                        <div className='flex flex-col gap-2 rounded-lg bg-[#F2F6FA] p-4'>
                            <p className='text-xs font-normal uppercase text-[#758089]'>
                                Panduan Foto Selfie Memegang KTP
                            </p>
                            <ul className='ml-6 list-disc text-sm font-normal text-[#525D66]'>
                                <li>Tolong kenakan pakaian yang rapi dan sopan saat mengambil foto.</li>
                                <li>Unggah foto selfie Anda dengan memegang KTP.</li>
                                <li>
                                    Foto selfie dan informasi pada KTP harus jelas, tidak buram, tidak terpotong, dan
                                    tidak memantulkan cahaya.
                                </li>
                                <li>Pastikan KTP adalah milik Anda dan bukan milik orang lain.</li>
                            </ul>
                        </div>
                    </div>
                    <If condition={loadingDoc}>
                        <Then>
                            <div className='flex h-40 items-center justify-center'>
                                <Loader type='Oval' />
                            </div>
                        </Then>
                        <Else>
                            {selfiePreviewUrl || selfiePreview ? (
                                <div className='mt-4 flex flex-row gap-4'>
                                    <div className='w-full'>
                                        <Image
                                            src={selfiePreviewUrl || selfiePreview}
                                            alt='Selfie Preview'
                                            width={216}
                                            height={164}
                                            unoptimized
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center gap-2'>
                                        <label className='w-full cursor-pointer'>
                                            <div className='text-center'>
                                                <div className='flex h-10 w-full items-center justify-center rounded border border-[#08192B1A]'>
                                                    Ubah
                                                </div>
                                                <input
                                                    type='file'
                                                    className='hidden'
                                                    onChange={(e: any) => handleChangeSelfieUpload(e)}
                                                />
                                            </div>
                                        </label>
                                        <Button
                                            variant='grayOutline'
                                            block
                                            className='!gap-1 !border-none !text-[#DB2430]'
                                            onClick={handleRemoveSelfie}
                                        >
                                            <Icons icon='Trash' width={16} height={16} /> Hapus
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full pt-2'>
                                    <label className='border-primary-300 flex h-[164px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-[#D0F0FA4D]'>
                                        <div className='text-center'>
                                            <Icons icon='Upload' width={24} height={24} color='#00AA13' />
                                            <p className='text-primary-300 text-sm font-bold'>
                                                Upload Selfie Holding KTP
                                            </p>
                                            <p className='text-xs font-normal text-[#525D66]'>
                                                Klik untuk mengunggah atau seret dan lepas <br />
                                                PNG, JPG or PDF (max. 5 MB)
                                            </p>
                                            <input
                                                key={fileInputKey}
                                                type='file'
                                                className='hidden'
                                                onChange={handleSelfieUpload}
                                            />
                                        </div>
                                    </label>
                                </div>
                            )}
                        </Else>
                    </If>
                </div>
                {/* NPWP SECTION */}

                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-bold text-[#121416]'>Unggah NPWP</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col justify-center gap-10 xl:flex-row'>
                            <Image src={CorrectNpwp} alt='Correct NPWP' width={212} height={132} unoptimized />

                            <Image src={WrongNpwp} alt='Wrong NPWP' width={212} height={132} unoptimized />
                        </div>
                        <div className='flex flex-col gap-2 rounded-lg bg-[#F2F6FA] p-4'>
                            <p className='text-xs font-normal uppercase text-[#758089]'>
                                Panduan Foto NPWP (Nomor Pokok Wajib Pajak)
                            </p>
                            <ul className='ml-6 list-disc text-sm font-normal text-[#525D66]'>
                                <li>Unggah foto NPWP Anda yang masih berlaku.</li>
                                <li>Foto NPWP harus jelas, tidak buram, dan tidak memantulkan cahaya.</li>
                                <li>Foto NPWP harus berada dalam bingkai yang disediakan.</li>
                            </ul>
                        </div>
                    </div>
                    <If condition={loadingDoc}>
                        <Then>
                            <div className='flex h-40 items-center justify-center'>
                                <Loader type='Oval' />
                            </div>
                        </Then>
                        <Else>
                            {npwpPreview ? (
                                <div className='mt-4 flex flex-row gap-4'>
                                    <div className='w-full'>
                                        <Image
                                            src={npwpPreview}
                                            alt='Selfie Preview'
                                            width={216}
                                            height={164}
                                            unoptimized
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center gap-2'>
                                        <label className='w-full cursor-pointer'>
                                            <div className='text-center'>
                                                <div className='flex h-10 w-full items-center justify-center rounded border border-[#08192B1A]'>
                                                    Ubah
                                                </div>
                                                <input
                                                    type='file'
                                                    // className='hidden'
                                                    onChange={(e: any) => handleChangeNpwpUpload(e)}
                                                />
                                            </div>
                                        </label>
                                        <Button
                                            variant='grayOutline'
                                            block
                                            className='!gap-1 !border-none !text-[#DB2430]'
                                            onClick={handleRemoveNpwp}
                                        >
                                            <Icons icon='Trash' width={16} height={16} /> Hapus
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full pt-2'>
                                    <label className='border-primary-300 flex h-[164px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-[#D0F0FA4D]'>
                                        <div className='text-center'>
                                            <Icons icon='Upload' width={24} height={24} color='#00AA13' />
                                            <p className='text-primary-300 text-sm font-bold'>Unggah NPWP</p>
                                            <p className='text-xs font-normal text-[#525D66]'>
                                                Klik untuk mengunggah atau seret dan lepas <br />
                                                PNG, JPG or PDF (max. 5 MB)
                                            </p>
                                            <input
                                                key={fileInputKey}
                                                type='file'
                                                // className='hidden'
                                                onChange={handleUploadNpwp}
                                            />
                                        </div>
                                    </label>
                                </div>
                            )}
                        </Else>
                    </If>
                </div>

                <div className='flex w-full flex-row justify-end gap-4 '>
                    <Button
                        className='w-[120px]'
                        variant='grayOutline'
                        onClick={() => router.push('/dashboard/profile/user')}
                    >
                        Kembali
                    </Button>
                    <Button
                        className='w-[120px]'
                        onClick={handleSubmit}
                        disabled={loadingUpload}
                        loading={loadingUpload}
                    >
                        Lanjut
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UploadDocument;
