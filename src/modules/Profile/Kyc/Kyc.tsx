import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { Case, Default, Switch } from 'react-if';

import useKyc from '@/hooks/useKyc';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Tabs, { Tab } from '@/components/Tabs';
import { toast } from '@/components/Toast';

import { PersonalDataProps } from '@/modules/Profile/Kyc/components/PersonalData';

import VidaLogo from '../images/vida-logo.png';

const UploadDocument = dynamic(() => import('./components/UploadDocument'));
const PersonalData = dynamic(() => import('./components/PersonalData'));
const FacialRecognition = dynamic(() => import('./components/FacialRecognition'));
const TermsCondition = dynamic(() => import('./components/TermsCondition'));

const Kyc = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [personalData, setPersonalData] = useState<PersonalDataProps | null>(null);
    const { submitKyc } = useKyc();

    const menu = [
        {
            title: 'Unggah Dokumen',
            content: 'Upload Document'
        },
        {
            title: 'Data Pribadi',
            content: 'Personal Data'
        },
        {
            title: 'Facial Recognition',
            content: 'Facial Recognition'
        },
        {
            title: 'Persyaratan Persetujuan',
            content: 'Terms & Condition'
        }
    ];

    const submitPersonalData = (values: PersonalDataProps) => {
        setPersonalData(values);
        setActiveTab(2);
    };
    const submitFacialRecognition = () => {
        setActiveTab(3);
    };

    const submit = async () => {
        try {
            const payload = {
                personalData: personalData as PersonalDataProps
            };
            await submitKyc(payload);
        } catch (error) {
            toast.error('Failed to submit KYC');
        }
    };

    return (
        <>
            <Head>
                <title>Profile | Binaloka</title>
                <meta name='description' content='Login' />
                <link rel='icon' href='/logo.ico' />
            </Head>
            <div className='h-full max-h-screen w-full flex-grow overflow-hidden bg-[#F5F7FA] p-10'>
                <Container className='flex h-[calc(100vh-142px)] flex-row'>
                    <div className='mx-4 flex w-[240px] flex-col justify-between overflow-hidden  text-[#525D66]'>
                        <div className='flex flex-col gap-10'>
                            <p className='text-2xl font-bold text-[#18181E]'>Basic Verification</p>
                            <Tabs vertical>
                                {menu.map((item, index) => (
                                    <Tab
                                        vertical
                                        key={index}
                                        active={activeTab === index}
                                        textClassName={(active) => (active ? '!text-primary-300' : '')}
                                        onClick={() => {
                                            setActiveTab(index);
                                        }}
                                    >
                                        {item.title}
                                    </Tab>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    <div className='h-full w-full flex-grow overflow-auto rounded-2xl border border-[#08192B1A] bg-white p-8'>
                        <Switch>
                            <Case condition={activeTab === 1}>
                                <PersonalData
                                    data={personalData}
                                    onNext={submitPersonalData}
                                    onBack={() => {
                                        setActiveTab(0);
                                    }}
                                />
                            </Case>
                            <Case condition={activeTab === 2}>
                                <FacialRecognition
                                    onNext={submitFacialRecognition}
                                    onBack={() => {
                                        setActiveTab(1);
                                    }}
                                />
                            </Case>
                            <Case condition={activeTab === 3}>
                                <TermsCondition onBack={() => setActiveTab(2)} onNext={() => submit()} />
                            </Case>

                            <Default>
                                <UploadDocument
                                    setTab={() => {
                                        setActiveTab(1);
                                    }}
                                />
                            </Default>
                        </Switch>
                    </div>
                </Container>
            </div>
            <Modal
                title=''
                open={isOpen}
                onClose={() => setIsOpen(false)}
                width={631}
                wrapperClassName='max-w-none !max-h-[724px]'
                withClose={false}
                footer={
                    <div className='flex justify-end gap-4'>
                        <Button variant='primary' disabled={!checked} onClick={() => setIsOpen(false)}>
                            Agree
                        </Button>
                    </div>
                }
            >
                <div className='flex w-full flex-col gap-6'>
                    <div className='flex w-full flex-row justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className='h4 text-gray-800'>Terms and Condition</p>
                            <p className='xs text-[#637381]'>Effective as of April 30,2021</p>
                        </div>
                        <div className='h-10 w-[108px]'>
                            <Image src={VidaLogo} alt='Vida Logo' width={108} height={40} />
                        </div>
                    </div>
                    <p className='xs text-gray-800'>
                        Sehubungan dengan verifikasi identitas untuk tujuan Verifikasi Akun Binaloka (KYC), data pribadi
                        Anda berupa data demografi dan/atau biometrik akan diperiksa kesesuaiannya, oleh PT Verihubs
                        sebagai mitra kami, dengan data yang tercatat pada sistem instansi pemerintahan yang berhak
                        mengeluarkan identitas tersebut. Apabila data pribadi Anda terverifikasi kesesuaiannya, maka
                        Verihubs sebagai Penyelenggara Sertifikasi Elektronik tersertifikasi oleh Kementerian
                        Telekomunikasi dan Informasi, akan menerbitkan sertifikat elektronik sebagai bukti bahwa data
                        pribadi Anda telah diverifikasi dan sesuai dengan data yang tercatat pada sistem instansi yang
                        berhak mengeluarkan identitas tersebut.
                        <br />
                        <br />
                        Oleh karenanya, Anda menjamin keakuratan data pribadi yang Anda sediakan dan setuju atas
                        pemrosesan data pribadi Anda tersebut untuk tujuan penerbitan sertifikat elektronik serta
                        layanan lain yang melekat pada sertifikat elektronik yang dilakukan oleh Verihubs termasuk tanda
                        tangan digital tersebut.
                        <br />
                        <br />
                        Anda telah membaca, memahami, dan setuju untuk terikat pada syarat dan ketentuan layanan
                        Penyelenggara Sertifikasi Elektronik yang terdapat pada Perjanjian Kepemilikan Sertifikat
                        Elektronik (Subscriber Agreement), Kebijakan Privasi PSrE (CA Privacy Policy), serta Pernyataan
                        Penyelenggaraan Sertifikasi Elektronik (Certification Practice Statement) VIDA yang dapat
                        diakses melalui{' '}
                        <a href='https://repo.vida.id.' target='_blank'>
                            https://repo.vida.id.
                        </a>
                    </p>
                    <label
                        className='relative flex items-start space-x-2'
                        onClick={(e: any) => setChecked(e.target.checked)}
                    >
                        <Input
                            type='checkbox'
                            className='accent-primary-300 !h-4 !w-4 !p-0'
                            required
                            inputClassName='!text-primary-300'
                        />
                        <span className='xs text-gray-800'>
                            Saya dengan ini menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan
                            layanan Penyelenggara Sertifikasi Elektronik serta menjamin keakuratan data pribadi saya
                            untuk diproses lebih lanjut oleh Verihubs sebagai mitra dari Binaloka untuk keperluan
                            penerbitan dan pengelolaan Sertifikat Elektronik.
                        </span>
                    </label>
                </div>
            </Modal>
        </>
    );
};

export default Kyc;
