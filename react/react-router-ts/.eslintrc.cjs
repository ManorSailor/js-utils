module.exports = {
  env: { browser: true, es2021: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true, // Required for @typescript-eslint/recommended-requiring-type-checking
  },
  plugins: ["react-refresh", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import/no-absolute-path": "warn",
    "no-shadow": "off",
    "react/button-has-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  settings: {
    react: {
      version: "detect", // Required to silence the warning of eslint-plugin-react thrown on running lint command
    },
  },
  root: true,
};
