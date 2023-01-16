/*
 * @Author: ycshang
 * @Date: 2023-01-03 23:28:16
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-16 23:14:59
 */
import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import SSYUI from '../../../src/entry'

import './styles/var.css';
import 'uno.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(SSYUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    }
}