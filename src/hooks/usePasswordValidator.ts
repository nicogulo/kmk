/* eslint-disable consistent-return */
const usePasswordValidator = () => {
    const listValidation = [
        {
            label: 'One digit from 0 to 9',
            check: (value: string) => {
                if (value?.match(/[0-9]/)) {
                    return true;
                }
            }
        },
        {
            label: 'One uppercase letter',
            check: (value: string) => {
                if (value?.match(/[A-Z]/)) {
                    return true;
                }
            }
        },
        {
            label: 'One lowercase letter',
            check: (value: string) => {
                if (typeof value === 'undefined') {
                    return false;
                }
                return /[a-z]/.test(value);
            }
        },
        {
            label: 'Minimum of 8 characters',
            check: (value: string) => value?.length >= 8
        }
    ];

    const confirmPassword = (form: string) => {
        const listPassed = [
            {
                label: 'Password must match',
                check: (password: string) => {
                    if (form === '') {
                        return false;
                    }
                    if (form === undefined) {
                        return false;
                    }
                    return form === password;
                }
            }
        ];
        return listPassed;
    };

    return { listValidation, confirmPassword };
};

export default usePasswordValidator;
