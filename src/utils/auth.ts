/* eslint-disable import/prefer-default-export */
import { OptionsType } from 'cookies-next/lib/types';

import { APP_ENV } from '@/constant/env';
import { isBrowser } from '@/utils/browser';

import { getCookie, removeCookie, setCookie } from './cookies';

const isDevelopment = APP_ENV?.toLocaleLowerCase() === 'development';
const hashKey = isDevelopment ? 'devuhash' : 'uhash';
const tokenKey = isDevelopment ? 'devkmkahash' : 'kmkhash';

export const getAuth = (options?: OptionsType) => {
    const uhash = getCookie(hashKey, options) ?? undefined;
    const kmkhash = getCookie(tokenKey, options) ?? undefined;

    const checkAuth = Boolean((uhash && kmkhash) || kmkhash);

    return {
        token: checkAuth ? kmkhash : undefined,
        hash: uhash || undefined,
        isLoggedIn: checkAuth || false
    };
};

export const setAuth = ({ hash, token }: Auth) => {
    if (hash) setCookie(hashKey, hash);
    if (token) setCookie(tokenKey, token);

    return true;
};

if (isBrowser && isDevelopment) {
    window.setAuth = setAuth;
}

export const resetAuth = () => {
    removeCookie(hashKey);
    removeCookie(tokenKey);

    return true;
};
