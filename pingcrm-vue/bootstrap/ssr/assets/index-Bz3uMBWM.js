import { defineComponent, ref, watch, unref, withCtx, createVNode, withDirectives, vModelSelect, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./layout-Bitm2-Gh.js";
import { _ as _sfc_main$4 } from "./pagination-Dk4CT75n.js";
import { t as throttle, _ as _sfc_main$2, p as pickBy } from "./index-CIfjf5rc.js";
import { Head, Link, router } from "@inertiajs-revamped/vue";
import "./logo-CSTlbsNI.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "index",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object,
      required: true
    },
    contacts: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      search: props.filters.search,
      trashed: props.filters.trashed
    });
    watch(
      form,
      throttle(() => {
        router.get("/contacts", pickBy(form.value), { preserveState: true });
      }, 150),
      { deep: true }
    );
    const reset = () => {
      form.value = {
        search: null,
        trashed: null
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Contacts" }, null, _parent));
      _push(`<h1 class="mb-8 text-3xl font-bold">Contacts</h1><div class="flex items-center justify-between mb-6">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: form.value.search,
        "onUpdate:modelValue": ($event) => form.value.search = $event,
        class: "mr-4 w-full max-w-md",
        onReset: reset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray(form.value.trashed) ? ssrLooseContain(form.value.trashed, null) : ssrLooseEqual(form.value.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray(form.value.trashed) ? ssrLooseContain(form.value.trashed, "with") : ssrLooseEqual(form.value.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray(form.value.trashed) ? ssrLooseContain(form.value.trashed, "only") : ssrLooseEqual(form.value.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
          } else {
            return [
              createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
              withDirectives(createVNode("select", {
                "onUpdate:modelValue": ($event) => form.value.trashed = $event,
                class: "form-select mt-1 w-full"
              }, [
                createVNode("option", { value: null }),
                createVNode("option", { value: "with" }, "With Trashed"),
                createVNode("option", { value: "only" }, "Only Trashed")
              ], 8, ["onUpdate:modelValue"]), [
                [vModelSelect, form.value.trashed]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "btn-indigo",
        href: "/contacts/create"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Contact</span>`);
          } else {
            return [
              createVNode("span", null, "Create"),
              createVNode("span", { class: "hidden md:inline" }, " Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Organization</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
      ssrRenderList(__props.contacts.data, (contact) => {
        _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-6 py-4 focus:text-indigo-500",
          href: `/contacts/${contact.id}/edit`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contact.name)} `);
              if (contact.deleted_at) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  name: "trash",
                  class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(contact.name) + " ", 1),
                contact.deleted_at ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  name: "trash",
                  class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-6 py-4",
          href: `/contacts/${contact.id}/edit`,
          tabindex: "-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (contact.organization) {
                _push2(`<div${_scopeId}>${ssrInterpolate(contact.organization.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                contact.organization ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(contact.organization.name), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-6 py-4",
          href: `/contacts/${contact.id}/edit`,
          tabindex: "-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contact.city)}`);
            } else {
              return [
                createTextVNode(toDisplayString(contact.city), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-6 py-4",
          href: `/contacts/${contact.id}/edit`,
          tabindex: "-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contact.phone)}`);
            } else {
              return [
                createTextVNode(toDisplayString(contact.phone), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="w-px border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-4",
          href: `/contacts/${contact.id}/edit`,
          tabindex: "-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                name: "cheveron-right",
                class: "block w-6 h-6 fill-gray-400"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$3, {
                  name: "cheveron-right",
                  class: "block w-6 h-6 fill-gray-400"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]-->`);
      if (__props.contacts.data.length === 0) {
        _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-6",
        links: __props.contacts.links
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
