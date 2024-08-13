import classNames from '@/lib/classnames';
import React from 'react';

export interface ContainerProps extends React.PropsWithChildren {
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
    <div
        className={classNames(
            'mx-auto my-0 box-border w-[90%] min-w-full max-w-[1400px] px-5 py-0 xl:min-w-[1210px]',
            className
        )}
    >
        {children}
    </div>
);

export default Container;
