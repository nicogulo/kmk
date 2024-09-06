import { useState } from 'react';

import api from '@/lib/api';
import useAuth from '@/hooks/useAuth';

import { toast } from '@/components/Toast';

interface Payload {
    bank_id: number;
    name: string;
    number: string;
    branch_name: string;
}

export const useAddBank = () => {
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const addBank = async (payload: Payload) => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await api(`/user-bank`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!data) throw new Error('Failed to add bank');
            return data;
        } catch (error) {
            console.error('Failed to add bank', error);
        } finally {
            setLoading(false);
        }
    };

    return { addBank, loading };
};

export const useDeleteBank = () => {
    const [loading, setLoading] = useState(false);
    const { auth } = useAuth();

    const deleteBank = async (id: number) => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await api(`/user-bank/${id}`, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error('Failed to delete bank');
            return data;
        } catch (error: any) {
            toast.error(error.message || 'Failed to delete bank');
        } finally {
            setLoading(false);
        }
    };

    return { deleteBank, loading };
};
