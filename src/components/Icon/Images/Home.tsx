/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Home: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M16.75 16.0002C16.75 16.1991 16.671 16.3899 16.5303 16.5305C16.3897 16.6712 16.1989 16.7502 16 16.7502H4C3.80109 16.7502 3.61032 16.6712 3.46967 16.5305C3.32902 16.3899 3.25 16.1991 3.25 16.0002V8.1177C3.24992 8.00341 3.27596 7.89062 3.32614 7.78793C3.37631 7.68524 3.44929 7.59538 3.5395 7.5252L9.5395 2.8587C9.67116 2.75629 9.8332 2.70068 10 2.70068C10.1668 2.70068 10.3288 2.75629 10.4605 2.8587L16.4605 7.5252C16.5507 7.59538 16.6237 7.68524 16.6739 7.78793C16.724 7.89062 16.7501 8.00341 16.75 8.1177V16.0002ZM15.25 15.2502V8.4837L10 4.4007L4.75 8.4837V15.2502H15.25ZM6.25 12.2502H13.75V13.7502H6.25V12.2502Z'
            fill='currentColor'
        />
    </svg>
)
export default Home
