/*
 * @Author: ycshang
 * @Date: 2023-01-04 22:52:28
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-04 22:52:57
 */
const jsdom = require('jsdom') // eslint-disable-line
const { JSDOM } = jsdom

const dom = new JSDOM('<!DOCTYPE html><head/><body></body>', {
    url: 'http://localhost/',
    referrer: 'https://example.com/',
    contentType: 'text/html',
    userAgent: 'Mellblomenator/9000',
    includeNodeLocations: true,
    storageQuota: 10000000,
})
global.window = dom.window
global.document = window.document
global.navigator = window.navigator