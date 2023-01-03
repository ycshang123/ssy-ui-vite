/*
 * @Author: ycshang
 * @Date: 2023-01-03 22:38:24
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-03 22:38:31
 */
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}