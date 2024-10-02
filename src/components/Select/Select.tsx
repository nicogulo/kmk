import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import classNames from '@/lib/classnames';

import Icons from '@/components/Icon';

interface SelectProps {
    selected: any;
    setSelected: (value: any) => void;
    items: any[];
    label: string;
    disabled?: boolean;
    name: string;
    classNameWrapper?: string;
    buttonClassName?: string;
    withIconSelect?: boolean;
}

const Select: React.FC<SelectProps> = ({
    selected,
    setSelected,
    items,
    label,
    disabled,
    name,
    classNameWrapper,
    buttonClassName,
    withIconSelect
}) => (
    <Listbox value={selected} onChange={setSelected} disabled={disabled} name={name}>
        {({ open }) => (
            <div className={classNames('relative mt-1 w-full', classNameWrapper)}>
                {label && <span className='text-xs font-normal text-[#525D66]'>{label}</span>}

                <ListboxButton
                    className={classNames(
                        'relative flex h-12 w-full cursor-pointer flex-row items-center rounded border border-[#E8E8E9] bg-white p-4 text-left ',
                        buttonClassName,
                        {
                            'border-primary-300': open,
                            'cursor-not-allowed': disabled
                        }
                    )}
                >
                    <div className='flex flex-col gap-1'>
                        <span
                            className={classNames('truncate text-sm font-bold text-[#18181E]', {
                                '!font-normal !text-[#8B8B8E]': selected?.name === undefined
                            })}
                        >
                            {selected?.name || label}
                        </span>
                    </div>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
                        <Icons icon='DoubleChevron' width={20} height={20} color='#919EAB' />
                    </span>
                </ListboxButton>

                {open && (
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <ListboxOptions className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                            {items?.length === 0 ? (
                                <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                                    Nothing found.
                                </div>
                            ) : (
                                items?.map((item, itemIdx) => (
                                    <ListboxOption
                                        key={itemIdx}
                                        className={({ active, selected: select }) =>
                                            classNames(
                                                'felx-row relative m-2 flex cursor-pointer select-none justify-between rounded px-2 py-2',
                                                {
                                                    'bg-[#F5F7FA]': active || select,
                                                    'cursor-not-allowed': disabled
                                                }
                                            )
                                        }
                                        value={item}
                                    >
                                        <p
                                            className={classNames('block truncate text-sm font-normal text-[#18181E]', {
                                                '!text-primary-300 !fontybold': selected?.name === item.name
                                            })}
                                        >
                                            {item.name}
                                        </p>
                                        {selected?.name === item.name && withIconSelect && (
                                            <Icons
                                                icon='ChecklistCircle'
                                                className='absolute right-2 top-2'
                                                width={16}
                                                height={16}
                                                color='#14B2E6'
                                            />
                                        )}
                                    </ListboxOption>
                                ))
                            )}
                        </ListboxOptions>
                    </Transition>
                )}
            </div>
        )}
    </Listbox>
);

export default Select;
