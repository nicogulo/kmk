import { useEffect, useState } from 'react';

import { API_URL } from '@/constant/env';

import useAuth from './useAuth';

export enum ProfileStatus {
    VERIFIED = 'success',
    PENDING = 'pending',
    UNVERIFIED = 'no',
    REVOKE = 'revoke'
}

export enum PhoneNumberStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    DELETED = 'deleted'
}

interface Profile {
    uid: string;
    email: string;
    full_name: string;
    kyc: ProfileStatus;
    phone_number: string;
    phone_number_status: PhoneNumberStatus;
    phone_number_uid: string;
}
export interface ProfileModel {
    userId: string;
    fullName: string;
    email: string;
    country: string;
    phoneNumber: string;
    phoneStatus: PhoneNumberStatus;
    phoneNumberUid: string;
    dateOfBirth: string;
    kyc: ProfileStatus;
}

const useProfile = () => {
    const [profile, setProfile] = useState<ProfileModel>();
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const profileDataModel = (profileData: Profile): ProfileModel => ({
        userId: profileData.uid,
        fullName: profileData.full_name,
        email: profileData.email,
        country: '',
        phoneNumber: profileData.phone_number,
        dateOfBirth: '',
        kyc: profileData.kyc,
        phoneStatus: profileData.phone_number_status,
        phoneNumberUid: profileData.phone_number_uid
    });

    const fetchProfile = async () => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            // if (user) {
            //     const response = await api(`/auth/profile`, {
            //         method: 'GET',
            //         headers: {
            //             email: user?.email ?? ''
            //         }
            //     });
            //     const data: Profile = await response.json();
            //     if (!data) throw new Error('Failed to fetch profile');
            //     const profileModel = profileDataModel(data);
            //     setProfile(profileModel);
            // }

            const response = await fetch(`${API_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data: Profile = await response.json();
            if (!data) throw new Error('Failed to fetch profile');
            const profileModel = profileDataModel(data);
            setProfile(profileModel);
        } catch (error) {
            console.error('Failed to fetch profile', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLoggedIn, auth.token]);

    return { profile, loading, fetchProfile };
};

export interface Account {
    uid: string;
    platform: string;
    type: string;
    status: number;
    number: string;
    server: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    expiredAt: string;
    metadata: any;
}

export default useProfile;
