const config = {
  printWidth: 120,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-solidity"],
  overrides: [
    {
      files: "*.sol",
      options: {
        "singleQuote": false
      }
    }
  ]
}

module.exports = config;
