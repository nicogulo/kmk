/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const XCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316583 10.2161 0.316582 5.78392 3.05025 3.05025C5.78392 0.316582 10.2161 0.316582 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497ZM9.76742 6.23189C9.57216 6.03663 9.25558 6.03663 9.06032 6.23189L7.99965 7.29255L6.93899 6.23189C6.74373 6.03663 6.42715 6.03663 6.23189 6.23189C6.03663 6.42715 6.03663 6.74373 6.23189 6.93899L7.29255 7.99965L6.23189 9.06032C6.03663 9.25558 6.03663 9.57216 6.23189 9.76742C6.42715 9.96268 6.74373 9.96268 6.93899 9.76742L7.99965 8.70676L9.06032 9.76742C9.25558 9.96268 9.57216 9.96268 9.76742 9.76742C9.96268 9.57216 9.96268 9.25558 9.76742 9.06032L8.70676 7.99965L9.76742 6.93899C9.96268 6.74373 9.96268 6.42715 9.76742 6.23189Z'
            fill='currentColor'
        />
    </svg>
)
export default XCircle