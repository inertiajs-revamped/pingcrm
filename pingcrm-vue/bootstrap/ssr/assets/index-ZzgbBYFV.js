import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./layout-Bitm2-Gh.js";
import { Head, Link } from "@inertiajs-revamped/vue";
import "./logo-CSTlbsNI.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how <a class="text-indigo-500 hover:text-orange-600 underline" href="https://inertiajs-revamped.com/">Inertia.js-Revamped</a> works.</p><div class="flex mb-8">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "btn-indigo mr-1",
        href: "/500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 500 error `);
          } else {
            return [
              createTextVNode(" 500 error ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "btn-indigo",
        href: "/404"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 404 error `);
          } else {
            return [
              createTextVNode(" 404 error ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p className="leading-normal"> 👆 These links are intended to be broken to illustrate how error handling works. </p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
