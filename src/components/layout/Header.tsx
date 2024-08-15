import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { When } from 'react-if';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';

import Button from '@/components/Button';
import Icons, { IconsProps } from '@/components/Icon';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const isLoggin = true;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const profileMenu = [{ href: '/profile', label: 'Profile', icon: 'User' }];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='sticky top-0 z-50 bg-white'>
            <div className='layout relative flex h-14 items-center justify-between'>
                <UnstyledLink href='/' className='font-bold hover:text-gray-600' onClick={() => setIsMenuOpen(false)}>
                    <Icons icon='Logo' width={120} height={32} />
                </UnstyledLink>
                <nav>
                    <div className=' flex items-center'>
                        <button className='block p-2 lg:hidden' onClick={toggleMenu}>
                            <Icons icon='Menu' />
                        </button>
                        <ul
                            className={`flex-col items-center justify-between space-x-8 lg:flex-row ${
                                isMenuOpen
                                    ? 'min-h-main absolute left-0 top-14 flex w-full !items-start !justify-start gap-3 !space-x-0 bg-white'
                                    : 'hidden'
                            } lg:flex`}
                        >
                            <UnstyledLink href='/' className='flex flex-row items-center gap-1'>
                                <Icons icon='Home' /> Home
                            </UnstyledLink>
                            <UnstyledLink href='/wallet' className='flex flex-row items-center gap-1'>
                                <Icons icon='Wallet' /> Wallet
                            </UnstyledLink>
                            <UnstyledLink href='/trading' className='flex flex-row items-center gap-1'>
                                <Icons icon='ChartGreen' /> Trading
                            </UnstyledLink>
                            <When condition={isMobile}>
                                <UnstyledLink href='/profile' className='flex flex-row items-center gap-1'>
                                    <Icons icon='User' /> Profile
                                </UnstyledLink>
                            </When>
                            {isLoggin && !isMobile ? (
                                <Menu as='div' className='relative inline-block text-left'>
                                    <div>
                                        <MenuButton className='flex flex-row items-center'>
                                            {({ active }) => (
                                                <button className={classNames(active && 'text-primary-200')}>
                                                    <Icons icon='User' /> Profile
                                                </button>
                                            )}
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className='z-100 absolute right-0 mt-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                                        anchor='bottom'
                                    >
                                        {profileMenu.map((link) => (
                                            <MenuItem key={link.href} as={Fragment}>
                                                {({ focus }) => (
                                                    <>
                                                        <UnstyledLink
                                                            className='flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'
                                                            href={link.href}
                                                        >
                                                            <Icons icon={link.icon as IconsProps} className='h-4 w-4' />
                                                            {link.label}
                                                        </UnstyledLink>
                                                        <span className='flex cursor-pointer flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                                                            <Icons icon='Logout' className='h-4 w-4' />
                                                            Logout
                                                        </span>
                                                    </>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            ) : (
                                <>
                                    <When condition={!isMobile}>
                                        <UnstyledLink href='/login' className='flex flex-row items-center gap-1'>
                                            Login
                                        </UnstyledLink>
                                        <ButtonLink href='/register'>Register</ButtonLink>
                                    </When>
                                </>
                            )}
                            <When condition={isMobile && !isLoggin}>
                                <div className='absolute bottom-14 flex w-full flex-row justify-between gap-3'>
                                    <UnstyledLink href='/login' className='w-full'>
                                        <Button variant='primaryOutline' block>
                                            Login
                                        </Button>
                                    </UnstyledLink>
                                    <UnstyledLink href='/register' className='w-full'>
                                        <Button variant='primary' block>
                                            Register
                                        </Button>
                                    </UnstyledLink>
                                </div>
                            </When>
                            <When condition={isMobile && isLoggin}>
                                <div className='absolute bottom-14 flex w-full flex-row justify-between gap-3'>
                                    <Button variant='grayOutline' block>
                                        Logout
                                    </Button>
                                </div>
                            </When>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
