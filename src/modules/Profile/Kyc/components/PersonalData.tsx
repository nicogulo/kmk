/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-shadow */
import Form, { Field } from 'rc-field-form';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';
import {
    useAnnualIncome,
    useGender,
    useOccupation,
    usePurposeOfAccountOpening,
    useSourceOfFund
} from '@/hooks/useMasterData';
import { useGetDocuments } from '@/hooks/useUpload';

import Button from '@/components/Button';
import Icons from '@/components/Icon';
import { When } from '@/components/If';
import Input from '@/components/Input';
import SelectSearch from '@/components/SelectSearch';

export interface PersonalDataProps {
    full_name: string;
    middle_name?: string;
    last_name?: string;
    date_of_birth: string;
    gender: string;
    place_of_birth: string;
    citizenship: string;
    identity_card: string;
    npwp?: string;
    occupation?: string;
    average_yearly_income?: string;
    purpose_of_account_opening?: string;
    occupation_other?: string;
    source_of_fund?: string;
    source_of_fund_other?: string;
    mother_name?: string;
}
interface PersonalDataForm {
    full_name: string;
    middle_name?: string;
    last_name?: string;
    gender: string;
    day: string;
    month: string;
    year: string;
    place_of_birth: string;
    country: string;
    identity_card: string;
    npwp?: string;
    occupation?: string;
    average_yearly_income?: string;
    purpose_of_account_opening?: string;
    occupation_other?: string;
    source_of_fund?: string;
    source_of_fund_other?: string;
    mother_name?: string;
}
interface Props {
    onBack: () => void;
    data: PersonalDataProps | null;
    onNext: (values: PersonalDataProps) => void;
}

