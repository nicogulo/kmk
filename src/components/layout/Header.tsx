import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { When } from 'react-if';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';
import { ProfileStatus } from '@/hooks/useProfile';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Icons, { IconsProps } from '@/components/Icon';
import Illustration from '@/components/Illustrations';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/Modal';

const Header = () => {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const isLoggin = true;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const profileMenu = [{ href: '/profile', label: 'Profile', icon: 'User' }];
    const isProfile = router.pathname.includes('/profile');
    const isWallet = router.pathname === '/wallet';
    const isTrading = router.pathname === '/trading';
    const isMarket = router.pathname === '/markets';

    const profile = {
        userId: '123456',
        fullName: 'John Doe',
        email: 'john@gmail.com',
        country: 'Indonesia',
        phoneNumber: '08123456789',
        dateOfBirth: new Date(),
        basic: 1,
        advance: 2,
        phoneNumberUid: '123456'
    };
    const isUnverifiedBasic = ProfileStatus.UNVERIFIED === profile?.basic;
    const isVerifiedBasic = ProfileStatus.VERIFIED === profile?.basic;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className='sticky top-0 z-50 bg-white'>
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
                                        ? 'min-h-main absolute left-0 top-14 flex w-full !items-start !justify-start gap-3 !space-x-0 bg-white px-5'
                                        : 'hidden'
                                } lg:flex`}
                            >
                                <When condition={isLoggin}>
                                    <UnstyledLink
                                        href='/markets'
                                        className={classNames('flex flex-row items-center gap-1', {
                                            'text-primary-300': isMarket
                                        })}
                                    >
                                        <Icons icon='Repeat' /> Market
                                    </UnstyledLink>
                                    <UnstyledLink
                                        href='/wallet'
                                        className={classNames('flex flex-row items-center gap-1', {
                                            'text-primary-300': isWallet
                                        })}
                                    >
                                        <Icons icon='Wallet' /> Wallet
                                    </UnstyledLink>
                                    <span
                                        className={classNames(
                                            'flex cursor-pointer flex-row items-center gap-1 text-gray-700',
                                            {
                                                'text-primary-300': isTrading
                                            }
                                        )}
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <Icons icon='ChartGreen' /> Trading
                                    </span>
                                    <When condition={isMobile}>
                                        <UnstyledLink
                                            href='/profile'
                                            className={classNames('flex flex-row items-center gap-1', {
                                                'text-primary-300': isProfile
                                            })}
                                        >
                                            <Icons icon='User' /> Profile
                                        </UnstyledLink>
                                    </When>
                                </When>
                                {isLoggin && !isMobile ? (
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
                                            <ButtonLink href='/register'>Create Account</ButtonLink>
                                        </When>
                                    </>
                                )}
                                <When condition={isMobile && !isLoggin}>
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
                                <When condition={isMobile && isLoggin}>
                                    <div className='absolute bottom-14 !mr-5 flex w-[calc(100vw-40px)] flex-row justify-between gap-3'>
                                        <Button variant='grayOutline' block>
                                            Logout
                                        </Button>
                                    </div>
                                </When>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </header>

            <Modal
                title={
                    <>
                        <When condition={isUnverifiedBasic}>
                            <Illustration name='Notfound' />
                        </When>
                        <When condition={isVerifiedBasic}>
                            <Illustration name='Bell' />
                        </When>
                    </>
                }
                open={isOpen}
                onClose={handleClose}
                closePosition='right'
                headerClassName='!items-start'
                footer={
                    <>
                        <When condition={isUnverifiedBasic}>
                            <div className='flex flex-col gap-3'>
                                <Button block onClick={() => router.push(`/profile/kyc`)}>
                                    Verify Now
                                </Button>
                            </div>
                        </When>
                        <When condition={isVerifiedBasic}>
                            <div className='flex flex-row gap-3'>
                                <Button block onClick={handleClose} variant='grayOutline'>
                                    Cancel
                                </Button>
                                <Button block onClick={() => router.push(`/profile/kyc`)}>
                                    Proced
                                </Button>
                            </div>
                        </When>
                    </>
                }
            >
                <div className='flex flex-col gap-2'>
                    <When condition={isUnverifiedBasic}>
                        <p className='h4 text-gray-800'>Complete Identity Verification</p>
                        <p className='xs text-[#637381]'>You must complete identity verification to start trading</p>
                    </When>
                    <When condition={isVerifiedBasic}>
                        <p className='h4 text-gray-800'>Open Trading Page</p>
                        <p className='xs text-[#637381]'>
                            You're about to be redirected to the trading page, which will open in a new tab. Do you want
                            to proceed?
                        </p>
                    </When>
                </div>
            </Modal>
        </>
    );
};

export default Header;
