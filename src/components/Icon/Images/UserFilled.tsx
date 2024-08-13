/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const User: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M4 17.5C4 15.9087 4.63214 14.3826 5.75736 13.2574C6.88258 12.1321 8.4087 11.5 10 11.5C11.5913 11.5 13.1174 12.1321 14.2426 13.2574C15.3679 14.3826 16 15.9087 16 17.5H4ZM10 10.75C7.51375 10.75 5.5 8.73625 5.5 6.25C5.5 3.76375 7.51375 1.75 10 1.75C12.4862 1.75 14.5 3.76375 14.5 6.25C14.5 8.73625 12.4862 10.75 10 10.75Z'
            fill='currentColor'
        />
    </svg>
)
export default User
