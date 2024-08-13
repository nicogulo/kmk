/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const EmailIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='10' y='10' width='56' height='56' rx='28' fill='#08AA54' fillOpacity='0.2' />
        <rect x='5' y='5' width='66' height='66' rx='33' stroke='#08AA54' strokeOpacity='0.1' strokeWidth='10' />
        <path
            d='M26.334 32.1665L35.8597 38.8345C36.6311 39.3745 37.0168 39.6445 37.4363 39.749C37.8069 39.8414 38.1944 39.8414 38.565 39.749C38.9845 39.6445 39.3702 39.3745 40.1416 38.8345L49.6673 32.1665M31.934 47.3332H44.0673C46.0275 47.3332 47.0076 47.3332 47.7563 46.9517C48.4149 46.6161 48.9503 46.0807 49.2858 45.4221C49.6673 44.6734 49.6673 43.6934 49.6673 41.7332V34.2665C49.6673 32.3063 49.6673 31.3262 49.2858 30.5775C48.9503 29.919 48.4149 29.3835 47.7563 29.048C47.0076 28.6665 46.0275 28.6665 44.0673 28.6665H31.934C29.9738 28.6665 28.9937 28.6665 28.245 29.048C27.5865 29.3835 27.051 29.919 26.7155 30.5775C26.334 31.3262 26.334 32.3063 26.334 34.2665V41.7332C26.334 43.6934 26.334 44.6734 26.7155 45.4221C27.051 46.0807 27.5865 46.6161 28.245 46.9517C28.9937 47.3332 29.9738 47.3332 31.934 47.3332Z'
            stroke='#08AA54'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)
export default EmailIllustration
