/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactNode } from 'react';

import classNames from '@/lib/classnames';

interface TabsProps {
    className?: string;
    vertical?: boolean;
    children: ReactNode;
}

interface StyledTabProps extends React.PropsWithChildren<{}> {
    active?: boolean;
    onClick?: () => void;
    isMobile?: boolean;
    className?: string;
    vertical?: boolean;
}

interface TabProps {
    active?: boolean;
    vertical?: boolean;
    onClick?: () => void;
    className?: string;
    activeTabClassName?: string;
    textClassName?: (active?: boolean) => string;
    isMobile?: boolean;
    children: ReactNode;
}

const activeTabCss = 'border-b-2 border-primary-200';
const activeTabCssVertical = 'border-l-2 border-primary-200';

interface TextProps extends React.PropsWithChildren<{}> {
    className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => (
    <span className={classNames('xs', className)}>{children}</span>
);

const ActiveText: React.FC<TextProps> = ({ children, className }) => (
    <span className={classNames('xs font-bold text-[#18181E]', className)}>{children}</span>
);

const StyledTab: React.FC<StyledTabProps> = ({ active, onClick, children, isMobile, className, vertical }) => (
    <div
        onClick={onClick}
        className={classNames(
            'relative flex cursor-pointer  font-normal  transition duration-300 ease-in-out',
            {
                'flex-1 justify-center': isMobile,
                [vertical ? activeTabCssVertical : activeTabCss]: active,
                '-m-[2px] flex-col items-start py-2 pl-4': vertical,
                'items-center pb-4': !vertical
            },
            className
        )}
    >
        {children}
    </div>
);

const Tab: React.FC<TabProps> = ({
    active,
    onClick,
    className,
    activeTabClassName,
    textClassName,
    isMobile = false,
    children,
    vertical
}) => (
    <StyledTab
        onClick={onClick}
        active={active}
        isMobile={isMobile}
        vertical={vertical}
        className={classNames(
            { [activeTabClassName ?? (vertical ? activeTabCssVertical : activeTabCss)]: active },
            className
        )}
    >
        {active ? (
            <ActiveText className={textClassName?.(active)}>{children}</ActiveText>
        ) : (
            <Text className={textClassName?.(active)}>{children}</Text>
        )}
    </StyledTab>
);

const Tabs: React.FC<TabsProps> = ({ children, className, vertical }) => (
    <div
        className={classNames(
            'relative flex w-auto',
            {
                'flex-col': vertical,
                'border-l-2 border-l-[#1E1E1E1A]': vertical,
                'gap-6 border-b border-b-[#1E1E1E1A]': !vertical
            },
            className
        )}
    >
        {children}
    </div>
);

export { Tab };

export default Tabs;
