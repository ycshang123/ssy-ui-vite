/*
 * @Author: ycshang
 * @Date: 2023-01-04 22:59:40
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-09 15:18:15
 */
import Button from "./Button";
import { App } from "vue";

// 导出Button组件
export { Button };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
