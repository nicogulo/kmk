import api from '@/lib/api';
import useProfile from '@/hooks/useProfile';

interface PayloadWithdraw {
    member_bank_uid: string;
    amount: string;
}

const useWithdraw = () => {
    const { profile } = useProfile();

    const withdraw = async (payload: PayloadWithdraw) => {
        try {
            const response = await api(`/balance/withdraw`, {
                method: 'POST',
                headers: {
                    email: profile?.email ?? '',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    member_bank_uid: payload.member_bank_uid,
                    amount: payload.amount
                })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to withdraw');
            }
            return data;
        } catch (error: any) {
            throw new Error(error.message || 'Failed to withdraw');
        }
    };

    return { withdraw };
};

export default useWithdraw;
