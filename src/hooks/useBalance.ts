// balance

import { useEffect, useState } from 'react';

import api from '@/lib/api';
import useAuth from '@/hooks/useAuth';

import { toast } from '@/components/Toast';

export interface Balance {
    available: number;
    pendingWithdraw: number;
}

const useBalance = () => {
    const [balance, setBalance] = useState<Balance | null>(null);
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const fetchBalance = async () => {
        if (!auth.isLoggedIn) return; // If user is not loaded, do not proceed

        setLoading(true);
        try {
            const response = await api(`/balance`, {
                method: 'GET'
            });
            const data = await response.json();
            const balance: Balance = {
                available: data.available,
                pendingWithdraw: data.pending_withdraw
            };

            if (!data) throw new Error('Data not found');
            setBalance(balance);
        } catch (error) {
            toast.error('Data not found');
        }
        setLoading(false);
    };

    useEffect(() => {
        if (auth.isLoggedIn) {
            fetchBalance();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLoggedIn]);

    return {
        balance,
        fetchBalance,
        loading
    };
};

export default useBalance;
