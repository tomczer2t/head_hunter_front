module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "jest", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:react-hooks/recommended"
      ],

      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: true,
        trailingComma: "all"
      },
    ],
    "import/no-unresolved": [
      2,
      {
        "ignore": ['types'],
        "caseSensitive": false
      }
    ],
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-argument":"off",
    "@typescript-eslint/no-misused-promises":"off",
    "@typescript-eslint/restrict-template-expressions":"off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
