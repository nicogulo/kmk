/* eslint-disable @typescript-eslint/ban-types */
import React, { useImperativeHandle, useRef, useState } from 'react';
import ReactCustomScroll from 'react-custom-scroll';

export interface CustomScrollRef {
    scrollTo: (top: number) => void;
    scrollToId: (id: string) => void;
    getHasScroll: () => boolean;
}

interface Props extends React.PropsWithChildren<{}> {
    flex?: string;
}

const CustomScroll = React.forwardRef<CustomScrollRef, Props>(({ children, flex }, ref) => {
    const customScrollRef = useRef<any>();
    const [scrollTo, setScrollTo] = useState<number>();

    useImperativeHandle(ref, () => ({
        scrollTo: (top: number) => {
            setScrollTo(top);
        },
        scrollToId: (id: string) => {
            const el = document.querySelector(`#${id}`) as HTMLElement | null;

            if (el) {
                const top = el.offsetTop;
                setScrollTo(top - 10);
            }
        },
        getHasScroll: () => customScrollRef.current.hasScroll
    }));

    const handleScroll = () => {
        setScrollTo(undefined);
    };

    return (
        <>
            <style jsx>{`
                .rcs-custom-scroll {
                    width: 100%;
                    min-height: 0;
                    min-width: 0;
                }
                .rcs-custom-scroll .rcs-outer-container {
                    overflow: hidden;
                }
                .rcs-custom-scroll .rcs-outer-container .rcs-positioning {
                    position: relative;
                }
                .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar {
                    opacity: 1;
                    transition-duration: 0.2s;
                }
                .rcs-custom-scroll .rcs-inner-container {
                    overflow-x: hidden;
                    overflow-y: scroll;
                    -webkit-overflow-scrolling: touch;
                }
                .rcs-custom-scroll .rcs-inner-container:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    height: 0;
                    background-image: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.2) 0%,
                        rgba(0, 0, 0, 0.05) 60%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    pointer-events: none;
                    transition: height 0.1s ease-in;
                    will-change: height;
                }
                .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after {
                    height: 5px;
                    transition: height 0.15s ease-out;
                }
                .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container {
                    user-select: none;
                }
                .rcs-custom-scroll .rcs-custom-scrollbar {
                    position: absolute;
                    height: 100%;
                    width: 8px;
                    right: 0;
                    opacity: 0;
                    z-index: 1;
                    transition: opacity 0.4s ease-out;
                    padding: 8px 0;
                    box-sizing: border-box;
                    will-change: opacity;
                    pointer-events: none;
                }
                .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl {
                    right: auto;
                    left: 3px;
                }
                .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar {
                    opacity: 1;
                }
                .rcs-custom-scroll .rcs-custom-scroll-handle {
                    position: absolute;
                    width: 100%;
                    top: 0;
                }
                .rcs-custom-scroll .rcs-inner-handle {
                    width: calc(100% - 24px);
                    margin-top: 12px;
                    background-color: var(--neutral-200);
                    border-radius: 100%;
                }
            `}</style>

            <ReactCustomScroll
                scrollTo={scrollTo}
                onScroll={handleScroll}
                allowOuterScroll
                flex={flex}
                ref={customScrollRef}
            >
                {children}
            </ReactCustomScroll>
        </>
    );
});

CustomScroll.defaultProps = {
    flex: undefined
};

export default CustomScroll;
