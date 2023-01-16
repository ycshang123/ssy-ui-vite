/*
 * @Author: ycshang
 * @Date: 2023-01-16 15:09:59
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-16 21:56:16
 */
import handlebars from "handlebars";
import fs from "fs";
import { resolve } from "path";

/**
 * 生成类型定义文件 d.ts
 * @param components
 */
export async function generateDTS(entryPath) {
    console.log(entryPath);
    const template = resolve(__dirname, "./entry.d.ts.hbs");
    const dts = resolve(__dirname, entryPath.replace(".esm.js", ".d.ts"));

    // 组件库数据
    const components = await getComponents(entryPath);

    // 生成模版
    generateCode(
        {
            components,
        },
        dts,
        template
    );
}

/**
 * 生成代码
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */
function generateCode(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString();
        const result = handlebars.compile(content)(meta);
        fs.writeFileSync(filePath, result);
    }
    console.log(`🚀${filePath} 创建成功`);
}
/**
 * 获取组件列表
 * 通过解析entry.ts模块获取组件数据
 */
async function getComponents(input) {
    const entry = await require(input);
    return Object.keys(entry)
        .filter((k) => k !== "default")
        .map((k) => ({
            name: entry[k].name,
            component: k,
        }));
}
