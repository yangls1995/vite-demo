/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["warn", "double"],
    semi: ["error", "never"],
    "vue/max-attributes-per-line": "off", // 强制每行属性的最大数量
    "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容之前和之后需要换行符
    "vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
  },
}
