// import Illustration from '@components/Illustrations';
// import { IllustrationProps } from '@components/Illustrations/Illustrations';

import classNames from '@/lib/classnames';

import Illustration from '@/components/Illustrations';
import { IllustrationProps } from '@/components/Illustrations/Illustrations';

interface Props {
    /**
     * Title
     */
    title?: string | React.ReactNode;
    /**
     * Description
     */
    description?: string | React.ReactNode;
    /**
     * EmptyState className
     */
    className?: string;
    /**
     * illustration name
     */
    illustration?: IllustrationProps['name'];
    /**
     * illustration size
     */
    illustrationSize?: number;
    /**
     * Typography title level
     */
    titleClassName?: string;
    /**
     * Typography description level
     */
    descriptionClassName?: string;
}

const EmptyState: React.FC<Props> = ({
    title,
    description,
    className,
    illustration,
    illustrationSize,
    titleClassName,
    descriptionClassName
}) => {
    return (
        <div className={classNames('flex flex-col items-center justify-center bg-transparent text-center', className)}>
            {illustration && (
                <div>
                    <Illustration name={illustration} width={illustrationSize} height={illustrationSize} />
                </div>
            )}
            {title && (
                <div className={classNames('text-main dark:text-dark-main mb-2 mt-6', titleClassName)}>{title}</div>
            )}
            {description && (
                <div className={classNames('text-additional dark:text-dark-additional', descriptionClassName)}>
                    {description}
                </div>
            )}
        </div>
    );
};

EmptyState.defaultProps = {
    title: undefined,
    description: undefined,
    className: undefined,
    // illustration: undefined,
    illustrationSize: 160,
    descriptionClassName: undefined,
    titleClassName: undefined
};

export default EmptyState;
