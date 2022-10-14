module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:jest/recommended',
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    // 'jest'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "consistent-return": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state", "draft"] },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "spaced-comment": "off",
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        trailingComma: "all",
        singleQuote: true,
        useTabs: true,
      },
    ],
  },
};
