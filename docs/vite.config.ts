/*
 * @Author: ycshang
 * @Date: 2023-01-03 23:22:10
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-03 23:22:19
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        // 添加JSX插件
        vueJsx(),
        Unocss(),
    ],
});