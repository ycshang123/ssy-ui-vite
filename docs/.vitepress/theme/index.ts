/*
 * @Author: ycshang
 * @Date: 2023-01-03 23:28:16
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-04 17:39:10
 */
import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/entry'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(SmartyUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}