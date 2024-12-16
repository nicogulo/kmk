import { useRouter } from 'next/router';

import api from '@/lib/api';

import { toast } from '@/components/Toast';

import { PersonalDataProps } from '@/modules/Profile/Kyc/components/PersonalData';

export type KycBasicArgs = {
    personalData: PersonalDataProps;
};

const convertToPayload = (args: KycBasicArgs): KycBasicPayload => ({
    full_name: args.personalData.full_name,
    gender: args.personalData.gender,
    date_of_birth: args.personalData.date_of_birth,
    place_of_birth: args.personalData.place_of_birth,
    identity_card: args.personalData.identity_card,
    npwp: args.personalData.npwp,
    occupation: args.personalData.occupation,
    average_yearly_income: args.personalData.average_yearly_income,
    source_of_fund: 'Salary',
    source_of_fund_other: args.personalData.source_of_fund_other,
    occupation_other: args.personalData.occupation_other,
    purpose_of_account_opening: args.personalData.purpose_of_account_opening,
    mother_name: args.personalData.mother_name
});

const useKyc = () => {
    const router = useRouter();

    const submitKyc = async (args: KycBasicArgs) => {
        const payload = convertToPayload(args);
        try {
            const response = await api(`/kyc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();

            if (data.code === 200003002) throw new Error(data.message);

            if (!data) throw new Error('Failed to submit KYC');
            if (data.message === 'success') {
                toast.success('KYC submitted successfully');
                router.push('/profile/kyc/success');
            }
            return data;
        } catch (error: any) {
            toast.error(error.message);
        }
        return null;
    };

    return { submitKyc };
};

export const useGetKyc = () => {
    const getKyc = async () => {
        try {
            const response = await api(`/kyc/basic`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            toast.error(error.message);
        }
        return null;
    };

    return { getKyc };
};

export default useKyc;
