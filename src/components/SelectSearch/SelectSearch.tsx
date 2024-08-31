import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import React, { useState } from 'react';

import classNames from '@/lib/classnames';

import Icons from '@/components/Icon';

interface SelectSearchProps {
    selected: any;
    items: any[];
    label: string;
    disabled?: boolean;
    name: string;
    classNameWrapper?: string;
    className?: string;
    search?: string;
    onChange?: (value: any) => void;
    type?: string;
    readOnly?: boolean;
    required?: boolean;
    withAction?: boolean;
    action?: React.ReactNode;
}

const SelectSearch: React.FC<SelectSearchProps> = ({
    selected,
    items,
    label,
    disabled,
    name,
    classNameWrapper,
    className,
    search,
    onChange,
    type = 'text',
    readOnly = false,
    required,
    withAction = false,
    action
}) => {
    const [query, setQuery] = useState(search ?? '');
    const [openMenu, setOpenMenu] = useState(false);

    const filteredData =
        query === ''
            ? items
            : items.filter((item) =>
                  item.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
              );
    return (
        <Combobox value={selected} onChange={onChange} disabled={disabled} name={name}>
            {({ open }) => (
                <div className={classNames('relative mt-1 w-full', classNameWrapper)}>
                    {label && (
                        <span className='text-xs font-normal text-[#525D66]'>
                            {label} {required && <span className={classNames('text-xs text-[#C9353F]')}>*</span>}
                        </span>
                    )}
                    <div
                        className={classNames(
                            'border-text-transparent-10 relative flex h-12 w-full flex-row items-center rounded border bg-white text-left ',
                            className,
                            {
                                'border-primary-300': open,
                                'cursor-not-allowed': disabled
                            }
                        )}
                        onClick={() => {
                            setOpenMenu((e) => !e);
                        }}
                    >
                        <div className='flex w-full flex-col'>
                            <ComboboxInput
                                className={classNames(
                                    'w-full truncate border-none text-sm  text-gray-800 outline-none placeholder:font-normal placeholder:text-[#07142280] focus:ring-0 disabled:bg-white',
                                    {
                                        'cursor-pointer': readOnly
                                    }
                                )}
                                displayValue={(person: any) => person.name}
                                onChange={(event: any) => {
                                    onChange?.(event.target.value);
                                    setQuery(event.target.value);
                                }}
                                onBlur={() => {
                                    setTimeout(() => {
                                        setOpenMenu(false);
                                    }, 200);
                                }}
                                type={type}
                                name={name}
                                placeholder={label}
                                autoComplete='off'
                                readOnly={readOnly}
                            />
                        </div>
                        <ComboboxButton className='absolute inset-y-0 right-0 flex w-fit items-center pr-4'>
                            <Icons icon='DoubleChevron' width={20} height={20} color='#919EAB' />
                        </ComboboxButton>
                    </div>

                    {openMenu && (
                        <ComboboxOptions
                            static
                            className='border-text-transparent-10 absolute z-[51] mt-1 max-h-60 w-full overflow-auto rounded border bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm'
                        >
                            {filteredData.length === 0 && query !== '' ? (
                                <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                                    Nothing found.
                                </div>
                            ) : (
                                filteredData.map((item, itemIdx) => (
                                    <ComboboxOption
                                        key={itemIdx}
                                        className={({ active, selected: select }) =>
                                            classNames('relative mx-2 cursor-pointer select-none rounded px-2 py-2', {
                                                'bg-[#F5F7FA]': active || select,
                                                'cursor-not-allowed': disabled
                                            })
                                        }
                                        value={item}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        <p className='block truncate text-sm font-normal text-gray-800'>{item.name}</p>
                                    </ComboboxOption>
                                ))
                            )}

                            {withAction && (
                                <ComboboxOption
                                    className='border-t-text-transparent-10 relative cursor-pointer select-none border-t px-4 py-2'
                                    value={query}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {action}
                                </ComboboxOption>
                            )}
                        </ComboboxOptions>
                    )}
                </div>
            )}
        </Combobox>
    );
};

export default SelectSearch;
