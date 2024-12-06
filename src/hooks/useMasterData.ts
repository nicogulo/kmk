import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';

import api from '@/lib/api';

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
    const { user } = useUser();

    const fetchCountries = async (search?: string) => {
        try {
            const response = await api(`/master-data/country?search=${search}`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return { countries, fetchCountries };
};

export const useProvince = () => {
    const [provinces, setProvinces] = useState<ProvinceProps[]>([]);

    const { user } = useUser();

    const fetchProvinces = async (search?: string) => {
        try {
            const response = await api(`/master-data/province?search=${search}`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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

    const { user } = useUser();

    const fetchCities = async (search: string, code: number) => {
        try {
            const response = await api(`/master-data/regency?province_code=${code}&search=${search}`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    const { user } = useUser();

    const fetchMaritalStatus = async () => {
        try {
            const response = await api(`/master-data/marital-status`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        maritalStatus
    };
};

export const useGender = () => {
    // /master-data/gender
    const [gender, setgender] = useState<GenderProps[]>([]);
    const { user } = useUser();

    const fetchGender = async () => {
        try {
            const response = await api(`/master-data/gender`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        gender
    };
};

export const useHouseOwnership = () => {
    const [houseOwnership, setHouseOwnership] = useState<string[]>([]);
    const { user } = useUser();

    const fetchHouseOwnership = async () => {
        try {
            const response = await api(`/master-data/house-ownership`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        houseOwnership
    };
};

export const usePurposeOfAccountOpening = () => {
    const [purposeOfAccountOpening, setPurposeOfAccountOpening] = useState<string[]>([]);
    const { user } = useUser();

    const fetchPurposeOfAccountOpening = async () => {
        try {
            const response = await api(`/master-data/purpose-of-account-opening`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        purposeOfAccountOpening
    };
};

export const useOccupation = () => {
    const [occupation, setOccupation] = useState<string[]>([]);
    const { user } = useUser();

    const fetchOccupation = async () => {
        try {
            const response = await api(`/master-data/occupation`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        occupation
    };
};

// useSourceOfFund

export const useSourceOfFund = () => {
    const [sourceOfFund, setSourceOfFund] = useState<string[]>([]);
    const { user } = useUser();

    const fetchSourceOfFund = async () => {
        try {
            const response = await api(`/master-data/source-of-fund`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
                }
            });
            const data = await response.json();
            if (!data) throw new Error();
            setSourceOfFund(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSourceOfFund();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return {
        sourceOfFund
    };
};

export const useAnnualIncome = () => {
    const [annualIncome, setAnnualIncome] = useState<string[]>([]);
    const { user } = useUser();

    const fetchAnnualIncome = async () => {
        try {
            const response = await api(`/master-data/annual-income`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        annualIncome
    };
};

export const useBank = () => {
    const [banks, setBanks] = useState<ValueProps[]>([]);
    const { user } = useUser();

    const fetchBanks = async (search?: string) => {
        try {
            const response = await api(`/master-data/bank?search=${search}`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    const { user } = useUser();

    const fetchBankAccountType = async () => {
        try {
            const response = await api(`/master-data/bank-account-type`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        bankAccountType
    };
};

export const useBankUser = () => {
    const [bankUser, setBankUser] = useState<BankUserProps[]>([]);
    const { user } = useUser();
    const fetchBankUser = async () => {
        try {
            const response = await api(`/user-bank`, {
                method: 'GET',
                headers: {
                    email: user?.email ?? ''
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
    }, [user]);

    return {
        bankUser,
        fetchBankUser
    };
};

export default useCountry;
