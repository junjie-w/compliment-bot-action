module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:yml/standard",
    "plugin:import/recommended",
  ],
  plugins: ["yml", "import"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],

    "no-console": ["warn", { allow: ["warn", "error", "log"] }],

    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-unresolved": "error",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/first": "error",
    "import/newline-after-import": "error",

    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "eol-last": ["error", "always"],
    "object-curly-spacing": ["error", "always"],

    "yml/no-empty-mapping-value": "off",
  },
  overrides: [
    {
      files: [".github/**/*.yml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
  ],
};
