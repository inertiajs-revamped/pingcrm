import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { b as _sfc_main$1 } from "./layout-Bitm2-Gh.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-filter",
  __ssrInlineRender: true,
  props: {
    modelValue: String,
    maxWidth: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "reset"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "auto-close": false,
        class: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:ring md:px-6",
        align: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center flex-1"${_scopeId}><span class="hidden text-gray-700 md:inline"${_scopeId}>Filter</span><svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998"${_scopeId}><path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center flex-1" }, [
                createVNode("span", { class: "hidden text-gray-700 md:inline" }, "Filter"),
                (openBlock(), createBlock("svg", {
                  class: "w-2 h-2 fill-gray-700 md:ml-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 961.243 599.998"
                }, [
                  createVNode("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
                ]))
              ])
            ];
          }
        }),
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" style="${ssrRenderStyle({ maxWidth: `${__props.maxWidth}px` })}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl",
                style: { maxWidth: `${__props.maxWidth}px` }
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 4)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<input class="relative px-6 py-3 w-full rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-400" autocomplete="off" type="text" name="search" placeholder="Search…"${ssrRenderAttr("value", __props.modelValue)}></div><button class="ml-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm" type="button">Reset</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/search-filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pickBy = (obj, predicate = (v) => v) => Object.entries(obj).filter(([_k, v]) => predicate(v)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
function throttle(fn, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    const now = (/* @__PURE__ */ new Date()).valueOf();
    if (now - lastTime >= timeFrame) {
      fn(this, ...args);
      lastTime = now;
    }
  };
}
export {
  _sfc_main as _,
  pickBy as p,
  throttle as t
};
