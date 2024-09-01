/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const OtherBank: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='34' height='20' viewBox='0 0 34 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect width='33.3333' height='20' rx='2' fill='#DFE3E8' />
        <g clip-path='url(#clip0_507_34680)'>
            <path
                d='M8.61092 7.53333L9.44426 7.04445V8.88889H23.8887V7.06111L24.7109 7.53333C24.8379 7.59975 24.9856 7.61455 25.1232 7.57462C25.2608 7.5347 25.3777 7.44315 25.4494 7.31909C25.5211 7.19503 25.5421 7.04807 25.508 6.90889C25.4739 6.76972 25.3874 6.64909 25.2665 6.57222L16.6665 1.62222L8.05537 6.57222C7.98897 6.60695 7.93029 6.65476 7.88286 6.71275C7.83542 6.77075 7.8002 6.83774 7.77932 6.9097C7.75845 6.98166 7.75234 7.0571 7.76138 7.13148C7.77041 7.20586 7.7944 7.27765 7.8319 7.34252C7.86939 7.40739 7.91963 7.464 7.97957 7.50895C8.03951 7.55391 8.10793 7.58627 8.18071 7.6041C8.25348 7.62192 8.32911 7.62484 8.40305 7.61268C8.47698 7.60052 8.54769 7.57353 8.61092 7.53333ZM16.5831 3.95C16.6507 3.91099 16.7274 3.89046 16.8054 3.89046C16.8834 3.89046 16.96 3.91099 17.0276 3.95L20.7609 6.11111H18.972L16.8054 4.86667L14.6387 6.11111H12.8554L16.5831 3.95Z'
                fill='#919EAB'
            />
            <path
                d='M24.9167 15H24.4445V14.5278C24.4445 14.3583 24.3772 14.1958 24.2574 14.076C24.1376 13.9562 23.9751 13.8889 23.8056 13.8889H22.2223V9.79443H20.0001V13.8889H17.7778V9.79443H15.5556V13.8889H13.3334V9.79443H11.1112V13.8889H9.52783C9.35839 13.8889 9.19588 13.9562 9.07607 14.076C8.95625 14.1958 8.88894 14.3583 8.88894 14.5278V15H8.41672C8.24728 15 8.08477 15.0673 7.96496 15.1871C7.84514 15.3069 7.77783 15.4694 7.77783 15.6389V17.2222H25.5556V15.6389C25.5556 15.4694 25.4883 15.3069 25.3685 15.1871C25.2487 15.0673 25.0862 15 24.9167 15Z'
                fill='#919EAB'
            />
        </g>
        <defs>
            <clipPath id='clip0_507_34680'>
                <rect width='20' height='20' fill='white' transform='translate(6.6665)' />
            </clipPath>
        </defs>
    </svg>
);
export default OtherBank;