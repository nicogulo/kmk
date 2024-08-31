/* eslint-disable @typescript-eslint/no-shadow */
import Form, { Field } from 'rc-field-form';
import React, { useEffect } from 'react';
import { When } from 'react-if';

import classNames from '@/lib/classnames';
import { useGetDocuments } from '@/hooks/useUpload';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import Input from '@/components/Input';
import Select from '@/components/Select';
import SelectSearch from '@/components/SelectSearch';

import { EMAIL_REGEX } from '@/constant/regex';

export interface PersonalDataProps {
    full_name: string;
    middle_name?: string;
    last_name?: string;
    date_of_birth: string;
    gender: string;
    country_of_birth: string;
    citizenship: string;
    identity_card: string;
    npwp?: string;
    occupation?: string;
    annual_income?: string;
    account_opening_purpose?: string;
    occupation_other?: string;
    email: string;
    phone: string;
}
interface PersonalDataForm {
    full_name: string;
    middle_name?: string;
    last_name?: string;
    gender: string;
    day: string;
    month: string;
    year: string;
    country_of_birth: string;
    country: string;
    identity_card: string;
    npwp?: string;
    occupation?: string;
    annual_income?: string;
    account_opening_purpose?: string;
    occupation_other?: string;
    email: string;
    phone: string;
}
interface Props {
    onBack: () => void;
    data: PersonalDataProps | null;
    onNext: (values: PersonalDataProps) => void;
}

