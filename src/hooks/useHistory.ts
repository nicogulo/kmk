import { useEffect, useState } from 'react';

import { toast } from '@/components/Toast';

import { API_URL } from '@/constant/env';

import useAuth from './useAuth';

interface History {
    uid: string;
    bank_code: string;
    bank_name: string;
    bank_account_name: string;
    bank_account_number: string;
    bank_account_branch: string;
    account_server: string;
    account_number: string;
    side: number;
    idr_nett_amount: number;
    idr_gross_amount: number;
    idr_fee: number;
    rate: number;
    usd_nett_amount: number;
    usd_gross_amount: number;
    usd_fee: number;
    status: number;
    file_id: string;
    file_url: string;
    created_at: string;
    updated_at: string;
    amount: number;
}

interface HistoryResponse {
    histories: History[];
    total: number;
    page: number;
    limit: number;
}

interface Filter {
    page: number;
    limit: number;
    sides: string;
    status?: number;
}
interface HistoryArgs {
    filter?: Filter;
}
const useHistory = (args: HistoryArgs = {}) => {
    const { auth } = useAuth();
    const [history, setHistory] = useState<HistoryResponse>();

    const fetchHistory = async () => {
        try {
            const queryParams = new URLSearchParams();
            if (args.filter?.limit) queryParams.append('limit', args.filter.limit.toString());
            if (args.filter?.page) queryParams.append('page', args.filter.page.toString());
            if (args.filter?.sides) queryParams.append('sides', args.filter.sides);
            if (args.filter?.status) queryParams.append('status', args.filter.status.toString());

            const response = await fetch(`${API_URL}/balance/history?${queryParams.toString()}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                },
                method: 'GET'
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }
            setHistory(data);
            return data;
        } catch (error: any) {
            toast.error(error.message || 'Failed to get data history');
        }
    };
    useEffect(() => {
        fetchHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.token]);

    return { history, fetchHistory };
};

export const useHistoryDetail = (uid?: string) => {
    const { auth } = useAuth();
    const [historyDetail, setHistoryDetail] = useState<History>();
    const [loading, setLoading] = useState(false);

    const fetchHistory = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/balance/history/${uid}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                },
                method: 'GET'
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }
            setHistoryDetail(data);
            return data;
        } catch (error: any) {
            toast.error(error.message || 'Failed to get data history detail');
        } finally {
            setLoading(false);
        }
    };

    const uploadBankReceipt = async (file: File, uidPayload?: string) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${API_URL}/balance/history/${uid || uidPayload}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                },
                method: 'POST',
                body: formData
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            return data;
        } catch (error: any) {
            toast.error(error.message || 'Failed to upload bank receipt');
        }
    };

    return { history: historyDetail, fetchHistory, uploadBankReceipt, loading };
};

export default useHistory;