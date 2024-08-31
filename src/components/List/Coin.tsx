import classNames from 'classnames';
import Image from 'next/image';
import { Else, If, Then } from 'react-if';

import ChangePercentageText from '@/components/ChangePercentageText';
import Skeleton from '@/components/Skeleton';

interface CoinProps {
    /**
     * Class Name
     */
    className?: string;
    /**
     * Coin Code
     */
    coinCode?: string;
    /**
     * Symbol Code
     */
    symbol?: string;
    /**
     * Change percentage of price
     */
    changePercentage?: number;
    /**
     * Logo source
     */
    coinLogo?: string;

    /**
     * Active
     */
    active?: boolean;
    /**
     * Volume Value
     */
    priceChangeText?: string;
    /**
     * add prefix or component
     */
    prefix?: React.ReactNode;
    /**
     * event click
     */
    onClick?: () => void;
}

const Coin: React.FC<CoinProps> = ({
    className,
    coinCode,
    changePercentage,
    coinLogo,
    priceChangeText,
    prefix,
    onClick,
    symbol
}: CoinProps) => (
    <div className='w-full min-w-[288px]'>
        <div
            className={classNames(className, 'flex w-full cursor-pointer items-center justify-between py-2.5 ', {})}
            onClick={onClick}
        >
            <div className='flex flex-row items-center gap-3'>
                {prefix}
                <If condition={coinLogo}>
                    <Then>
                        <Image
                            alt={`${coinCode}-logo`}
                            src={coinLogo ?? ''}
                            width={32}
                            height={32}
                            className='ml-1 h-8 rounded-full'
                        />
                    </Then>
                    <Else>
                        <Skeleton className='h-8 w-8 rounded-full' />
                    </Else>
                </If>

                <div>
                    <div className='flex gap-1'>
                        <div className='flex flex-col items-start gap-0.5'>
                            <If condition={coinCode}>
                                <Then>
                                    <span className='xs font-semibold text-gray-800'>{coinCode}</span>
                                    <span className='xs text-gray-600'>{symbol}</span>
                                </Then>
                                <Else>
                                    <Skeleton className='w-[60px]' />
                                </Else>
                            </If>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end gap-[2px]'>
                <If condition={priceChangeText}>
                    <Then>
                        <span className='xs font-semibold text-gray-800'>{priceChangeText}</span>
                    </Then>
                    <Else>
                        <Skeleton className='h-3 w-[60px]' />
                    </Else>
                </If>
                <If condition={changePercentage !== null && changePercentage !== undefined}>
                    <Then>
                        <ChangePercentageText prefix='icon' value={changePercentage} />
                    </Then>
                    <Else>
                        <Skeleton className='h-3 w-[60px]' />
                    </Else>
                </If>
            </div>
        </div>
    </div>
);
Coin.defaultProps = {
    className: undefined,
    coinCode: undefined,
    coinLogo: undefined,
    active: false,
    priceChangeText: undefined,
    prefix: undefined,
    onClick: undefined,
    symbol: '/IDR'
};

export default Coin;
