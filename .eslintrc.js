const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// airbnbルールでfor...ofのみ許可
const NO_RESTRICTED_SYNTAX_OPTION= [
    {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
];

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        useJSXTextNode: false,
        project: './tsconfig.json',
        tsconfigRootDir: '.',
    },
    env: {
        jest: true,
        browser: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'prettier/prettier': [ERROR, {
            tabWidth: 4,
            singleQuote: true,
            printWidth: 100,
            trailingComma: "all",
        }],
        'import/no-cycle': OFF,
        'no-plusplus': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/prefer-interface': OFF,
        '@typescript-eslint/no-unused-vars': [ERROR, {
            varsIgnorePattern: '^_',
            args: 'after-used',
            ignoreRestSiblings: true,
            caughtErrorsIgnorePattern: "e|err|error"
        }],
        '@typescript-eslint/no-use-before-define': [ERROR, {
            typedefs: false // ESLint側が対応されていなくて動かない
        }],
        'max-len': [ERROR, 120],
        'curly': [ERROR, 'multi-or-nest'],
        'react-hooks/rules-of-hooks': ERROR,
        'react-hooks/exhaustive-deps': WARNING,
        'react/jsx-filename-extension': [
            ERROR,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'import/extensions': [
            ERROR,
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-restricted-syntax': [ERROR, ...NO_RESTRICTED_SYNTAX_OPTION],
    },
};
