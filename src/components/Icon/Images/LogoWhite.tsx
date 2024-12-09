/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const LogoWhite: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='144' height='40' viewBox='0 0 144 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M0 0H11.3591V24.2904L11.4242 24.2671L29.1037 0H40V14.018L11.4242 24.2671L11.3591 24.3564L40 32.0181V40H25.4294L11.3591 24.3564V40H0V32.0181L11.3591 24.3564V24.2904L0 14.018V0Z'
            fill='#00AA13'
        />
        <path
            d='M119.124 34.8571V5.14282H124.838V16.8762H127.124L136 5.14282H142.514V5.37139L131.962 18.9333L144 34.6285V34.8571H136.991L127.124 21.5619H124.838V34.8571H119.124Z'
            fill='white'
        />
        <path
            d='M78.7221 34.8571V5.14282H89.084L95.2173 30.2476H96.4744L102.646 5.14282H113.008V34.8571H107.484V9.98092H106.532L100.513 34.8571H90.8744L84.8554 9.98092H83.903V34.8571H78.7221Z'
            fill='white'
        />
        <path
            d='M50.4631 34.8571V5.14282H56.1774V16.8762H58.4631L67.3393 5.14282H73.8536V5.37139L63.3012 18.9333L75.3393 34.6285V34.8571H68.3298L58.4631 21.5619H56.1774V34.8571H50.4631Z'
            fill='white'
        />
    </svg>
);
export default LogoWhite;