const PersonalData: React.FC<Props> = ({ data, onBack, onNext }) => {
    const [form] = Form.useForm();

    // const { countries } = useCountry();
    const { getDocuments, documents } = useGetDocuments();
    const countries = [
        {
            key: 100,
            value: 100,
            name: 'Indonesia',
            phone_code: '62'
        }
    ];

    // const { gender } = useGender();
    const gender = [
        {
            id: 'laki-laki',
            key: 'laki-laki',
            name: 'Laki-Laki',
            label: 'Laki-Laki',
            value: 'Laki-Laki'
        },
        {
            id: 'perempuan',
            key: 'perempuan',
            name: 'Perempuan',
            label: 'Perempuan',
            value: 'Perempuan'
        }
    ];
    const annualIncome = [
        {
            id: '<-100-mio-idr',
            key: '<-100-mio-idr',
            name: '<100 Mio IDR',
            label: '<100 Mio IDR',
            value: '<100 Mio IDR'
        },
        {
            id: '100-250-mio-idr',
            key: '100-250-mio-idr',
            name: '100-250 Mio IDR',
            label: '100-250 Mio IDR',
            value: '100-250 Mio IDR'
        },
        {
            id: '250-500-mio-idr',
            key: '250-500-mio-idr',
            name: '250-500 Mio IDR',
            label: '250-500 Mio IDR',
            value: '250-500 Mio IDR'
        },
        {
            id: '>-500-mio-idr',
            key: '>-500-mio-idr',
            name: '>500 Mio IDR',
            label: '>500 Mio IDR',
            value: '>500 Mio IDR'
        }
    ];

    const purposeOfAccountOpening = [
        {
            id: 'hedging',
            key: 'hedging',
            name: 'Hedging',
            label: 'Hedging',
            value: 'Hedging'
        },
        {
            id: 'gain',
            key: 'gain',
            name: 'Gain',
            label: 'Gain',
            value: 'Gain'
        },
        {
            id: 'spekulasi',
            key: 'spekulasi',
            name: 'Spekulasi',
            label: 'Spekulasi',
            value: 'Spekulasi'
        },
        {
            id: 'lainnya',
            key: 'lainnya',
            name: 'Lainnya',
            label: 'Lainnya',
            value: 'Lainnya'
        }
    ];

    const defaultCountry = {
        name: 'Indonesia'
    };
    const genderData = documents?.metadata?.gender.toLowerCase();

    const nik = documents?.metadata?.nik;
    const fullName = documents?.metadata?.full_name;
    const defaultGenderItem = gender.find((item) => item.id === genderData);
    const defaultGenderName = defaultGenderItem?.name;
    const dobString = documents?.metadata?.date_of_birth || data?.date_of_birth;

    const otherOccupation =
        form.getFieldValue('occupation') === 'Ibu Rumah Tangga' ||
        form.getFieldValue('occupation') === 'Mahasiswa' ||
        form.getFieldValue('occupation') === 'Lainnya';

    const selectOccupation = [
        {
            id: 'profesional',
            key: 'profesional',
            name: 'Profesional',
            label: 'Profesional',
            value: 'Profesional'
        },
        {
            id: 'wirausaha',
            key: 'wirausaha',
            name: 'Wirausaha',
            label: 'Wirausaha',
            value: 'Wirausaha'
        },
        {
            id: 'mahasiswa',
            key: 'mahasiswa',
            name: 'Mahasiswa',
            label: 'Mahasiswa',
            value: 'Mahasiswa'
        },
        {
            id: 'pegawai-negeri',
            key: 'pegawai-negeri',
            name: 'Pegawai Negeri',
            label: 'Pegawai Negeri',
            value: 'Pegawai Negeri'
        },
        {
            id: 'ibu-rumah-tangga',
            key: 'ibu-rumah-tangga',
            name: 'Ibu Rumah Tangga',
            label: 'Ibu Rumah Tangga',
            value: 'Ibu Rumah Tangga'
        },
        {
            id: 'lainnya',
            key: 'lainnya',
            name: 'Lainnya',
            label: 'Lainnya',
            value: 'Lainnya'
        }
    ];

    const occupationLabel = selectOccupation.find((item) => item.label === data?.occupation)?.label || 'Lainnya';

    const date = [
        {
            day: {
                name: dobString?.split('-')[0]
            },
            month: {
                name: dobString?.split('-')[1]
            },
            year: {
                name: dobString?.split('-')[2]
            }
        }
    ];

    const handleSubmit = (values: PersonalDataForm) => {
        const dayValues = date[0].day.name;
        const monthValues = date[0].month.name;
        const yearValues = date[0].year.name;

        const dob = `${dayValues || values.day}-${monthValues || values.month}-${yearValues || values.year}`;
        const occupationOther = values.occupation_other || '';
        if (otherOccupation) {
            onNext({
                occupation: values.occupation === 'Lainnya' ? occupationOther : values.occupation,
                occupation_other: values.occupation_other,
                full_name: values.full_name,
                middle_name: values.middle_name,
                last_name: values.last_name,
                gender: values.gender,
                email: values.email,
                phone: values.phone,
                date_of_birth: dob,
                country_of_birth: values.country_of_birth || 'Indonesia',
                citizenship: values.country || 'Indonesia',
                identity_card: values.identity_card,
                npwp: values.npwp
            });
        } else {
            onNext({
                full_name: values.full_name,
                middle_name: values.middle_name,
                last_name: values.last_name,
                gender: values.gender || (defaultGenderName as string),
                date_of_birth: dob,
                country_of_birth: values.country_of_birth || 'Indonesia',
                citizenship: values.country || 'Indonesia',
                identity_card: values.identity_card,
                npwp: values.npwp,
                occupation: values.occupation === 'Lainnya' ? occupationOther : values.occupation,
                annual_income: values.annual_income,
                account_opening_purpose: values.account_opening_purpose,
                email: values.email,
                phone: values.phone
            });
        }
    };

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                full_name: data.full_name,
                middle_name: data.middle_name,
                last_name: data.last_name,
                gender: data.gender,
                identity_card: data.identity_card,
                country_of_birth: data.country_of_birth,
                country: data.citizenship,
                npwp: data.npwp,
                occupation: data.occupation,
                annual_income: data.annual_income,
                account_opening_purpose: data.account_opening_purpose,
                email: data.email,
                phone: data.phone
            });
        } else {
            form.setFieldsValue({
                full_name: documents?.metadata?.full_name,
                gender: defaultGenderName,
                identity_card: nik
            });
        }
    }, [data, defaultGenderName, documents?.metadata?.full_name, form, fullName, nik]);

    useEffect(() => {
        getDocuments('ktp');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex flex-col items-center gap-6 '>
            <div className='flex max-w-[465px] flex-col items-start gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold text-[#18181E]'>Silahkan Isi Data Diri Anda</p>
                    <p className='text-sm font-normal text-[#525D66]'>
                        Silahkan isi formulir ini tentang informasi pribadi anda dengan
                    </p>
                </div>

                <Form form={form} onFinish={handleSubmit} className='flex w-full flex-col gap-6' autoComplete='off'>
                    {(_, { getFieldError, getFieldValue }) => {
                        const errorNpwp = getFieldError('npwp')[0];

                        const disableSubmit = form.getFieldsError().some((item) => item.errors.length > 0);
                        const errorName = getFieldError('full_name')[0];
                        const errorIdentity = getFieldError('identity_card')[0];
                        const errorDay = getFieldError('day')[0];
                        const errorMonth = getFieldError('month')[0];
                        const errorYear = getFieldError('year')[0];
                        const errorPhone = getFieldError('phone')[0];
                        const errorEmail = getFieldError('email')[0];
                        const errorOccupation = getFieldError('occupation')[0];
                        const errorOccupationOther = getFieldError('occupation_other')[0];
                        const errorAnnualIncome = getFieldError('annual_income')[0];
                        const errorPurpose = getFieldError('account_opening_purpose')[0];

                        return (
                            <>
                                <Field
                                    name='identity_card'
                                    initialValue={nik}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lengkapi Nomor Identitas anda!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Nomor Identitas'
                                        mask={/^[0-9]\d{0,15}$/}
                                        placeholder='Masukkan nomor identitas anda'
                                        error={errorIdentity}
                                        required
                                    />
                                </Field>
                                <Field
                                    name='full_name'
                                    initialValue={documents?.metadata?.full_name}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lengkapi nama lengkap anda!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Nama Lengkap'
                                        placeholder='Masukkan nama lengkap anda'
                                        name='full_name'
                                        autoComplete='off'
                                        error={errorName}
                                        required
                                    />
                                </Field>
                                <div className='flex flex-col'>
                                    <p className='text-xs text-[#525D66]'>
                                        Tanggal Lahir <span className={classNames('text-xs text-[#C9353F]')}>*</span>
                                    </p>
                                    <div className='flex w-full flex-row gap-4'>
                                        <Field
                                            name='day'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Lengkapi tanggal lahir anda!'
                                                }
                                            ]}
                                            initialValue=''
                                        >
                                            <SelectSearch
                                                items={Array.from({ length: 31 }, (_, i) => ({
                                                    name: (i + 1).toString()
                                                }))}
                                                label=''
                                                type='number'
                                                readOnly
                                                selected={{
                                                    name: form.getFieldValue('day') || date[0].day.name
                                                }}
                                                onChange={(value) => {
                                                    form.setFieldsValue({
                                                        day: value.name
                                                    });
                                                }}
                                                name='day'
                                                className={classNames('!w-[150px]', {
                                                    'border-[#C9353F]': errorDay
                                                })}
                                                classNameWrapper='!w-[150px]'
                                            />
                                        </Field>

                                        <Field
                                            name='month'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Lengkapi bulan lahir anda!'
                                                }
                                            ]}
                                        >
                                            <SelectSearch
                                                items={Array.from({ length: 12 }, (_, i) => ({
                                                    name: (i + 1).toString()
                                                }))}
                                                label=''
                                                type='number'
                                                readOnly
                                                selected={{
                                                    name: form.getFieldValue('month') || date[0].month.name
                                                }}
                                                onChange={(value) => {
                                                    form.setFieldsValue({
                                                        month: value.name
                                                    });
                                                }}
                                                name='month'
                                                classNameWrapper='!w-[150px]'
                                                className={classNames('!w-[150px]', {
                                                    'border-[#C9353F]': errorMonth
                                                })}
                                            />
                                        </Field>
                                        <Field
                                            name='year'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Lengkapi tahun lahir anda!'
                                                }
                                            ]}
                                        >
                                            <SelectSearch
                                                items={
                                                    Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => ({
                                                        name: (new Date().getFullYear() - i).toString()
                                                    })) || []
                                                }
                                                label=''
                                                type='number'
                                                readOnly
                                                selected={{
                                                    name: form.getFieldValue('year') || date[0].year.name
                                                }}
                                                onChange={(value) => {
                                                    form.setFieldsValue({
                                                        year: value.name
                                                    });
                                                }}
                                                name='year'
                                                classNameWrapper='!w-[150px]'
                                                className={classNames('!w-[150px]', {
                                                    'border-[#C9353F]': errorYear
                                                })}
                                            />
                                        </Field>
                                    </div>
                                    {(errorDay || errorMonth || errorYear) && (
                                        <span className='mb-1 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                            <Icons icon='Interuption' /> {errorDay || errorMonth || errorYear}
                                        </span>
                                    )}
                                    <Field name='country_of_birth'>
                                        <Select
                                            items={countries}
                                            label='Negara Kelahiran'
                                            selected={{
                                                name: form.getFieldValue('country_of_birth') || defaultCountry.name
                                            }}
                                            setSelected={(value) => {
                                                form.setFieldsValue({
                                                    country_of_birth: value.name
                                                });
                                            }}
                                            name='country'
                                        />
                                    </Field>
                                </div>
                                <Field
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lengkapi email anda!'
                                        },
                                        {
                                            pattern: EMAIL_REGEX,
                                            message: 'Email tidak valid!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Email'
                                        placeholder='Masukkan email anda'
                                        name='email'
                                        autoComplete='off'
                                        error={errorEmail}
                                        required
                                    />
                                </Field>
                                <Field
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lengkapi nomor telepon anda!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Nomor Telepon'
                                        placeholder='Masukkan nomor telepon Anda'
                                        name='phone'
                                        mask={/^[0-9]*$/}
                                        required
                                        prefix='+62'
                                        error={errorPhone}
                                    />
                                </Field>
                                <Field
                                    name='npwp'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tolong masukkan NPWP anda!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Nomor NPWP'
                                        placeholder='Masukkan NPWP anda'
                                        name='npwp'
                                        mask={/^[0-9]*$/}
                                        error={errorNpwp}
                                        required
                                    />
                                </Field>
                                <Field
                                    name='occupation'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Pekerjaan wajib diisi'
                                        }
                                    ]}
                                >
                                    <SelectSearch
                                        label='Pekerjaan'
                                        name='occupation'
                                        items={selectOccupation}
                                        selected={{
                                            name: form.getFieldValue('occupation')
                                        }}
                                        onChange={(value) => {
                                            form.setFieldsValue({ occupation: value.name });
                                        }}
                                        className={classNames({
                                            'border-[#C9353F]': errorOccupation
                                        })}
                                        readOnly
                                        required
                                    />
                                </Field>
                                {errorOccupation && (
                                    <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                        <Icons icon='Interuption' /> {errorOccupation}
                                    </span>
                                )}
                                <When condition={form.getFieldValue('occupation') === 'Lainnya'}>
                                    <Field
                                        name='occupation_other'
                                        rules={[
                                            {
                                                required: form.getFieldValue('occupation') === 'Lainnya',
                                                message: 'Pekerjaan wajib diisi'
                                            }
                                        ]}
                                    >
                                        <Input
                                            size='sm'
                                            label='Pekerjaan Lainnya'
                                            name='occupation_other'
                                            placeholder='Pekerjaan Lainnya'
                                            error={errorOccupationOther}
                                            required
                                        />
                                    </Field>
                                </When>
                                <When condition={!otherOccupation}>
                                    <Field
                                        name='annual_income'
                                        rules={[{ required: true, message: 'Mohon isi pendapatan tahunan Anda!' }]}
                                    >
                                        <SelectSearch
                                            label='Pendapatan Tahunan'
                                            name='annual_income'
                                            readOnly
                                            required
                                            items={annualIncome}
                                            selected={{
                                                name: form.getFieldValue('annual_income')
                                            }}
                                            onChange={(value) => {
                                                form.setFieldsValue({ annual_income: value.name });
                                            }}
                                            className={classNames({
                                                'border-[#C9353F]': errorAnnualIncome
                                            })}
                                        />
                                    </Field>
                                    {errorAnnualIncome && (
                                        <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                            <Icons icon='Interuption' /> {errorAnnualIncome}
                                        </span>
                                    )}
                                    <Field
                                        name='account_opening_purpose'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Tolong pilih tujuan pembukaan akun!'
                                            }
                                        ]}
                                    >
                                        <SelectSearch
                                            label='Tujuan Pembukaan Akun'
                                            items={purposeOfAccountOpening}
                                            readOnly
                                            required
                                            selected={{
                                                name: form.getFieldValue('account_opening_purpose')
                                            }}
                                            onChange={(e) => {
                                                form.setFieldsValue({ account_opening_purpose: e.name });
                                            }}
                                            name='account_opening_purpose'
                                            className={classNames({
                                                'border-[#C9353F]': errorPurpose
                                            })}
                                        />
                                    </Field>
                                    {errorPurpose && (
                                        <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                            <Icons icon='Interuption' /> {errorPurpose}
                                        </span>
                                    )}
                                </When>

                                <div className='flex w-full flex-row justify-end gap-4 '>
                                    <Button className='w-[120px]' variant='grayOutline' onClick={onBack}>
                                        Kembali
                                    </Button>
                                    <Button
                                        type='submit'
                                        className='w-[120px]'
                                        disabled={disableSubmit}
                                        //  onClick={handleSubmit} disabled={loading} loading={loading}
                                    >
                                        Lanjut
                                    </Button>
                                </div>
                            </>
                        );
                    }}
                </Form>
            </div>
        </div>
    );
};

export default PersonalData;
