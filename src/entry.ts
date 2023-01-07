/*
 * @Author: ycshang
 * @Date: 2023-01-03 22:42:21
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-07 10:24:17
 */
import { App } from "vue";
import { Button } from "./Button";
// 导出单独组件
export { Button };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
