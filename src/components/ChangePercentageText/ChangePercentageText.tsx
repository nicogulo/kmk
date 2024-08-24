import { Case, Default, Else, If, Switch, Then } from 'react-if';

import classNames from '@/lib/classnames';

import ConditionalWrapper from '@/components/ConditionalWrapper';
import Icons from '@/components/Icon';
import Skeleton from '@/components/Skeleton';

import { formatChangePercentage } from '@/utils/formatPercentage';

interface BackgroundProps {
    variant: 'success' | 'danger' | 'neutral';
}

interface Props {
    /**
     * Set percentage value number
     */
    value?: number;
    /**
     * Set className
     */
    className?: string;
    /**
     * Prefix type
     */
    prefix?: 'icon' | 'symbol' | 'none';
    /**
     * with background
     */
    withBackground?: boolean;
    /**
     * icon size
     */
    iconSize?: number;

    /**
     * precision
     */
    precision?: number | null;
    /**
     * asterisk
     */
    asterisk?: boolean;
    /**
     * asterisk amount
     */
    asteriskAmount?: number;
}

const ChangePercentageText: React.FC<Props> = ({
    value,
    className,
    prefix,
    withBackground,
    iconSize,
    precision,
    asterisk,
    asteriskAmount = 8
}: Props) => {
    const isPositive = typeof value !== 'undefined' && value > 0;
    const isNegative = typeof value !== 'undefined' && value < 0;

    const printAsterisk = () => '*'.repeat(asteriskAmount);

    return (
        <div className='inline-flex items-center'>
            <ConditionalWrapper
                condition={withBackground ?? false}
                // eslint-disable-next-line react/no-unstable-nested-components
                wrapper={(children) => (
                    <div
                        className={classNames('flex items-center rounded-full bg-gray-500/20 px-2 py-[3px]', {
                            'bg-success-25 dark:bg-success-500/20': isPositive,
                            'bg-danger-25 dark:bg-danger-500/20': isNegative,
                            'bg-neutral-25 dark:bg-neutral-500/20': !isPositive && !isNegative
                        })}
                    >
                        {children}
                    </div>
                )}
            >
                <>
                    <If condition={prefix === 'icon'}>
                        <Switch>
                            <Case condition={isPositive}>
                                <Icons
                                    icon='ArrowUp'
                                    className='text-success-400 mr-1'
                                    width={iconSize}
                                    height={iconSize}
                                />
                            </Case>
                            <Case condition={isNegative}>
                                <Icons
                                    icon='ArrowUp'
                                    className='text-error-400 mr-1 rotate-180'
                                    width={iconSize}
                                    height={iconSize}
                                />
                            </Case>
                            <Default />
                        </Switch>
                    </If>

                    <If condition={typeof value === 'undefined'}>
                        <Then>
                            <div className={classNames(className, 'text-gray-300')}>
                                <Skeleton className='w-16' />
                            </div>
                        </Then>
                        <Else>
                            {typeof value !== 'undefined' && (
                                <div
                                    className={classNames(className, 'text-xs font-semibold', {
                                        'text-success-400': isPositive,
                                        'text-error-400 ': isNegative,
                                        'text-gray-400': !isPositive && !isNegative
                                    })}
                                >
                                    {asterisk
                                        ? printAsterisk()
                                        : formatChangePercentage(
                                              value,
                                              prefix === 'symbol' ? prefix : 'none',
                                              precision
                                          )}
                                </div>
                            )}
                        </Else>
                    </If>
                </>
            </ConditionalWrapper>
        </div>
    );
};

ChangePercentageText.defaultProps = {
    value: undefined,
    className: undefined,
    prefix: 'symbol',
    withBackground: false,
    iconSize: 14,
    precision: undefined
};

export default ChangePercentageText;
