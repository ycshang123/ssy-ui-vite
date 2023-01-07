import { defineComponent, createVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
};
const Link = defineComponent({
  name: "SLink",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("a", {
      "class": ` 
              py-${size[props2.size].y}
              px-${size[props2.size].x}
              cursor-pointer
              text-${props2.color + "-500"}
              text-${size[props2.size].text}
              hover:bg-${props2.color}-400
              hover:text-white`
    }, [createVNode("span", null, [createTextVNode(" "), slots.default ? slots.default() : "\u9ED8\u8BA4\u94FE\u63A5", createTextVNode(" ")])]);
  }
});
const index = {
  install(app) {
    app.component(Link.name, Link);
  }
};
export {
  Link,
  index as default
};
//# sourceMappingURL=index.esm.js.map