const PersonalData: React.FC<Props> = ({ data, onBack, onNext }) => {
    const [form] = Form.useForm();
    const isMobile = useMediaQuery({ maxWidth: 1279 });

    const { occupation } = useOccupation();
    const { sourceOfFund } = useSourceOfFund();
    const { annualIncome } = useAnnualIncome();
    const { purposeOfAccountOpening } = usePurposeOfAccountOpening();
    const { getDocuments, documents } = useGetDocuments();
    const { gender } = useGender();

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

    const otherSourceFund = form.getFieldValue('source_of_fund') === 'Lainnya';

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
        const sourceFundOther = values.source_of_fund_other || '';
        if (otherOccupation) {
            onNext({
                occupation: values.occupation === 'Lainnya' ? occupationOther : values.occupation,
                occupation_other: values.occupation_other,
                full_name: values.full_name,
                middle_name: values.middle_name,
                last_name: values.last_name,
                gender: values.gender,
                date_of_birth: dob,
                place_of_birth: values.place_of_birth,
                citizenship: values.country || 'Indonesia',
                identity_card: values.identity_card,
                npwp: values.npwp,
                source_of_fund: values.source_of_fund === 'Lainnya' ? sourceFundOther : values.source_of_fund,
                source_of_fund_other: values.source_of_fund_other,
                mother_name: values.mother_name
            });
        } else {
            onNext({
                full_name: values.full_name,
                middle_name: values.middle_name,
                last_name: values.last_name,
                gender: values.gender || (defaultGenderName as string),
                date_of_birth: dob,
                place_of_birth: values.place_of_birth,
                citizenship: values.country || 'Indonesia',
                identity_card: values.identity_card,
                npwp: values.npwp,
                occupation: values.occupation === 'Lainnya' ? occupationOther : values.occupation,
                average_yearly_income: values.average_yearly_income,
                purpose_of_account_opening: values.purpose_of_account_opening,
                source_of_fund: values.source_of_fund === 'Lainnya' ? sourceFundOther : values.source_of_fund,
                source_of_fund_other: values.source_of_fund_other,
                mother_name: values.mother_name
            });
        }
    };

    useEffect(() => {
        if (data) {
            // selectOccupation.find((item) => item.label === data?.occupation)?.label || 'Lainnya';
            form.setFieldsValue({
                full_name: data.full_name,
                middle_name: data.middle_name,
                last_name: data.last_name,
                gender: data.gender,
                identity_card: data.identity_card,
                place_of_birth: data.place_of_birth,
                country: data.citizenship,
                npwp: data.npwp,
                occupation: (occupation.find((item: any) => item.label === data.occupation) as any)?.label || 'Lainnya',
                occupation_other: data.occupation_other,
                average_yearly_income: data.average_yearly_income,
                purpose_of_account_opening: data.purpose_of_account_opening,
                source_of_fund:
                    (sourceOfFund.find((item: any) => item.label === data.source_of_fund) as any)?.label || 'Lainnya',
                source_of_fund_other: data.source_of_fund,
                mother_name: data.mother_name
            });
        } else {
            form.setFieldsValue({
                full_name: documents?.metadata?.full_name,
                gender: defaultGenderName,
                identity_card: nik,
                day: date[0].day.name,
                month: date[0].month.name,
                year: date[0].year.name,
                place_of_birth: documents?.metadata?.place_of_birth
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, defaultGenderName, documents?.metadata?.full_name, form, fullName, nik]);

    useEffect(() => {
        getDocuments('ktp');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex flex-col items-center gap-6 '>
            <div className='flex flex-col items-start gap-6 xl:max-w-[465px]'>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl font-bold text-[#18181E]'>Silahkan Isi Data Diri Anda</p>
                    <p className='text-sm font-normal text-[#525D66]'>
                        Silahkan isi formulir ini tentang informasi pribadi anda dengan
                    </p>
                </div>

                <Form
                    form={form}
                    onFinish={handleSubmit}
                    className='relative flex w-full flex-col gap-6'
                    autoComplete='off'
                >
                    {(_, { getFieldError, getFieldValue }) => {
                        const errorNpwp = getFieldError('npwp')[0];

                        const disableSubmit = form.getFieldsError().some((item) => item.errors.length > 0);
                        const errorName = getFieldError('full_name')[0];
                        const errorIdentity = getFieldError('identity_card')[0];
                        const errorDay = getFieldError('day')[0];
                        const errorMonth = getFieldError('month')[0];
                        const errorYear = getFieldError('year')[0];
                        const errorOccupation = getFieldError('occupation')[0];
                        const errorOccupationOther = getFieldError('occupation_other')[0];
                        const errorAnnualIncome = getFieldError('average_yearly_income')[0];
                        const errorPurpose = getFieldError('purpose_of_account_opening')[0];
                        const errorSourceFund = getFieldError('source_of_fund')[0];
                        const errorPlaceOfBirth = getFieldError('place_of_birth')[0];
                        const errorMotherName = getFieldError('mother_name')[0];

                        const occupationValue =
                            getFieldValue('occupation') === 'Mahasiswa' ||
                            getFieldValue('occupation') === 'Ibu Rumah Tangga' ||
                            getFieldValue('occupation') === 'Lainnya';

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
                                    <div className='flex w-full flex-col gap-4 xl:flex-row'>
                                        <Field
                                            name='day'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Lengkapi tanggal lahir anda!'
                                                }
                                            ]}
                                            initialValue={date[0].day.name}
                                        >
                                            <SelectSearch
                                                items={Array.from({ length: 31 }, (_, i) => ({
                                                    name: (i + 1).toString()
                                                }))}
                                                label={isMobile ? 'Tanggal' : ''}
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
                                                className={classNames('xl:!w-[150px]', {
                                                    'border-[#C9353F]': errorDay
                                                })}
                                                classNameWrapper='xl:!w-[150px]'
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
                                            initialValue={date[0].month.name}
                                        >
                                            <SelectSearch
                                                items={Array.from({ length: 12 }, (_, i) => ({
                                                    name: (i + 1).toString()
                                                }))}
                                                label={isMobile ? 'Bulan' : ''}
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
                                                classNameWrapper='xl:!w-[150px]'
                                                className={classNames('xl:!w-[150px]', {
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
                                            initialValue={date[0].year.name}
                                        >
                                            <SelectSearch
                                                items={
                                                    Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => ({
                                                        name: (new Date().getFullYear() - i).toString()
                                                    })) || []
                                                }
                                                label={isMobile ? 'Tahun' : ''}
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
                                                classNameWrapper='xl:!w-[150px]'
                                                className={classNames('xl:!w-[150px]', {
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
                                </div>
                                <Field
                                    name='place_of_birth'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tempat lahir wajib diisi'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Tempat Lahir'
                                        name='place_of_birth'
                                        placeholder='Masukkan tempat lahir anda'
                                        error={errorPlaceOfBirth}
                                        required
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
                                    name='mother_name'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tolong masukkan nama ibu kandung!'
                                        }
                                    ]}
                                >
                                    <Input
                                        label='Nama Ibu Kandung'
                                        placeholder='Masukkan nama ibu kandung anda'
                                        name='mother_name'
                                        error={errorMotherName}
                                        required
                                    />
                                </Field>
                                <Field
                                    name='occupation'
                                    dependencies={['occupation_other']}
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
                                        items={occupation}
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
                                <div
                                    className={classNames(
                                        'flex w-full transform flex-col gap-6 transition-all duration-300 ease-in-out',
                                        {
                                            'pointer-events-none -mt-52 scale-90 opacity-0': occupationValue,
                                            'scale-100 opacity-100': !occupationValue
                                        }
                                    )}
                                >
                                    <Field
                                        name='average_yearly_income'
                                        rules={[{ required: true, message: 'Mohon isi pendapatan tahunan Anda!' }]}
                                    >
                                        <SelectSearch
                                            label='Pendapatan Tahunan'
                                            name='average_yearly_income'
                                            readOnly
                                            required
                                            items={annualIncome}
                                            selected={{
                                                name: form.getFieldValue('average_yearly_income')
                                            }}
                                            onChange={(value) => {
                                                form.setFieldsValue({ average_yearly_income: value.name });
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
                                        name='source_of_fund'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Tolong pilih sumber dana anda!'
                                            }
                                        ]}
                                    >
                                        <SelectSearch
                                            label='Sumber Dana'
                                            items={sourceOfFund}
                                            readOnly
                                            required
                                            selected={{
                                                name: form.getFieldValue('source_of_fund')
                                            }}
                                            onChange={(e) => {
                                                form.setFieldsValue({ source_of_fund: e.name });
                                            }}
                                            name='source_of_fund'
                                            className={classNames({
                                                'border-[#C9353F]': errorSourceFund
                                            })}
                                        />
                                    </Field>
                                    {errorSourceFund && (
                                        <span className='-mt-6 mr-[10px] flex flex-row gap-1 pt-2 text-xs text-[#C9353F]'>
                                            <Icons icon='Interuption' /> {errorSourceFund}
                                        </span>
                                    )}
                                    <When condition={otherSourceFund}>
                                        <Field
                                            name='source_of_fund_other'
                                            rules={[
                                                {
                                                    required: form.getFieldValue('source_of_fund') === 'Lainnya',
                                                    message: 'Sumber dana wajib diisi'
                                                }
                                            ]}
                                        >
                                            <Input
                                                size='sm'
                                                label='Sumber Dana Lainnya'
                                                name='source_of_fund_other'
                                                placeholder='Sumber Dana Lainnya'
                                                error={errorSourceFund}
                                                required
                                            />
                                        </Field>
                                    </When>
                                    <Field
                                        name='purpose_of_account_opening'
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
                                                name: form.getFieldValue('purpose_of_account_opening')
                                            }}
                                            onChange={(e) => {
                                                form.setFieldsValue({ purpose_of_account_opening: e.name });
                                            }}
                                            name='purpose_of_account_opening'
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
                                </div>

                                <div
                                    className={classNames('flex w-full flex-row justify-end gap-4', {
                                        // 'absolute bottom-0': occupationValue && isMobile
                                    })}
                                >
                                    <Button className='w-[120px]' variant='grayOutline' onClick={onBack}>
                                        Kembali
                                    </Button>
                                    <Button type='submit' className='w-[120px]' disabled={disableSubmit}>
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
