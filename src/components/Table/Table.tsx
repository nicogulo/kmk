/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useComponentHydrated } from 'react-hydration-provider';
import { Case, Default, Switch, When } from 'react-if';

import classNames from '@/lib/classnames';

import ConditionalWrapper from '@/components/ConditionalWrapper';
import CustomScroll from '@/components/CustomScroll';
import EmptyState from '@/components/EmptyState';
import Icons from '@/components/Icon';
import { IllustrationProps } from '@/components/Illustrations/Illustrations';
import InfiniteScroll from '@/components/InfiniteScroll';
import Pagination from '@/components/Pagination';
import Skeleton from '@/components/Skeleton';

import isNull from '@/utils/isNull';

type Align = 'left' | 'center' | 'right';

interface TableData {
    /**
     * Key or index must same with data index at columns
     */
    [field: string]: any;
}

export interface TableColumn {
    /**
     * Display field of the data record
     */
    dataIndex: string;
    /**
     * Title of this column
     */
    title: string;
    /**
     * Width of this column
     */
    width?: number;
    /**
     * The specify which way that column is aligned
     */
    align?: Align;
    /**
     * Enable/disable sort of this column, default is true (enable)
     */
    sort?: boolean;
    /**
     * Renderer of the table cell
     */
    render?: (value: string | number, data: TableData, isExpanded: boolean) => React.ReactNode;
    /**
     * onclick header function
     */
    onHeaderClick?: () => void;
    /**
     * set header classname
     */
    headClassName?: string;
}

interface TableInfiniteScroll {
    /**
     * it tells the InfiniteScroll component on whether to call next function on reaching the bottom and shows an endMessage to the user
     */
    hasMore: boolean;
    /**
     * A threshold value defining when InfiniteScroll will call next. Default value is 0.8. It means the next will be called when user comes below 80% of the total height.
     */
    scrollThreshold?: number;
    /**
     * a function which must be called after reaching the bottom. It must trigger some sort of action which fetches the next data.
     */
    next: () => void;
}

interface Expandable {
    /**
     * Enable row can be expandable
     */
    rowExpandable: (record: TableData) => boolean;
    /**
     * Expanded container render for each row
     */
    expandedRowRender: (record: TableData, expanded: boolean) => ReactNode;
}

interface Scroll {
    /**
     * Set horizontal scrolling, can also be used to specify the width of the scroll area in pixel
     */
    x: number;
}

