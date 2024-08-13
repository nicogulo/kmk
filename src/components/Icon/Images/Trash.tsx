/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Trash: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M3.2 5.6H12.8V13.4C12.8 13.5591 12.7368 13.7117 12.6243 13.8243C12.5117 13.9368 12.3591 14 12.2 14H3.8C3.64087 14 3.48826 13.9368 3.37574 13.8243C3.26321 13.7117 3.2 13.5591 3.2 13.4V5.6ZM4.4 6.8V12.8H11.6V6.8H4.4ZM6.2 8H7.4V11.6H6.2V8ZM8.6 8H9.8V11.6H8.6V8ZM5 3.8V2.6C5 2.44087 5.06321 2.28826 5.17574 2.17574C5.28826 2.06321 5.44087 2 5.6 2H10.4C10.5591 2 10.7117 2.06321 10.8243 2.17574C10.9368 2.28826 11 2.44087 11 2.6V3.8H14V5H2V3.8H5ZM6.2 3.2V3.8H9.8V3.2H6.2Z'
            fill='currentColor'
        />
    </svg>
)
export default Trash
