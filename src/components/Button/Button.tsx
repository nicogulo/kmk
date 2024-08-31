/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import classNames from '@/lib/classnames';

import Loader from '@/components/Loader';

const disabledOutline: string[] = [
    'disabled:bg-[#F4F6F8]',
    'border-text-transparent-10',
    'disabled:border-none',
    'disabled:text-[#BBC2C8]'
];

const buttonVariants = cva(
    [
        'border',
        'font-bold',
        'text-center',
        'focus:outline-none',
        'disabled:cursor-not-allowed',
        'flex',
        'items-center',
        'justify-center',
        'gap-2'
    ],
    {
        variants: {
            variant: {
                primary: [
                    'bg-primary-300',
                    'hover:bg-opacity-80',
                    'disabled:bg-[#F4F6F8]',
                    'text-white',
                    'disabled:text-[#BBC2C8]',
                    'border-none'
                ],
                secondary: [
                    'bg-secondary-300',
                    'hover:bg-opacity-80',
                    'disabled:bg-[#F4F6F8]',
                    'text-white',
                    'disabled:text-[#BBC2C8]',
                    'border-none'
                ],
                danger: [
                    'bg-error-300',
                    'hover:bg-opacity-80',
                    'disabled:bg-[#F4F6F8]',
                    'text-white',
                    'disabled:text-[#BBC2C8]',
                    'border-none'
                ],
                dangerOutline: [
                    'bg-transparent',
                    '!border-error-300',
                    'text-error-300',
                    'hover:bg-error-100',
                    ...disabledOutline
                ],
                gray: [
                    'bg-gray-[#F4F6F8]',
                    'hover:bg-opacity-80',
                    'disabled:bg-[#F4F6F8]',
                    'text-gray-500',
                    ...disabledOutline
                ],
                grayOutline: ['bg-transparent', ...disabledOutline],
                primaryOutline: ['bg-transparent', 'border-primary-500', 'text-primary-500', ...disabledOutline]
            },
            size: {
                sm: ['py-2', 'px-3.5', 'text-xs', 'font-bold', 'rounded-[4px]'],
                md: ['py-2.5', 'px-5', 'text-sm', 'font-bold', 'rounded-[4px]']
            },
            block: {
                true: 'w-full'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            block: false
        }
    }
);

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

export interface ButtonProps
    extends VariantProps<typeof buttonVariants>,
        React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean;
}

const Button = ({ variant, size, children, block, className, loading, ...rest }: ButtonProps) => (
    <button {...rest} className={classNames(buttonVariants({ variant, size, block }), className)}>
        {loading ? <Loader type='ThreeDots' width={32} height={24} /> : children}
    </button>
);

export default Button;
