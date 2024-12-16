import { useEffect, useState } from 'react';

import api from '@/lib/api';
import useAuth from '@/hooks/useAuth';

import { toast } from '@/components/Toast';

interface VirtualAccount {
    uid: string;
    code: string;
    name: string;
    logo?: string;
    status: number;
}

// {
//     "code": "BRI",
//     "name": "Bank Rakyat Indonesia (BRI)",
//     "account_number": "132819999260253",
//     "account_name": "Backswitch",
//     "status": 0
// }

interface DetailVirtualAccount {
    code: string;
    name: string;
    account_number: string;
    account_name: string;
    status: number;
}

const useVirtualAccount = () => {
    const [virtualAccount, setVirtualAccount] = useState<VirtualAccount[]>([]);
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const fetchVirtualAccount = async () => {
        if (!auth.isLoggedIn) return; // If user is not loaded, do not proceed

        setLoading(true);
        try {
            const response = await api(`/wallet/deposit/virtual-account`, {
                method: 'GET'
            });
            const data = await response.json();

            if (!data) throw new Error('Data not found');
            setVirtualAccount(data);
        } catch (error) {
            toast.error('Data not found');
        }
        setLoading(false);
    };

    useEffect(() => {
        if (auth.isLoggedIn) {
            fetchVirtualAccount();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLoggedIn]);

    return {
        virtualAccount,
        fetchVirtualAccount,
        loading
    };
};
export const useDetailVirtualAccount = () => {
    const [virtualAccount, setVirtualAccount] = useState<DetailVirtualAccount | null>(null);
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const fetchDetailVirtualAccount = async (uid: string) => {
        if (!auth.isLoggedIn) return; // If user is not loaded, do not proceed

        setLoading(true);
        try {
            const response = await api(`/wallet/deposit/virtual-account/${uid}`, {
                method: 'GET'
            });
            const data = await response.json();
            console.log('hooks', data);

            if (!data) throw new Error('Data not found');
            setVirtualAccount(data);
        } catch (error) {
            setVirtualAccount(null);
        }
        setLoading(false);
    };

    return {
        virtualAccountDetail: virtualAccount,
        fetchDetailVirtualAccount,
        loading
    };
};

export default useVirtualAccount;
