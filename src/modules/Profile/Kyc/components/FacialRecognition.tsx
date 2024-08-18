import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Modal from '@/components/Modal';
import useUpload from '@/hooks/useUpload';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { When } from 'react-if';
import Webcam from 'react-webcam';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

const FacialRecognition: React.FC<Props> = ({ onBack, onNext }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState<string | null>(null);
    const webcamRef = React.useRef<Webcam>(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef?.current?.getScreenshot();
        if (imageSrc) {
            setImage(imageSrc);
        }
    }, [webcamRef]);

    const { upload, loading } = useUpload();
    const handleSubmit = () => {};

    const handleClose = () => {
        setIsOpen(false);
        setImage(null);
    };

    const videoConstraints = {
        aspectRatio: 0.6666666667
    };
    return (
        <>
            <div className='flex flex-col items-center gap-6 '>
                <div className='flex max-w-[480px] flex-col items-start gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-2xl font-bold text-[#18181E]'>Facial Recognition</p>

                        <p className='text-sm font-normal text-[#525D66]'>
                            Kami akan merekam wajah Anda untuk memverifikasi data biometrik dengan menganalisis dan
                            membandingkannya dengan data referensi.
                        </p>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <div className='h-[240px] w-[240px] bg-[#E8E8E8] ' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 rounded-lg bg-[#F2F6FA] p-4'>
                            <p className='text-xs font-normal uppercase text-[#758089]'>
                                Panduan untuk Pengenalan Wajah
                            </p>
                            <ul className='ml-6 list-disc text-sm font-normal text-[#525D66]'>
                                <li>Pastikan seluruh wajah Anda terlihat dan berada di tengah bingkai.</li>
                                <li>
                                    Pastikan wajah Anda diterangi dengan baik, hindari bayangan atau pencahayaan dari
                                    belakang.
                                </li>
                                <li>Jangan menggunakan topi, kacamata, atau apa pun yang menutupi wajah Anda.</li>
                                <li>Pertahankan ekspresi alami, hindari membuat ekspresi yang berlebihan.</li>
                                <li>Pegang kamera dengan stabil dan pada jarak sepanjang lengan.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-full flex-row justify-end gap-4 '>
                        <Button
                            className='w-[120px]'
                            variant='grayOutline'
                            onClick={() => router.push('/dashboard/profile/user')}
                        >
                            Kembali
                        </Button>
                        <Button onClick={() => setIsOpen(true)} disabled={loading} loading={loading}>
                            <Icons icon='Camera' width={20} height={20} /> Klik untuk memulai
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                title='Konfirmasi Tinjauan Gambar'
                closePosition='right'
                footer={
                    <>
                        <When condition={image}>
                            <div className='flex flex-row gap-4'>
                                <Button block onClick={() => setImage(null)} variant='grayOutline'>
                                    Ulangi
                                </Button>
                                <Button block onClick={handleSubmit}>
                                    Gunakan Foto
                                </Button>
                            </div>
                        </When>
                        <When condition={!image}>
                            <div className='flex flex-col items-center gap-1'>
                                <Button
                                    onClick={() => {
                                        capture();
                                    }}
                                    variant='gray'
                                    className='h-12 w-12 rounded-full'
                                >
                                    <Icons icon='Camera' width={24} height={24} color='#454F5B' />
                                </Button>
                                <p className='text-xs font-normal text-[#525D66]'>Ambil Foto</p>
                            </div>
                        </When>
                    </>
                }
            >
                <div className='flex h-[240px] w-full items-center justify-center'>
                    {/* <video ref={videoRef} autoPlay style={{ width: '100%', height: 240 }} /> */}
                    {image ? (
                        <Image alt='liveness' src={image} width={372} height={240} />
                    ) : (
                        <Webcam height={240} ref={webcamRef} />
                    )}
                </div>
            </Modal>
        </>
    );
};

export default FacialRecognition;
