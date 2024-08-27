/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import classNames from '@/lib/classnames';

import Icons from '@/components/Icon';
import { IconsProps } from '@/components/Icon/Icon';

const variants = {
    gray: {
        wrapper: 'bg-gray-200 text-gray-600',
        iconColor: 'text-text-gray-600'
    },
    red: {
        wrapper: 'bg-error-100 text-error-400',
        iconColor: 'text-error-400'
    },
    yellow: {
        wrapper: 'bg-warning-100 text-warning-400',
        iconColor: 'text-warning-400'
    },
    green: {
        wrapper: 'bg-success-100 text-success-400',
        iconColor: 'text-success-400'
    },
    blue: {
        wrapper: 'bg-info-100 text-info-400',
        iconColor: 'text-info-400'
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
