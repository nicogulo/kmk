/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import classNames from '@/lib/classnames';

import Icons from '@/components/Icon';
import { IconsProps } from '@/components/Icon/Icon';

const variants = {
    gray: {
        wrapper: 'bg-[#DFE3E8] text-[#525D66]',
        iconColor: 'text-[#525D66]'
    },
    red: {
        wrapper: 'bg-[#FFE7D9] text-[#B72136]',
        iconColor: 'text-[#B72136]'
    },
    yellow: {
        wrapper: 'bg-[#FFFAEB] text-[#DC6803]',
        iconColor: 'text-[#DC6803]'
    },
    green: {
        wrapper: 'bg-[#E9FCD4] text-[#229A16]',
        iconColor: 'text-[#229A16]'
    },
    blue: {
        wrapper: 'bg-[#D0F2FF] text-[0C53B7]',
        iconColor: 'text-[#0C53B7]'
    }
};

const sizes = {
    md: 'gap-2 text-xs font-bold py-1 px-2.5'
};

export type Variant = keyof typeof variants;
export type Size = keyof typeof sizes;

const defaultVariant: Variant = 'gray';
const defaultSize: Size = 'md';

interface WrapperProps extends React.PropsWithChildren<{}> {
    /**
     * Badge variant
     */
    variant?: Variant;
    /**
     * Badge size
     */
    size?: Size;
    /**
     * id
     */
    id?: string;
    /**
     * Class Name
     */
    className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ variant, size, id, className, children }) => {
    const variantStyles = variant ? variants[variant] : variants[defaultVariant];
    const sizeStyles = size ? sizes[size] : sizes[defaultSize];
    const wrapperClassName = classNames(
        'rounded-2xl font-bold flex justify-center w-fit items-center',
        variantStyles.wrapper,
        sizeStyles,
        className
    );

    return (
        <div id={id} className={wrapperClassName}>
            {children}
        </div>
    );
};

interface BadgeProps extends WrapperProps {
    /**
     * Icon
     */
    icon?: IconsProps['icon'];
    /**
     * Leading
     */
    iconPosition?: 'leading' | 'trailing';
}

const Badge: React.FC<BadgeProps> = ({
    variant = defaultVariant,
    size = defaultSize,
    children,
    icon,
    iconPosition,
    className,
    id
}) => {
    const iconSize = 16;
    const variantStyles = variant ? variants[variant] : variants[defaultVariant];
    const { iconColor } = variantStyles;

    return (
        <Wrapper id={id} className={className} variant={variant} size={size}>
            {iconPosition === 'leading' && icon && (
                <Icons className={iconColor} icon={icon} width={iconSize} height={iconSize} />
            )}
            {children}
            {iconPosition === 'trailing' && icon && (
                <Icons className={iconColor} icon={icon} width={iconSize} height={iconSize} />
            )}
        </Wrapper>
    );
};

export default Badge;
