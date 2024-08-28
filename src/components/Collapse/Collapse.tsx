/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useCollapse } from 'react-collapsed';

import classNames from '@/lib/classnames';

import Icons from '@/components/Icon';

interface CollapseProps {
    title: string | React.ReactNode;
    defaultExpanded?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Collapse = ({ title, defaultExpanded, className, children }: CollapseProps) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);
    const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded });

    return (
        <div
            className={classNames('mt-[-4px] flex w-full flex-col gap-2 ', className, {
                'border-b-main dark:border-b-dark-main border-b pb-2': isExpanded
            })}
        >
            <div
                className='flex w-full cursor-pointer items-center justify-between '
                onClick={getToggleProps({ onClick: () => setIsExpanded(!isExpanded) }).onClick}
            >
                <span className='py-2 text-sm font-bold text-[#18181E] xl:text-[16px] xl:leading-6'>{title}</span>
                <Icons
                    icon='ChevronDown'
                    width={24}
                    height={24}
                    className='transform text-gray-500 transition-transform duration-300'
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
            </div>
            <div {...getCollapseProps()}>{children}</div>
        </div>
    );
};

export default Collapse;
