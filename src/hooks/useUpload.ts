/* eslint-disable consistent-return */
import { useState } from 'react';

import api from '@/lib/api';
import useProfile from '@/hooks/useProfile';

import { toast } from '@/components/Toast';

import useAuth from './useAuth';

interface UploadPayload {
    file?: File;
    type: 'ktp' | 'selfie' | 'npwp' | 'kk' | 'bank_statement';
}

interface UploadResponse {
    type: string;
    url: string;
    metadata: any;
}

const useUpload = () => {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const { profile } = useProfile();

    const upload = async ({ type, file }: UploadPayload) => {
        if (!auth.isLoggedIn) return;

        const formData = new FormData();
        if (file) formData.append('file', file);
        formData.append('type', type);

        setLoading(true);
        try {
            const response = await api(`/kyc/upload`, {
                method: 'POST',
                headers: {
                    email: profile?.email ?? ''
                },
                body: formData
            });
            const data = await response.json();

            if (!data) throw new Error(`Failed to upload ${type} file`);
            return data;
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false); // This ensures loading is set to false after the operation completes
        }
    };

    return { upload, loading };
};

export const useGetDocuments = () => {
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [documents, setDocuments] = useState<UploadResponse>();

    const { profile } = useProfile();

    const getDocuments = async (type: 'ktp' | 'selfie' | 'npwp' | 'kk' | 'bank_statement') => {
        if (!auth.isLoggedIn) return;

        setLoading(true);
        try {
            const response = await api(`/kyc/file/${type}`, {
                headers: {
                    email: profile?.email ?? ''
                }
            });
            const data = await response.json();

            if (data) {
                setDocuments(data);
            }
            if (!data) {
                throw new Error('Failed to fetch documents');
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { getDocuments, documents, loading };
};

export default useUpload;
