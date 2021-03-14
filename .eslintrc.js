module.exports = {
    parser: "babel-eslint",
    extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ["/node_modules/**", "/build/**"],
    rules: {
        "no-unused-vars": ["warn", { args: "none", argsIgnorePattern: "req|res|next|val" }],
        "react/prop-types": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "arrow-body-style": ["error", "as-needed"],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
