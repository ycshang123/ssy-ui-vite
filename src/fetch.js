/*
 * @Author: ycshang
 * @Date: 2023-01-04 22:43:34
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-04 22:43:46
 */
const axios = require("axios")
exports.getData = () => axios.get("/abc/bcd")