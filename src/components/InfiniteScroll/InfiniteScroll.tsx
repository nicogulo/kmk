/* eslint-disable @typescript-eslint/ban-types */
import ReactInfiniteScroll from 'react-infinite-scroll-component';

interface InfiniteScrollProps extends React.PropsWithChildren<{}> {
    dataLength: number;
    next: () => void;
    hasMore: boolean;
    loader: React.ReactNode;
    scrollableTarget?: string;
    scrollThreshold?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
    children,
    dataLength,
    next,
    hasMore,
    loader,
    scrollableTarget,
    scrollThreshold
}: InfiniteScrollProps) => (
    <ReactInfiniteScroll
        dataLength={dataLength}
        next={next}
        hasMore={hasMore}
        loader={loader}
        scrollableTarget={scrollableTarget}
        scrollThreshold={scrollThreshold}
    >
        {children}
    </ReactInfiniteScroll>
);

InfiniteScroll.defaultProps = {
    scrollableTarget: undefined,
    scrollThreshold: undefined
};

export default InfiniteScroll;
