/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';

import AccountVerification from './AccountVerification';
import ErrorStateIllustration from './ErrorState';

export const IllustrationComponent = {
    ...AccountVerification,
    ...ErrorStateIllustration
};

export type IllustrationType = keyof typeof IllustrationComponent;

export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Illustration name
     */
    name: keyof typeof IllustrationComponent;

    /**
     * Theme to applied
     */
    theme?: 'light' | 'dark';
}

const Illustration: React.FC<IllustrationProps> = ({ name, theme = 'light', ...props }) => {
    const Component = IllustrationComponent[name] as React.ComponentType<any>;

    return (
        <Suspense fallback={null}>
            <Component data-testid='reku-illustration' data-name={name} theme={theme} {...props} />
        </Suspense>
    );
};

export default Illustration;
