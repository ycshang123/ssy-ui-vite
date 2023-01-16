var SSYUI=function(e,t){"use strict";const n={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},o=t.defineComponent({name:"SButton",props:n,setup(e,{slots:n}){var o;console.log("html",null==(o=document.querySelector("#app"))?void 0:o.innerHTML);const l={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n          py-${l[e.size].y}\n          px-${l[e.size].x}\n          ${e.round?"rounded-full":"rounded-lg"}\n          bg-${e.color}-${e.plain?"100":"500"}\n          hover:bg-${e.color}-400\n          border-${e.color}-${e.plain,"500"}\n          cursor-pointer\n          border-solid\n          text-${e.plain?e.color+"-500":"white"}\n          text-${l[e.size].text}\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}}),l={install(e){e.component(o.name,o)}};return e.Button=o,e.default=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),e}({},Vue);
//# sourceMappingURL=ssy-ui.iife.js.map
