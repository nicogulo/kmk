import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import React, { Fragment, PropsWithChildren } from 'react';
import { When } from 'react-if';

import classNames from '@/lib/classnames';

import Icons from '../Icon';

interface ModalProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    closePosition?: 'left' | 'right';
    width?: number;
    footer?: React.ReactNode;
    fullscreen?: boolean;
    wrapperClassName?: string;
    headerClassName?: string;
    footerClassName?: string;
    closeBackdrop?: boolean;
    withClose?: boolean;
}

const Modal = ({
    open,
    onClose,
    title,
    closePosition = 'left',
    children,
    width,
    footer,
    fullscreen,
    wrapperClassName,
    headerClassName,
    footerClassName,
    closeBackdrop,
    withClose = true
}: ModalProps) => (
    <Transition appear show={open} as={Fragment}>
        <Dialog
            as='div'
            className='relative z-50'
            onClose={() => {
                if (closeBackdrop) onClose();
            }}
        >
            <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black/25' />
            </TransitionChild>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center text-center'>
                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <DialogPanel
                            className={classNames(
                                "'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                wrapperClassName,
                                {
                                    'h-[100dvh] w-[100vw] p-3': fullscreen,
                                    'w-[640px] rounded-xl p-6': !fullscreen
                                }
                            )}
                            style={{
                                // eslint-disable-next-line no-nested-ternary
                                width: fullscreen ? '100vw' : width ? `${width}px` : '420px'
                            }}
                        >
                            <div className='relative flex h-full flex-col gap-4'>
                                <div
                                    className={classNames(
                                        'relative flex items-center justify-between gap-3',
                                        headerClassName,
                                        {
                                            'flex-row-reverse': closePosition === 'left'
                                        }
                                    )}
                                >
                                    <DialogTitle as='h3' className='flex-1 text-lg font-medium leading-6 text-gray-900'>
                                        {title}
                                    </DialogTitle>
                                    <When condition={withClose}>
                                        <Icons
                                            icon='XClose'
                                            width={24}
                                            height={24}
                                            className='cursor-pointer'
                                            onClick={onClose}
                                            color='#758089'
                                        />
                                    </When>
                                </div>
                                <div
                                    className={classNames('scrollbar-none flex-1 overflow-y-auto', {
                                        'h-full': fullscreen,
                                        'max-h-[520px]': !fullscreen
                                    })}
                                >
                                    {children}
                                </div>
                                <When condition={!!footer}>
                                    <div className={classNames('-m-3 ', footerClassName)}>
                                        <div className='p-3'>{footer}</div>
                                    </div>
                                </When>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
);

export default Modal;
