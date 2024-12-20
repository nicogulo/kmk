module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // Disable the rule globally
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

        //#region  //*=========== Ban Types ===========
        '@typescript-eslint/ban-types': 'off',
        //#endregion  //*======== Ban Types ===========

        //#region  //*=========== No Empty Interface ===========
        '@typescript-eslint/no-empty-interface': 'off',
        //#endregion  //*======== No Empty Interface ===========

        //#region  //*=========== Unused Import ===========
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',

        //#endregion  //*======== Unused Import ===========

        //#region  //*=========== Import Sort ===========
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // ext library & side effect imports
                    ['^@?\\w', '^\\u0000'],
                    // {s}css files
                    ['^.+\\.s?css$'],
                    // Lib and hooks
                    ['^@/lib', '^@/hooks'],
                    // static data
                    ['^@/data'],
                    // components
                    ['^@/components', '^@/container'],
                    // zustand store
                    ['^@/store'],
                    // Other imports
                    ['^@/'],
                    // relative paths up until 3 level
                    [
                        '^\\./?$',
                        '^\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\./\\.\\.(?!/?$)'
                    ],
                    ['^@/types'],
                    // other that didnt fit in
                    ['^']
                ]
            }
        ]
        //#endregion  //*======== Import Sort ===========
    }
};
