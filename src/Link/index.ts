/*
 * @Author: ycshang
 * @Date: 2023-01-07 10:07:45
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-07 10:11:32
 */
import Link from "./Link";
import { App } from "vue";

// 导出 Link 组件
export { Link };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Link.name, Link);
  },
};
