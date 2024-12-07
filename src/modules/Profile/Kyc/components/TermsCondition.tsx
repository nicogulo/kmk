import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import classNames from '@/lib/classnames';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Loader from '@/components/Loader';

import Form1 from '@/modules/Profile/Kyc/components/Form1';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

type RadioSelection = boolean | null;

const getRadioStyle = (isSelected: boolean | null) => ({
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    margin: '0 5px',
    border: isSelected === null ? '1px solid #08192B4D' : isSelected ? '6px solid #00AA13' : '1px solid #08192B4D'
});

const TermsCondition: React.FC<Props> = ({ onBack, onNext }) => {
    const [loading, setLoading] = useState(true);
    const [selection, setSelection] = useState<RadioSelection>(null);
    const [disabled, setDisabled] = useState(true);

    const handleBack = () => {
        onBack();
    };

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            onNext();
            setSelection(null);
            setDisabled(true);
        }, 100);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const wrapperPdf = document.getElementById('wrapper-pdf');

        if (wrapperPdf) {
            const handleScroll = () => {
                // Mengecek apakah posisi scroll berada di bagian bawah
                const isAtBottom = wrapperPdf.scrollTop + wrapperPdf.clientHeight >= wrapperPdf.scrollHeight - 1;
                if (isAtBottom) {
                    // setSelection(true) // Pilih radio button "Ya"
                    setDisabled(false); // Aktifkan tombol
                }
            };

            wrapperPdf.addEventListener('scroll', handleScroll);

            return () => {
                wrapperPdf.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    return (
        <div className='flex flex-col items-center gap-6 '>
            <div className='flex max-w-[680px] flex-col items-start gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold text-[#18181E]'>Tolong isi pernyataan persetujuan Anda</p>

                    <p className='text-sm font-normal text-[#525D66]'>
                        Silakan isi formulir ini untuk mengonfirmasi bahwa Anda memahami dan menyetujui pernyataan
                    </p>
                </div>
                <div
                    id='wrapper-pdf'
                    className='h-96 w-full overflow-x-hidden rounded-xl border border-[#08192B1A] p-4'
                >
                    {loading ? (
                        <div className='flex h-full items-center justify-center'>
                            <Loader type='Oval' />
                        </div>
                    ) : (
                        <Form1 checked={selection} />
                    )}
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-normal text-[#18181E]'>
                        Pernyataan menerima / Tidak <br /> Agree Box
                    </p>
                    <div className='flex flex-row gap-6'>
                        <label
                            className={classNames('flex cursor-pointer flex-row items-center gap-2', {
                                'cursor-not-allowed': disabled
                            })}
                        >
                            <input
                                type='radio'
                                value='yes'
                                checked={selection === true}
                                onChange={() => setSelection(true)}
                                className='appearance-none'
                                style={{ display: 'none' }}
                                disabled={disabled}
                            />
                            <span style={getRadioStyle(selection === true)} />
                            <span className='text-sm font-normal text-[##00AA13]'>Ya</span>
                        </label>

                        <label
                            className={classNames('flex cursor-pointer flex-row items-center gap-2', {
                                'cursor-not-allowed': disabled
                            })}
                        >
                            <input
                                type='radio'
                                value='no'
                                checked={selection === false}
                                onChange={() => setSelection(false)}
                                className='appearance-none'
                                style={{ display: 'none' }}
                                disabled={disabled}
                            />
                            <span style={getRadioStyle(selection === false)} />
                            <span className='text-sm font-normal text-[#121416]'>Tidak</span>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-normal text-[#18181E]'>
                        Pernyataan pada Tanggal <br />
                        Current Date
                    </p>
                    <div className='col flex items-center gap-2'>
                        <Input
                            type='text'
                            placeholder='Tanggal'
                            className='!border-[#E8E8E9] !bg-[#F5F7FA]'
                            inputClassName='!bg-[#F5F7FA]'
                            disabled
                            value={dayjs().format('DD')}
                        />
                        -
                        <Input
                            type='text'
                            placeholder='Bulan'
                            className='!border-[#E8E8E9] !bg-[#F5F7FA]'
                            inputClassName='!bg-[#F5F7FA]'
                            disabled
                            value={dayjs().format('MM')}
                        />
                        -
                        <Input
                            type='text'
                            placeholder='Tahun'
                            className='!border-[#E8E8E9] !bg-[#F5F7FA]'
                            inputClassName='!bg-[#F5F7FA]'
                            disabled
                            value={dayjs().format('YYYY')}
                        />
                        -
                        <Input
                            type='text'
                            placeholder='Jam'
                            className='!border-[#E8E8E9] !bg-[#F5F7FA]'
                            inputClassName='!bg-[#F5F7FA]'
                            disabled
                            value={dayjs().format('HH:mm WIB')}
                        />
                    </div>
                    <div className='flex w-full flex-row justify-end gap-4 '>
                        <Button className='w-[120px]' variant='grayOutline' onClick={handleBack}>
                            Kembali
                        </Button>
                        <Button
                            type='submit'
                            className='w-[120px]'
                            onClick={handleSubmit}
                            disabled={loading || !selection}
                            loading={loading}
                        >
                            Kirim
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
