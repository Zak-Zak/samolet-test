module.exports = {
  env: {
    browser: true,
  },
  extends: ["react-app", "prettier", "prettier/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "prettier", "react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-mixed-spaces-and-tabs": "error",
    "react/jsx-indent": ["warn", 4, { checkAttributes: true, indentLogicalExpressions: true }],
  },
};
