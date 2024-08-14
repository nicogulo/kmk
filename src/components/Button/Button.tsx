/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import classNames from '@/lib/classnames';

import Loader from '@/components/Loader';

const disabledOutline: string[] = ['disabled:bg-[#F4F6F8]', 'disabled:border-none', 'disabled:text-[#BBC2C8]'];

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
                    'bg-primary-200',
                    'hover:bg-opacity-80',
                    'disabled:bg-[#F4F6F8]',
                    'text-white',
                    'disabled:text-[#BBC2C8]',
                    'border-none'
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
