/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import ReactPaginate from 'react-paginate';

import classNames from '@/lib/classnames';

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
    const previousLabel = <Icons icon='ChevronLeft' width={24} height={24} />;
    const nextLabel = <Icons icon='ChevronRight' width={24} height={24} />;

    return (
        <div className='flex w-fit items-center justify-center gap-1'>
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
                className=''
                pageClassName={classNames(
                    'flex items-center justify-center rounded-sm font-semibold cursor-pointer',
                    sizes[size].pageCss,
                    'text-text-neutral-main dark:text-dark-text-neutral-main hover:text-teal hover:dark:text-dark-teal'
                )}
                previousClassName='flex cursor-pointer first:mr-2 last:ml-2'
                nextClassName='flex cursor-pointer first:mr-2 last:ml-2'
                breakClassName={classNames(
                    'flex cursor-pointer',
                    sizes[size].pageCss,
                    'text-additional hover:text-teal dark:text-dark-additional hover:dark:text-dark-teal'
                )}
            />
            <style jsx>{`
                .disabled {
                    cursor: not-allowed;
                }

                .disabled a {
                    color: #aaaaaa;
                }

                .selected {
                    background-color: var(--background-subtle-teal, #e0f7fa);
                }

                .selected a {
                    color: var(--teal, #00796b);
                }

                .disabled .cursor-not-allowed a {
                    color: var(--icon-disabled, #bdbdbd);
                }
            `}</style>
        </div>
    );
};

Pagination.defaultProps = {
    onPageChange: () => {},
    size: 'md'
};

export default Pagination;
