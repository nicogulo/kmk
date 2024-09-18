import { API_URL } from '@/constant/env';
import useAuth from './useAuth';
import api from '@/lib/api';
import useProfile from '@/hooks/useProfile';

interface PayloadDeposit {
    amount: string;
}

const useDeposit = () => {
    const { auth } = useAuth();
    const { profile } = useProfile();

    const deposit = async (payload: PayloadDeposit) => {
        try {
            const response = await api(`/balance/deposit`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-Type': 'application/json',
                    email: profile?.email ?? ''
                },
                body: JSON.stringify({
                    amount: payload.amount
                })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to deposit');
            }
            return data;
        } catch (error: any) {
            throw new Error(error.message || 'Failed to deposit');
        }
    };

    return { deposit };
};

export default useDeposit;
