/* eslint-disable consistent-return */
const usePasswordValidator = () => {
    const listValidation = [
        {
            label: 'Setidaknya satu angka',
            check: (value: string) => {
                if (value?.match(/[0-9]/)) {
                    return true;
                }
            }
        },
        {
            label: 'Setidaknya satu huruf besar',
            check: (value: string) => {
                if (value?.match(/[A-Z]/)) {
                    return true;
                }
            }
        },
        {
            label: 'Setidaknya satu huruf kecil',
            check: (value: string) => {
                if (typeof value === 'undefined') {
                    return false;
                }
                return /[a-z]/.test(value);
            }
        },
        {
            label: 'Minimal 8 karakter',
            check: (value: string) => value?.length >= 8
        }
    ];

    const confirmPassword = (form: string) => {
        const listPassed = [
            {
                label: 'Password tidak sama',
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
