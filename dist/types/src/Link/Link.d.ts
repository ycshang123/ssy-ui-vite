import { PropType } from "vue";
export declare type ISize = "small" | "medium" | "large";
export declare type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export declare const props: {
    size: {
        type: PropType<ISize>;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ISize>;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ISize>;
        default: string;
    };
    color: {
        type: PropType<IColor>;
        default: string;
    };
}>>, {
    size: ISize;
    color: IColor;
}>;
export default _default;
