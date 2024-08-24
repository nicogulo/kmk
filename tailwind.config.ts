import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                IBM_Plex_Sans: 'var(--font-IBM_Plex_Sans)'
            },
            colors: {
                primary: {
                    // Customize it on globals.css :root
                    50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
                    100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
                    600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
                    700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
                    800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
                    900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
                    950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)'
                },
                secondary: {
                    // Customize it on globals.css :root
                    50: 'rgb(var(--tw-color-secondary-50) / <alpha-value>)',
                    100: 'rgb(var(--tw-color-secondary-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-secondary-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-secondary-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-secondary-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-secondary-500) / <alpha-value>)'
                },
                gray: {
                    // Customize it on globals.css :root
                    50: 'rgb(var(--tw-color-gray-50) / <alpha-value>)',
                    100: 'rgb(var(--tw-color-gray-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-gray-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-gray-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-gray-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-gray-500) / <alpha-value>)',
                    600: 'rgb(var(--tw-color-gray-600) / <alpha-value>)',
                    700: 'rgb(var(--tw-color-gray-700) / <alpha-value>)',
                    800: 'rgb(var(--tw-color-gray-800) / <alpha-value>)',
                    900: 'rgb(var(--tw-color-gray-900) / <alpha-value>)'
                },
                success: {
                    // Customize it on globals.css :root
                    100: 'rgb(var(--tw-color-success-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-success-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-success-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-success-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-success-500) / <alpha-value>)'
                },
                error: {
                    // Customize it on globals.css :root
                    100: 'rgb(var(--tw-color-error-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-error-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-error-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-error-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-error-500) / <alpha-value>)'
                },
                warning: {
                    // Customize it on globals.css :root
                    100: 'rgb(var(--tw-color-warning-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-warning-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-warning-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-warning-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-warning-500) / <alpha-value>)'
                },
                info: {
                    // Customize it on globals.css :root
                    100: 'rgb(var(--tw-color-info-100) / <alpha-value>)',
                    200: 'rgb(var(--tw-color-info-200) / <alpha-value>)',
                    300: 'rgb(var(--tw-color-info-300) / <alpha-value>)',
                    400: 'rgb(var(--tw-color-info-400) / <alpha-value>)',
                    500: 'rgb(var(--tw-color-info-500) / <alpha-value>)'
                },
                'text-transparent': {
                    5: 'rgba(30, 30, 30, 0.05)',
                    10: 'rgba(30, 30, 30, 0.1)',
                    15: 'rgba(30, 30, 30, 0.15)',
                    20: 'rgba(30, 30, 30, 0.2)'
                },
                dark: '#222222'
            },
            keyframes: {
                flicker: {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
                        opacity: '0.99',
                        filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
                    },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
                        opacity: '0.4',
                        filter: 'none'
                    }
                },
                shimmer: {
                    '0%': {
                        backgroundPosition: '-700px 0'
                    },
                    '100%': {
                        backgroundPosition: '700px 0'
                    }
                }
            },
            animation: {
                flicker: 'flicker 3s linear infinite',
                shimmer: 'shimmer 1.3s linear infinite'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
} satisfies Config;
