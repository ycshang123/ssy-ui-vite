/*
 * @Author: ycshang
 * @Date: 2023-01-03 22:30:19
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-03 22:41:40
 */
const s: string = 'Hello Typescript'
console.log(s)
import { createApp } from "vue";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
createApp(JSXButton).mount("#app");