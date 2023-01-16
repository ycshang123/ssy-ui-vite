#!/usr/bin/env bash
###
 # @Author: ycshang
 # @Date: 2023-01-06 17:22:37
 # @LastEditors: ycshang
 # @LastEditTime: 2023-01-06 17:22:40
### 
npm config get registry # 检查仓库镜像库
npm config set registry=https://registry.npmjs.org
echo '请进行登录操作：'
npm adduser # 登陆
echo "-------publishing-------"
npm publish # 发布
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit