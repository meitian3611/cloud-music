// 加载模块解析插件
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 扩展
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // 插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  // 解析器选项
  parserOptions: {
    // ECMAScript版本
    ecmaVersion: 'latest',
    // 解析器
    parser: '@typescript-eslint/parser',
    // 源类型
    sourceType: 'module',
    // ECMAScript特性
    ecmaFeatures: {
      // JSX
      jsx: true
    }
  },
  rule: {
    'vue/multi-word-component-names': 'off', // 关闭组件命名规范检查
  }
}
