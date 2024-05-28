import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs-revamped/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.links.length > 3) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
        ssrRenderList(__props.links, (link, key) => {
          _push(`<!--[-->`);
          if (link.url === null) {
            _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label ?? ""}</div>`);
          } else {
            _push(ssrRenderComponent(unref(Link), {
              key: `link-${key}`,
              class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
              href: link.url
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
