import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { When } from 'react-if';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';
import useAuth, { useLogout } from '@/hooks/useAuth';
import useLiveness from '@/hooks/useLiveness';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons, { IconsProps } from '@/components/Icon';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModalTrade from '@/components/Modal/ModalTrade';

const Header = () => {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const {
        auth: { isLoggedIn }
    } = useAuth();
    const { logout } = useLogout();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isLiveness } = useLiveness();

    const profileMenu = [{ href: '/profile', label: 'Profile', icon: 'User' }];
    const isProfile = router.pathname.includes('/profile');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header
                className={classNames('sticky top-0 z-50 bg-white', {
                    hidden: isLiveness
                })}
            >
                <Container className=' relative flex h-14 items-center justify-between'>
                    <UnstyledLink
                        href='/'
                        className='font-bold hover:text-gray-700'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Icons icon='Logo' width={120} height={32} />
                    </UnstyledLink>
                    <nav>
                        <div className='flex w-full items-center'>
                            <button className='block p-2 lg:hidden' onClick={toggleMenu}>
                                <Icons icon='Menu' />
                            </button>
                            <ul
                                className={`flex-col items-center justify-between space-x-8 lg:flex-row ${
                                    isMenuOpen
                                        ? 'min-h-main absolute left-0 top-14 flex w-full !items-start !justify-start gap-3 !space-x-0 bg-white px-5 pt-4 xl:pt-0'
                                        : 'hidden'
                                } lg:flex`}
                            >
                                <When condition={isLoggedIn}>
                                    <When condition={isMobile}>
                                        <UnstyledLink
                                            href='/profile'
                                            className={classNames('flex flex-row items-center gap-1', {
                                                'text-primary-300': isProfile
                                            })}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Icons icon='User' /> Profile
                                        </UnstyledLink>
                                    </When>
                                </When>
                                {isLoggedIn && !isMobile ? (
                                    <Menu as='div' className='relative inline-block text-left'>
                                        <div>
                                            <MenuButton
                                                className={classNames('flex flex-row items-center text-gray-700', {
                                                    'text-primary-300': isProfile
                                                })}
                                            >
                                                <Icons icon='User' /> Profile
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
                                                                <Icons
                                                                    icon={link.icon as IconsProps}
                                                                    className='h-4 w-4'
                                                                />
                                                                {link.label}
                                                            </UnstyledLink>
                                                            <span
                                                                className='text-error-300 flex cursor-pointer flex-row items-center gap-2 px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900'
                                                                onClick={() => logout(true)}
                                                            >
                                                                <Icons icon='Trash' className='h-4 w-4' />
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
                                            <UnstyledLink href='/register' className='w-full'>
                                                <Button variant='primary'>Create Account</Button>
                                            </UnstyledLink>
                                        </When>
                                    </>
                                )}
                                <When condition={isMobile && !isLoggedIn}>
                                    <div className='absolute bottom-1/2 flex w-[calc(100vw-40px)] flex-col justify-between gap-3'>
                                        <UnstyledLink href='/login' className='w-full'>
                                            <Button variant='primaryOutline' block>
                                                Login
                                            </Button>
                                        </UnstyledLink>
                                        <UnstyledLink href='/register' className='w-full'>
                                            <Button variant='primary' block>
                                                Create Account
                                            </Button>
                                        </UnstyledLink>
                                    </div>
                                </When>
                                <When condition={isMobile && isLoggedIn}>
                                    <div className='absolute bottom-14 !mr-5 flex w-[calc(100vw-40px)] flex-row justify-between gap-3'>
                                        <Button variant='grayOutline' block onClick={() => logout(true)}>
                                            Logout
                                        </Button>
                                    </div>
                                </When>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </header>
            <ModalTrade isOpen={isOpen} handleClose={handleClose} />
        </>
    );
};

export default Header;
