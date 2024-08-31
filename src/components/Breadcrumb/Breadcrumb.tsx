import Link from 'next/link';
import React from 'react';
import { Else, If, Then, When } from 'react-if';

import classNames from '@/lib/classnames';

import ConditionalWrapper from '@/components/ConditionalWrapper';
import Icons from '@/components/Icon';

interface BreadcrumbProps {
    /**
     * The items of the breadcrumb.
     */
    items: {
        title: string;
        href?: string;
    }[];
    /**
     * The breakpoint of the breadcrumb.
     */
    breakpoint?: 'Desktop' | 'Mobile';
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, breakpoint }) => {
    const isMobile = breakpoint === 'Mobile';

    return (
        <div className='flex'>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div className='flex items-center' key={item.title}>
                        <If condition={isLast}>
                            <Then>
                                <span className='xs text-primary-300 line-clamp-1'>{item.title}</span>
                            </Then>
                            <Else>
                                <ConditionalWrapper
                                    condition={Boolean(item?.href)}
                                    // eslint-disable-next-line react/no-unstable-nested-components
                                    wrapper={(children) => <Link href={item?.href || ''}>{children}</Link>}
                                >
                                    <p
                                        className={classNames('whitespace-nowrap text-gray-600', {
                                            'hover:text-primary-300 ': Boolean(item?.href)
                                        })}
                                    >
                                        {item.title}
                                    </p>
                                </ConditionalWrapper>
                            </Else>
                        </If>

                        <When condition={!isLast}>
                            <Icons icon='ChevronRight' width={16} height={16} className='text-gray-600' />
                        </When>
                    </div>
                );
            })}
        </div>
    );
};

Breadcrumb.defaultProps = {
    breakpoint: 'Desktop'
};

export default Breadcrumb;
