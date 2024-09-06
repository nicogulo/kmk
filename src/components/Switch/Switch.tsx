import { Switch as SwitchComp } from '@headlessui/react';
import React, { useState } from 'react';

interface Props {
    checked?: boolean;
    onChange?: (value: boolean) => void;
    className?: string;
}

const Switch: React.FC<Props> = ({ checked, onChange, className }) => {
    const [enabled, setEnabled] = useState(checked);
    return (
        <SwitchComp
            checked={enabled}
            onChange={() => {
                setEnabled(!enabled);
                onChange?.(!enabled);
            }}
            className='bg-primary-300 group relative inline-flex h-6 w-[52px] items-center rounded-full  transition'
        >
            {enabled && (
                <span className='absolute text-[10px] font-semibold text-white group-data-[checked]:translate-x-2'>
                    ID
                </span>
            )}
            <span className='h-4 w-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7' />
            {!enabled && <span className='absolute translate-x-7 text-[10px] font-semibold text-white'>EN</span>}
        </SwitchComp>
    );
};

export default Switch;
