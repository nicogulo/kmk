/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const CandyBox: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g fill='currentColor'>
            <path d='m6 12c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2z' />
            <path d='m14 12c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z' />
            <path d='m22 12c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z' />
            <path d='m6 4c0 1.10457-.89543 2-2 2s-2-.89543-2-2 .89543-2 2-2 2 .89543 2 2z' />
            <path d='m14 4c0 1.10457-.8954 2-2 2s-2-.89543-2-2 .8954-2 2-2 2 .89543 2 2z' />
            <path d='m22 4c0 1.10457-.8954 2-2 2s-2-.89543-2-2 .8954-2 2-2 2 .89543 2 2z' />
            <path d='m6 20c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2z' />
            <path d='m14 20c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z' />
            <path d='m22 20c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2z' />
        </g>
    </svg>
);
export default CandyBox;
