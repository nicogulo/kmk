/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
    eslint: {
        dirs: ['src']
    },
    i18n,

    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: ['cdn.jsdelivr.net']
    },

    // SVGR
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        icon: true
                    }
                }
            ]
        });

        return config;
    }
};

module.exports = nextConfig;
