import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs-revamped/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    const props = __props;
    const title = {
      503: "503: Service Unavailable",
      500: "500: Server Error",
      404: "404: Page Not Found",
      403: "403: Forbidden"
    }[props.status];
    const description = {
      503: "Sorry, we are doing some maintenance. Please check back soon.",
      500: "Whoops, something went wrong on our servers.",
      404: "Sorry, the page you are looking for could not be found.",
      403: "Sorry, you are forbidden from accessing this page."
    }[props.status];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: unref(title) }, null, _parent));
      _push(`<section class="body-font text-gray-600"><div class="flex flex-col items-center justify-center h-screen"><h1 class="title-font mb-4 text-gray-900 text-3xl font-medium sm:text-4xl">${ssrInterpolate(unref(title))}</h1><p class="mb-8 leading-relaxed">${ssrInterpolate(unref(description))}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "btn-indigo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Return Home `);
          } else {
            return [
              createTextVNode(" Return Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
