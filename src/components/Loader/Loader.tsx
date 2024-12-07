/* eslint-disable react/default-props-match-prop-types */
import * as React from 'react';

import loaderTypeComponents from './components';

const defaultType = 'Oval';

interface LoadersProps extends LoaderProps {
    type?: 'ThreeDots' | 'Oval';
}

const Loader: React.FC<LoadersProps> = ({
    type = defaultType,
    width = 80,
    height = 80,
    color = '#00AA13',
    label = 'Loading',
    radius
}: LoadersProps) => {
    const LoaderTypeComponent = loaderTypeComponents[type];

    return <>{React.createElement(LoaderTypeComponent, { width, height, color, label, radius })}</>;
};

export default Loader;
