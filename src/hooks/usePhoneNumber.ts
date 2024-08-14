import { API_URL } from '@/constant/env';

import useAuth from './useAuth';

const useVerifyPhoneNumber = () => {
    const {
        auth: { token }
    } = useAuth();

    const verifyPhoneNumber = async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/phone/verify/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: null
            });

            const res = await response.json();
            if (response.ok) {
                return res;
            }

            if (!response.ok) throw new Error(`Failed to verify phone number`);
            return res;
        } catch (error) {
            console.log('error', error);
            throw error; // Add this line to rethrow the error
        }
    };

    return { verifyPhoneNumber };
};

export default useVerifyPhoneNumber;
