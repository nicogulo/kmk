import api from '@/lib/api';

const useVerifyPhoneNumber = () => {
    const verifyPhoneNumber = async (id: string) => {
        try {
            const response = await api(`/phone/verify/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
