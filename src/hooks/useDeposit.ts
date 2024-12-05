import api from '@/lib/api';

import useAuth from './useAuth';

interface PayloadDeposit {
    amount: string;
}

const useDeposit = () => {
    const { auth } = useAuth();

    const deposit = async (payload: PayloadDeposit) => {
        try {
            const response = await api(`/balance/deposit`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-Type': 'application/json'
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
