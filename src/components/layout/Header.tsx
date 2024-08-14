import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from '@/lib/classnames';

import Icons, { IconsProps } from '@/components/Icon';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 1279 });
    const isLoggin = false;

    const profileMenu = [
        { href: '/profile', label: 'Profile', icon: 'User' },
        { href: '/support', label: 'Support', icon: 'User' },
        { href: '/license', label: 'License', icon: 'User' }
    ];
    return (
        <header className='sticky top-0 z-50 bg-white'>
            <div className='layout flex h-14 items-center justify-between'>
                <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
                    <Icons icon='Logo' width={120} height={32} />
                </UnstyledLink>
                <nav>
                    <ul className='flex items-center justify-between space-x-8'>
                        <UnstyledLink href='/' className='flex flex-row items-center gap-1'>
                            <Icons icon='Home' /> Home
                        </UnstyledLink>
                        <UnstyledLink href='/wallet' className='flex flex-row items-center gap-1'>
                            <Icons icon='Wallet' /> Wallet
                        </UnstyledLink>
                        <UnstyledLink href='/trading' className='flex flex-row items-center gap-1'>
                            <Icons icon='ChartGreen' /> Trading
                        </UnstyledLink>
                        {isLoggin ? (
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
                                                <UnstyledLink
                                                    className='flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'
                                                    href={link.href}
                                                >
                                                    <Icons icon={link.icon as IconsProps} className='h-4 w-4' />
                                                    {link.label}
                                                </UnstyledLink>
                                            )}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        ) : (
                            <>
                                <UnstyledLink href='/login' className='flex flex-row items-center gap-1'>
                                    Login
                                </UnstyledLink>
                                <ButtonLink href='/register'>Register</ButtonLink>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
