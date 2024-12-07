/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='116' height='32' viewBox='0 0 116 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M0 0H9.08725V19.4323L9.13934 19.4136L23.283 0H32V11.2144L9.13934 19.4136L9.08725 19.4851L32 25.6145V32H20.3435L9.08725 19.4851V32H0V25.6145L9.08725 19.4851V19.4323L0 11.2144V0Z'
            fill='#00AA13'
        />
        <path
            d='M95.2991 27.8857V4.11426H99.8705V13.5009H101.699L108.8 4.11426H114.011V4.29712L105.57 15.1466L115.2 27.7028V27.8857H109.592L101.699 17.2495H99.8705V27.8857H95.2991Z'
            fill='black'
        />
        <path
            d='M62.9776 27.8857V4.11426H71.2672L76.1738 24.1981H77.1795L82.1167 4.11426H90.4062V27.8857H85.9872V7.98474H85.2253L80.41 27.8857H72.6995L67.8843 7.98474H67.1224V27.8857H62.9776Z'
            fill='black'
        />
        <path
            d='M40.3705 27.8857V4.11426H44.9419V13.5009H46.7705L53.8714 4.11426H59.0829V4.29712L50.641 15.1466L60.2714 27.7028V27.8857H54.6638L46.7705 17.2495H44.9419V27.8857H40.3705Z'
            fill='black'
        />
    </svg>
);
export default Logo;
