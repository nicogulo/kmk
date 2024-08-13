import * as React from 'react';
import { get, useFormState } from 'react-hook-form';

import classNames from '@/lib/classnames';

type ErrorMessageProps = {
    id: string;
} & React.ComponentPropsWithoutRef<'p'>;

export default function ErrorMessage({ id, className, ...rest }: ErrorMessageProps) {
    const { errors } = useFormState();
    const error = get(errors, id);

    return (
        <p className={classNames('text-sm text-red-500', className)} {...rest}>
            {error.message?.toString()}
        </p>
    );
}