interface OnRow {
    onClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

interface TableProps {
    /**
     * Columns of table
     */
    columns: TableColumn[];
    /**
     * Data record array to be displayed, key or index must same with data index at columns
     */
    data?: TableData[];
    /**
     * Set table loading
     */
    loading?: boolean;
    /**
     * Set table loader component per data index (column)
     */
    loader?: TableData;
    /**
     * Set table loading row count
     */
    loadingRowCount?: number;
    /**
     * Set props on per row
     */
    onRow?: (record: TableData) => OnRow;
    /**
     * Sort function for custom sort, see Array.sort's compareFunction.
     */
    onSort?: (a: TableData, b: TableData, defaultSortFunc: () => number) => number;
    /**
     * Props for infinite scroll
     */
    infiniteScroll?: TableInfiniteScroll;
    /**
     * className
     */
    className?: string;
    /**
     * Wrapper className
     */
    wrapperClassName?: string;
    /**
     * Header className
     */
    headerClassName?: string;
    /**
     * Row's className
     */
    rowClassName?: (record: TableData) => string;
    /**
     * Body className
     */
    bodyClassName?: string;
    /**
     * Config expandable content
     */
    expandable?: Expandable;
    /**
     * Whether the table can be scrollable
     */
    scroll?: Scroll;
    /**
     * Set max row to be shown
     */
    maxRow?: number;
    /**
     * Set text when empty data
     */
    emptyMessage?: string | React.ReactNode;
    /**
     * Set subtitle when empty data
     */
    emptySubtitle?: string | React.ReactNode;
    /**
     * Set image when empty data
     */
    emptyImage?: IllustrationProps['name'];
    /**
     * Using custom scroll
     */
    customScroll?: boolean;
    /*
     * Set default sort data index
     */
    defaultSortDataIndex?: string;
    /**
     * Set default sort type
     */
    defaultSortType?: SortType;
    /**
     * Set scrolable target id
     */
    scrollableTarget?: string;
    /**
     * Set nohover row
     */
    noHover?: boolean;
    /**
     * With sort on header
     */
    withSort?: boolean;
    /**
     * page of pagination
     */
    currentPage?: number;
    /**
     * Page change callback
     * @param page The page number.
     * @returns void
     * @default () => {}
     */
    onPageChange?: (page: number) => void;
    /**
     * total of pages
     */
    totalPages?: number;
    /**
     * With pagination
     */
    withPagination?: boolean;
    /**
     * custom empty
     */
    customEmpty?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({
    columns,
    data,
    loading: loadingProp,
    loader: loaderProp,
    loadingRowCount,
    onRow,
    onSort,
    infiniteScroll,
    className: classNameProp,
    wrapperClassName,
    headerClassName,
    rowClassName,
    bodyClassName,
    expandable,
    scroll,
    maxRow,
    emptyMessage,
    emptySubtitle,
    emptyImage,
    customScroll,
    defaultSortDataIndex,
    defaultSortType,
    scrollableTarget,
    noHover,
    withSort,
    currentPage,
    onPageChange,
    totalPages,
    withPagination,
    customEmpty
}: TableProps) => {
    const hydrated = useComponentHydrated();
    const [loading, setLoading] = useState(loadingProp);
    const [sortDataIndex, setSortDataIndex] = useState<string | undefined>(defaultSortDataIndex);
    const [sortType, setSortType] = useState<SortType | undefined>(defaultSortType);
    const [expandedIndex, setExpandedIndex] = useState<number | undefined>(undefined);
    const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

    const bodyRef = useRef() as React.MutableRefObject<HTMLTableSectionElement>;

    const getScrollbarWidth = () => {
        const newWidth = bodyRef.current.offsetWidth - bodyRef.current.clientWidth;
        setScrollbarWidth(newWidth);
    };

    const handlePageChange = (page: number) => {
        onPageChange?.(page);
    };

    useEffect(() => {
        getScrollbarWidth();

        window.addEventListener('resize', getScrollbarWidth);
        return () => {
            window.removeEventListener('resize', getScrollbarWidth);
        };
    }, []);

    useEffect(() => {
        setLoading(loadingProp);
    }, [loadingProp]);

    useEffect(() => {
        const isEmptyData = !data || data.length === 0;
        const isExpandedIndex = typeof expandedIndex !== 'undefined';

        if (isEmptyData && isExpandedIndex) {
            setExpandedIndex(undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleExpandRow = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(undefined);
            return;
        }

        setExpandedIndex(index);
    };

    const handleNext = async () => {
        setLoading(true);
        await infiniteScroll?.next();
        setLoading(false);
    };

    const handleSetSort = (dataIndex: string) => {
        if (sortDataIndex === dataIndex) {
            switch (sortType) {
                case 'asc':
                    setSortDataIndex(sortDataIndex);
                    setSortType('desc');
                    break;
                case 'desc':
                    setSortDataIndex(undefined);
                    setSortType(undefined);
                    break;
                default:
                    setSortDataIndex(sortDataIndex);
                    setSortType('asc');
            }

            return;
        }

        setSortDataIndex(dataIndex);
        setSortType('asc');
    };

    const renderedHeaders = columns.map(
        ({ dataIndex, width, align = 'left', title, sort = withSort, onHeaderClick, headClassName }) => {
            const sortStatus = sortDataIndex === dataIndex ? sortType : undefined;
            const onSortActive = sortStatus === 'asc' || sortStatus === 'desc';

            return (
                <th
                    key={dataIndex}
                    onClick={onHeaderClick}
                    className={classNames(
                        'select-none px-4 py-2.5 text-xs font-normal uppercase text-gray-600 first-of-type:pl-0 last-of-type:pr-0',
                        headClassName
                    )}
                    style={{
                        width: `${width}px`,
                        textAlign: align
                    }}
                >
                    {sort ? (
                        <div
                            className={classNames('flex items-center justify-start', {
                                'justify-start': align === 'left',
                                'justify-center': align === 'center',
                                'justify-end': align === 'right'
                            })}
                        >
                            <span
                                className={classNames(
                                    'flex cursor-pointer items-center justify-start gap-1 rounded-none bg-transparent px-2 py-1',
                                    {
                                        'bg-primary-100': onSortActive,
                                        rounded: onSortActive
                                    }
                                )}
                                onClick={() => handleSetSort(dataIndex)}
                            >
                                {title}
                                <Switch>
                                    <Case condition={sortStatus === 'asc'}>
                                        <Icons icon='ChevronUp' width={18} height={18} />
                                    </Case>
                                    <Case condition={sortStatus === 'desc'}>
                                        <Icons icon='ChevronDown' width={18} height={18} />
                                    </Case>
                                    <Default>
                                        <Icons icon='Sort' width={18} height={18} />
                                    </Default>
                                </Switch>
                            </span>
                        </div>
                    ) : (
                        title
                    )}
                </th>
            );
        }
    );

    const renderedBody = () => {
        let sortedData = data ? [...data] : [];

        const emptyData = sortedData.length === 0;

        const loader = Array.from({ length: loadingRowCount || 10 }).map((_, index) => {
            const renderedDataByColumn = columns.map(({ dataIndex, width, align }) => (
                <td
                    key={dataIndex}
                    className='items-center px-4 py-2.5 first-of-type:pl-0 last-of-type:pr-0'
                    style={{
                        textAlign: align,
                        width: `${width}px`
                    }}
                >
                    {loaderProp?.[dataIndex] ?? <Skeleton />}
                </td>
            ));

            const className = rowClassName ? rowClassName({}) : '';

            return (
                // eslint-disable-next-line react/no-array-index-key
                <tr
                    key={index}
                    className={classNames(
                        'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                        className,
                        {
                            'hover:bg-gray-100 ': !noHover
                        }
                    )}
                    style={{
                        width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                    }}
                >
                    {renderedDataByColumn}
                </tr>
            );
        });

        if (!data && emptyData) {
            return loader;
        }

        if (emptyData) {
            if (customEmpty) {
                return customEmpty;
            }

            return (
                <tr
                    className={classNames(
                        'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                        {
                            'hover:bg-gray-100 ': !noHover
                        }
                    )}
                    style={{
                        width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                    }}
                >
                    <td colSpan={100}>
                        <EmptyState
                            className='pb-[52px] pt-2'
                            title={emptyMessage}
                            description={emptySubtitle}
                            illustration={emptyImage || 'Notfound'}
                        />
                    </td>
                </tr>
            );
        }

        if (sortDataIndex && sortType) {
            sortedData = sortedData.sort((a, b) => {
                const prevData = a?.[sortDataIndex];
                const nextData = b?.[sortDataIndex];

                if (isNull(prevData) || isNull(!nextData)) {
                    return 0;
                }

                const defaultSortFunc = () => {
                    if (typeof prevData === 'string' && typeof nextData === 'string') {
                        if (sortType === 'asc') {
                            return prevData.localeCompare(nextData);
                        }

                        return nextData.localeCompare(prevData);
                    }

                    if (typeof prevData === 'number' && typeof nextData === 'number') {
                        if (sortType === 'asc') {
                            return prevData - nextData;
                        }

                        return nextData - prevData;
                    }

                    return 0;
                };

                return onSort ? onSort(a, b, defaultSortFunc) : defaultSortFunc();
            });
        }

        if (maxRow) {
            sortedData = sortedData.slice(0, maxRow);
        }

        const renderedData = sortedData.map((item, index) => {
            const key = item?.key ?? index;
            const isExpandable = expandable?.rowExpandable(item) ?? false;
            const isExpanded = key === expandedIndex;

            const className = rowClassName ? rowClassName(item) : '';

            const renderedDataByColumn = columns.map(({ dataIndex, width, align, render }) => {
                const value = item?.[dataIndex];
                //     const Data = styled.td<DataProps>`
                //     align-items: center;
                //     text-align: ${({ align }) => align || "left"};
                //     padding: 10px 15px;

                //     &:first-of-type {
                //         padding-left: 0px;
                //     }

                //     &:last-of-type {
                //         padding-right: 0px;
                //     }
                // `

                return (
                    <td
                        key={dataIndex}
                        className={classNames(
                            'items-center px-4 py-2.5 first-of-type:pl-0 last-of-type:pr-0',
                            className,

                            {
                                expand: isExpanded
                            }
                        )}
                        style={{
                            textAlign: align,
                            width: `${width}px`
                        }}
                    >
                        {render?.(value, item || {}, isExpanded) || value}
                    </td>
                );
            });

            const rowProps = onRow?.(item);

            const handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
                rowProps?.onClick?.(event);

                if (isExpandable) {
                    handleExpandRow(key);
                }
            };

            return (
                <React.Fragment key={key}>
                    <tr
                        onClick={handleClick}
                        className={classNames(
                            'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                            className,
                            {
                                'cursor-pointer': isExpandable,
                                'border-b border-b-[#1E1E1E1A]': !isExpanded,
                                'bg-white': isExpanded,
                                'hover:bg-gray-100 ': !noHover && !isExpanded
                            }
                        )}
                        style={{
                            width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                        }}
                    >
                        {renderedDataByColumn}
                    </tr>

                    <When condition={isExpandable && isExpanded}>
                        <tr
                            className={classNames(
                                'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                                className,
                                {
                                    'cursor-pointer': isExpandable,
                                    'border-b border-b-[#1E1E1E1A]': !isExpanded,
                                    'bg-white': isExpanded,
                                    'hover:bg-gray-100 ': !noHover && !isExpanded
                                }
                            )}
                            style={{
                                width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                            }}
                        >
                            <td
                                className='flex items-center text-left first-of-type:pl-0 last-of-type:pr-0'
                                colSpan={columns.length}
                            >
                                {expandable?.expandedRowRender(item, isExpanded)}
                            </td>
                        </tr>
                    </When>
                </React.Fragment>
            );
        });

        return (
            <>
                {renderedData}
                {loading && loader}
            </>
        );
    };

    const dataLength = data?.length || 0;
    const dataEmpty = data?.length === 0;

    const isWidth = scroll?.x && `w-${scroll?.x}`;

    return (
        <>
            <style jsx>{`
                .styled-table {
                    min-width: 100%;
                    border-collapse: collapse;
                }
                .rcs-custom-scroll .rcs-custom-scrollbar {
                    width: 4px;
                    right: 1px !important;
                }
            `}</style>
            <div className={classNames('reku-new-theme', wrapperClassName, isWidth)}>
                <InfiniteScroll
                    hasMore={(dataLength > 0 && infiniteScroll?.hasMore) || false}
                    next={handleNext}
                    dataLength={dataLength || 0}
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    loader={<></>}
                    scrollableTarget={scrollableTarget}
                >
                    <table className={classNames(classNameProp, 'styled-table')}>
                        <tr
                            className={classNames(
                                'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                                headerClassName,
                                {
                                    'hover:bg-gray-100 ': !noHover
                                }
                            )}
                            style={{
                                width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                            }}
                        >
                            <When condition={!dataEmpty}>
                                <tr
                                    //  scrollbarWidth={scrollbarWidth}
                                    className={classNames(
                                        'table w-full table-fixed last-of-type:border-transparent last:dark:border-transparent',
                                        headerClassName
                                    )}
                                    style={{
                                        width: scrollbarWidth ? `calc(100% - ${scrollbarWidth}px)` : '100%'
                                    }}
                                >
                                    {renderedHeaders}
                                </tr>
                            </When>
                        </tr>
                        <ConditionalWrapper
                            condition={hydrated && (customScroll ?? false)}
                            // eslint-disable-next-line react/no-unstable-nested-components
                            wrapper={(children) => <CustomScroll>{children}</CustomScroll>}
                        >
                            <tbody
                                id='binaloka-table-body'
                                ref={bodyRef}
                                className={classNames('block', bodyClassName)}
                            >
                                {renderedBody()}
                            </tbody>
                        </ConditionalWrapper>
                    </table>
                </InfiniteScroll>
                {withPagination && (
                    <div className='!mx-auto !mt-8 flex items-center justify-center'>
                        <Pagination
                            page={currentPage as number}
                            onPageChange={handlePageChange}
                            pageCount={totalPages as number}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

Table.defaultProps = {
    data: undefined,
    loading: false,
    loader: undefined,
    loadingRowCount: 10,
    onRow: undefined,
    onSort: undefined,
    infiniteScroll: undefined,
    className: undefined,
    wrapperClassName: undefined,
    headerClassName: undefined,
    rowClassName: undefined,
    bodyClassName: undefined,
    expandable: undefined,
    scroll: undefined,
    maxRow: undefined,
    emptyMessage: undefined,
    emptySubtitle: undefined,
    customScroll: false,
    defaultSortDataIndex: undefined,
    defaultSortType: undefined,
    scrollableTarget: undefined,
    noHover: false,
    withSort: false,
    currentPage: 1,
    onPageChange: () => {},
    totalPages: undefined,
    withPagination: false
};

export default Table;
