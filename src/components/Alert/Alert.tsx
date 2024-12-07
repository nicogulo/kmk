import React, { useRef, useState } from 'react';

import classNames from '@/lib/classnames';

import Icons, { IconsProps } from '@/components/Icon/Icon';
import { Else, If, Then, When } from '@/components/If';

const variants = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-[#FFFAEB]',
    info: 'bg-[#D0F8D4]'
};

const sizes = {
    sm: `p-2`,
    md: `p-3`
};

export type Variant = keyof typeof variants;
export type Size = keyof typeof sizes;
const defaultVariant: Variant = 'warning';

export const getIconSize = (size?: Size) => {
    switch (size) {
        case 'sm':
            return 12;
        case 'md':
        default:
            return 20;
    }
};

interface WrapperProps {
    /**
     * Set alert variant
     */
    variant?: Variant;

    /**
     * Set the size of alert
     * @default "md"
     * @example
     * <Alert size="sm"/>
     */
    size?: Size;
}

interface AlertProps extends WrapperProps {
    /**
     * Set custom class name
     */
    className?: string;
    /**
     * Set the closeable status of alert
     * @default false
     */
    closeable?: boolean;
    /**
     * Set the icon status of alert
     * @default true
     * @example
     * <Alert withIcon/>
     */
    withIcon?: boolean;
    /**
     * Set the custom icon of alert
     * @example
     * <Alert icon='CheckCircle'/>
     */
    icon?: IconsProps['icon'];
    /**
     *
     * Set the title of alert
     * @example
     * <Alert title='Alert Title'/>
     */
    title?: string | React.ReactNode;
    /**
     *
     * Set the subtitle of alert
     * @example
     * <Alert subtitle='Alert panel text to display'/>
     */
    subtitle?: React.ReactNode;
    /**
     * Set custom title class name
     */
    titleClassName?: string;
    /**
     *  Set custom subtitle class name
     */
    subtitleClassName?: string;
    /**
     * Set content to center
     */
    contentCenter?: boolean;
    iconColor?: string;
    iconClassName?: string;
    withChildren?: boolean;
    content?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
    variant,
    className,
    withIcon,
    icon = 'Interuption',
    iconColor,
    size,
    title,
    subtitle,
    titleClassName,
    contentCenter,
    subtitleClassName,
    iconClassName,
    closeable,
    content,
    withChildren
}: AlertProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const alertRef = useRef<HTMLDivElement>(null);

    const closeAlert = () => {
        if (alertRef.current) {
            alertRef.current.style.opacity = '0';
            alertRef.current.style.height = '0px';
            alertRef.current.style.paddingBlock = '0px';
        }

        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        <When condition={isOpen}>
            <div
                ref={alertRef}
                className={classNames('flex justify-center gap-2 rounded-lg px-6 py-3', {
                    [variants[variant || defaultVariant]]: true,
                    [sizes[size || 'md']]: size,
                    'items-center': contentCenter,
                    className
                })}
            >
                <When condition={withIcon}>
                    <Icons
                        icon={icon}
                        width={getIconSize(size)}
                        height={getIconSize(size)}
                        color={iconColor}
                        className={iconClassName}
                    />
                </When>
                <If condition={withChildren}>
                    <Then>{content}</Then>
                    <Else>
                        <div className='flex flex-1 flex-col'>
                            {title && <div className={classNames('font-bold', titleClassName)}>{title}</div>}
                            {subtitle && (
                                <div className={classNames('text-sm text-[#525D66]', subtitleClassName)}>
                                    {subtitle}
                                </div>
                            )}
                        </div>
                    </Else>
                </If>
                <When condition={closeable}>
                    <Icons
                        icon='XClose'
                        width={getIconSize()}
                        height={getIconSize()}
                        className='text-primary-500 cursor-pointer'
                        onClick={closeAlert}
                    />
                </When>
            </div>
        </When>
    );
};

export default Alert;
