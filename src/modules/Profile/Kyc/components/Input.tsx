/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import InputComp, { InputProps } from '@/components/Input/Input';

const Input: React.FC<InputProps> = ({ ...props }) => (
    <InputComp
        size={props.size || 'md'}
        labelClassName='absolute top-4 left-3'
        groupClassName='relative w-full'
        className='!h-16 border-[#E8E8E9]'
        inputClassName='!w-[unset] absolute top-8 left-3 right-4 '
        {...props}
    />
);

export default Input;
