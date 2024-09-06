import { API_URL } from '@/constant/env';
import { getAuth } from '@/utils/auth';

const api = (endpoint: string, options?: RequestInit) => {
    const { token } = getAuth();
    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            ...options?.headers
        }
    });
};

export default api;
