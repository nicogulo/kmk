/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactPaginate from 'react-paginate';

import Icons from '@/components/Icon';

const sizes = {
    sm: {
        pageCss: 'w-6 h-6 text-xs'
    },
    md: {
        pageCss: 'w-7 h-7 text-sm'
    }
};

type Size = keyof typeof sizes;

interface Props {
    /**
     * The number of pages to display for the pagination component.
     */
    pageCount: number;
    /**
     * The current page number.
     */
    page: number;
    /**
     * Page change callback.
     * @param page The page number.
     * @returns void
     * @default () => {}
     */
    onPageChange?: (page: number) => void;
    /**
     * The size of the pagination component.
     * @default "md"
     */
    size?: Size;
}

const Pagination: React.FC<Props> = ({ page, onPageChange, pageCount, size = 'md' }) => {
    const previousLabel = <Icons icon='ChevronUp' className='-rotate-90' width={24} height={24} color='#758089' />;
    const nextLabel = <Icons icon='ChevronUp' className='rotate-90' width={24} height={24} color='#758089' />;

    return (
        <ReactPaginate
            forcePage={page ? page - 1 : undefined}
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            onClick={(event) => {
                if (typeof event?.nextSelectedPage !== 'undefined') {
                    onPageChange?.(event.nextSelectedPage + 1);
                }
            }}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            className='container-pagination'
            pageClassName='page-pagination'
            previousClassName='arrow-pagination'
            nextClassName='arrow-pagination'
            breakClassName='break-pagination'
        />
    );
};

Pagination.defaultProps = {
    onPageChange: () => {},
    size: 'md'
};

export default Pagination;
