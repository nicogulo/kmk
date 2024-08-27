import { useEffect, useState } from 'react';

import { toast } from '@/components/Toast';

import { API_URL } from '@/constant/env';

import useAuth from './useAuth';

export enum ProfileStatus {
    VERIFIED = 1,
    PENDING = 0,
    UNVERIFIED = 2
}

interface Profile {
    uid: string;
    email: string;
    full_name: string;
    advance: number;
    basic: number;
    phone_number: string;
    phone_number_status: number;
    phone_number_uid: string;
    live_number: string;
}
export interface ProfileModel {
    userId: string;
    fullName: string;
    email: string;
    country: string;
    phoneNumber: string;
    phoneStatus: number;
    phoneNumberUid: string;
    dateOfBirth: string;
    basic: number;
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
        basic: profileData.basic,
        phoneStatus: profileData.phone_number_status,
        phoneNumberUid: profileData.phone_number_uid
    });

    const fetchProfile = async () => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
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
interface AccountDemoModel {
    accounts: Account[];
    total: number;
    offset: number;
    limit: number;
}

export const useAccountDemo = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<AccountDemoModel>();
    const [dataLive, setDataLive] = useState<AccountDemoModel>();
    const { auth } = useAuth();

    const fetchAccountDemo = async () => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/account/demo`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const responseJson = await response.json();

            if (!responseJson) throw new Error('Failed to fetch account demo');
            setData(responseJson);
        } catch (error) {
            console.error('Failed to fetch account demo', error);
        } finally {
            setLoading(false);
        }
    };
    const fetchAccountLive = async () => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/account/live`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const responseJson = await response.json();

            if (!responseJson) throw new Error('Failed to fetch account live');
            setDataLive(responseJson);
        } catch (error) {
            console.error('Failed to fetch account live', error);
        } finally {
            setLoading(false);
        }
    };

    const createAccountDemo = async (amount: number) => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/account/demo`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount })
            });
            const responseJson = await response.json();

            if (!responseJson) throw new Error('Failed to create account demo');
            if (responseJson.code === 200004001) {
                toast.error(responseJson.message);
                throw new Error(responseJson.message);
            }
            if (responseJson.code === 200) {
                toast.success('Account demo created successfully');
            }
        } catch (error) {
            console.error('Failed to create account demo', error);
        } finally {
            setLoading(false);
        }
    };

    const createAccountLive = async () => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/account/live`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const responseJson = await response.json();

            if (!responseJson) throw new Error('Failed to create account live');
            if (responseJson.code === 200004001) {
                toast.error(responseJson.message);
                throw new Error(responseJson.message);
            }
            if (responseJson.code === 200) {
                toast.success('Account live created successfully');
            }
        } catch (error) {
            console.error('Failed to create account live', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAccountDemo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLoggedIn, auth.token]);

    useEffect(() => {
        fetchAccountLive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLoggedIn, auth.token]);

    return {
        loading,
        accountDemo: data,
        accountLive: dataLive,
        createAccountDemo,
        createAccountLive,
        fetchAccountDemo,
        fetchAccountLive
    };
};

export default useProfile;
