export * from './types/entry'
import SSYUI from './types/entry'
export default SSYUI

declare module 'vue' {
export interface GlobalComponents {
SButton: typeof import("./types/entry").Button,
}
}