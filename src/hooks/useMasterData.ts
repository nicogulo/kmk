import { useEffect, useState } from 'react';

import { API_URL } from '@/constant/env';

import useAuth from './useAuth';

interface ProvinceProps {
    key: number;
    value: number;
    name: string;
    code: string;
}

interface ValueProps {
    key: number;
    value: number;
    name: string;
    code: string;
}
interface GenderProps {
    id: string;
    key: string;
    name: string;
    label: string;
    value: string;
}

interface BankUserProps {
    uid: string;
    bank_code: string;
    bank_name: string;
    type: string;
    name: string;
    number: string;
    branch_name: string;
}

const useCountry = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchCountries = async (search?: string) => {
        try {
            const response = await fetch(`${API_URL}/master-data/country?search=${search}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();

            if (!data) throw new Error('Failed to fetch countries');
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCountries('Indonesia');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { countries, fetchCountries };
};

export const useProvince = () => {
    const [provinces, setProvinces] = useState<ProvinceProps[]>([]);
    const { auth } = useAuth();

    const fetchProvinces = async (search?: string) => {
        try {
            const response = await fetch(`${API_URL}/master-data/province?search=${search}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error('Failed to fetch provinces');
            setProvinces(data);
        } catch (error) {
            console.error(error);
        }
    };

    return { provinces, fetchProvinces };
};

export const useCity = () => {
    const [cities, setCities] = useState<ValueProps[]>([]);
    const { auth } = useAuth();

    const fetchCities = async (search: string, code: number) => {
        try {
            const response = await fetch(`${API_URL}/master-data/regency?province_code=${code}&search=${search}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();

            if (!data) throw new Error('Failed to fetch cities');
            setCities(data);
        } catch (error) {
            console.error(error);
        }
    };

    return { cities, fetchCities };
};

export const useMaritalStatus = () => {
    // /master-data/marital-status
    const [maritalStatus, setMaritalStatus] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchMaritalStatus = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/marital-status`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setMaritalStatus(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMaritalStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        maritalStatus
    };
};

export const useGender = () => {
    // /master-data/gender
    const [gender, setgender] = useState<GenderProps[]>([]);
    const { auth } = useAuth();

    const fetchGender = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/gender`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setgender(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGender();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        gender
    };
};

export const useHouseOwnership = () => {
    const [houseOwnership, setHouseOwnership] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchHouseOwnership = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/house-ownership`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setHouseOwnership(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchHouseOwnership();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        houseOwnership
    };
};

export const usePurposeOfAccountOpening = () => {
    const [purposeOfAccountOpening, setPurposeOfAccountOpening] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchPurposeOfAccountOpening = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/purpose-of-account-opening`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setPurposeOfAccountOpening(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPurposeOfAccountOpening();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        purposeOfAccountOpening
    };
};

export const useOccupation = () => {
    const [occupation, setOccupation] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchOccupation = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/occupation`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setOccupation(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOccupation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        occupation
    };
};

export const useAnnualIncome = () => {
    const [annualIncome, setAnnualIncome] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchAnnualIncome = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/annual-income`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setAnnualIncome(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAnnualIncome();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        annualIncome
    };
};

export const useBank = () => {
    const [banks, setBanks] = useState<ValueProps[]>([]);
    const { auth } = useAuth();

    const fetchBanks = async (search?: string) => {
        try {
            const response = await fetch(`${API_URL}/master-data/bank?search=${search}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error('Failed to fetch banks');
            setBanks(data);
        } catch (error) {
            console.error(error);
        }
    };

    return { banks, fetchBanks };
};

export const useBankAccountType = () => {
    const [bankAccountType, setBankAccountType] = useState<string[]>([]);
    const { auth } = useAuth();

    const fetchBankAccountType = async () => {
        try {
            const response = await fetch(`${API_URL}/master-data/bank-account-type`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setBankAccountType(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBankAccountType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        bankAccountType
    };
};

export const useBankUser = () => {
    const [bankUser, setBankUser] = useState<BankUserProps[]>([]);
    const { auth } = useAuth();

    const fetchBankUser = async () => {
        try {
            const response = await fetch(`${API_URL}/user-bank`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            const data = await response.json();

            if (!data) throw new Error();
            setBankUser(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBankUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        bankUser
    };
};

export default useCountry;