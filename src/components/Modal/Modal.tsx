import React, { Fragment, PropsWithChildren } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import classNames from '@/lib/classnames';
import { When } from 'react-if';
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
    closeBackdrop
}: ModalProps) => (
    <Transition appear show={open} as={Fragment}>
        <Dialog
            as='div'
            className='relative z-50'
            onClose={() => {
                if (closeBackdrop) onClose();
            }}
        >
            <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black/25' />
            </Transition.Child>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center text-center'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel
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
                                    <Dialog.Title
                                        as='h3'
                                        className='flex-1 text-lg font-medium leading-6 text-gray-900'
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <Icons
                                        icon='XClose'
                                        width={24}
                                        height={24}
                                        className='cursor-pointer'
                                        onClick={onClose}
                                        color='#758089'
                                    />
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
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);

export default Modal;
