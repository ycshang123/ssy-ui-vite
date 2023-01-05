/*
 * @Author: ycshang
 * @Date: 2023-01-05 21:21:04
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-05 21:21:22
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true
    },
    globals: {
        ga: true,
        chrome: true,
        __DEV__: true
    },
    // 解析 .vue 文件
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:json/recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser' // 解析 .ts 文件
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error'
    }
}
