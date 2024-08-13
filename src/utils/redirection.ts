/* eslint-disable import/prefer-default-export */

export const getRedirectHref = (path: string) => {
    if (path === '/' || path.includes('register') || path.includes('login')) {
        return '/login';
    }

    return `/login?redirect=${path}`;
};
