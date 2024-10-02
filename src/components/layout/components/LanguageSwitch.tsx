import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Switch from '@/components/Switch';

const LanguageSwitch = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(router.locale === 'id');

    const handleChangeLanguage = () => {
        setChecked(!checked);
        const newLocale = checked ? 'en' : 'id';
        setTimeout(() => {
            router.replace(router.asPath, router.asPath, { locale: newLocale });
        }, 300);
    };

    return (
        <div>
            <Switch onChange={handleChangeLanguage} checked={checked} />
        </div>
    );
};

export default LanguageSwitch;
