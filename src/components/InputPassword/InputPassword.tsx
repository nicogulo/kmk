/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { isWindows } from 'react-device-detect';

import Icons from '@/components/Icon';
import Input, { InputProps } from '@/components/Input/Input';

const inputStyleMedium = {
    textSecurity: 'disc',
    letterSpacing: 'normal'
};
const inputStyleMediumWindows = {
    ...inputStyleMedium
};

const inputStyleSmallSize = {
    ...inputStyleMedium,
    fontSize: '0.875rem',
    marginTop: '-2px'
};
type InputPasswordProps = Omit<InputProps, 'type' | 'suffix'>;

const InputPassword: React.FC<InputPasswordProps> = ({ className, style, ...props }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const inputStyle =
        props.size === 'sm'
            ? isWindows
                ? inputStyleSmallSize
                : inputStyleMedium
            : isWindows
            ? inputStyleMediumWindows
            : inputStyleMedium;

    return (
        <Input
            type={showPassword ? 'text' : 'password'}
            suffix={
                <Icons
                    className='cursor-pointer text-[#121416]'
                    icon={showPassword ? 'EyeShow' : 'EyeHide'}
                    width={24}
                    height={24}
                    onClick={toggleShowPassword}
                />
            }
            size={props.size || 'md'}
            style={{
                ...inputStyle
            }}
            {...props}
        />
    );
};

export default InputPassword;
