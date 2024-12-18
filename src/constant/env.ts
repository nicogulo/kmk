export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;

export const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
export const COOKIE_PREFIX = process.env.NEXT_PUBLIC_COOKIE_PREFIX;

export const VERIHUB_APP_ID = process.env.NEXT_PUBLIC_VERIHUB_APP_ID;
export const VERIHUB_APP_KEY = process.env.NEXT_PUBLIC_VERIHUB_APP_KEY;
