import { defineComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./layout-Bitm2-Gh.js";
import { _ as _sfc_main$3, a as _sfc_main$5 } from "./text-input-C7hEwGQ7.js";
import { _ as _sfc_main$4 } from "./select-input-Cj8IIvo_.js";
import { _ as _sfc_main$2 } from "./trashed-message-Dd4lSOHa.js";
import { useForm, Head, Link, router } from "@inertiajs-revamped/vue";
import "./logo-CSTlbsNI.js";
import "nanoid";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.organization.name,
      email: props.organization.email,
      phone: props.organization.phone,
      address: props.organization.address,
      city: props.organization.city,
      region: props.organization.region,
      country: props.organization.country,
      postal_code: props.organization.postal_code
    });
    const restore = () => {
      if (confirm("Are you sure you want to restore this organization?")) {
        router.put(`/organizations/${props.organization.id}/restore`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: unref(form).name
      }, null, _parent));
      _push(`<h1 class="mb-8 text-3xl font-bold">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-indigo-400 hover:text-indigo-600",
        href: "/organizations"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Organizations`);
          } else {
            return [
              createTextVNode("Organizations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="font-medium"> /</span> ${ssrInterpolate(unref(form).name)}</h1>`);
      if (__props.organization.deleted_at) {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mb-6",
          onRestore: restore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` This organization has been deleted. `);
            } else {
              return [
                createTextVNode(" This organization has been deleted. ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        error: unref(form).errors.name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.email,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        error: unref(form).errors.phone,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Phone"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event,
        error: unref(form).errors.address,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Address"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).city,
        "onUpdate:modelValue": ($event) => unref(form).city = $event,
        error: unref(form).errors.city,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "City"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).region,
        "onUpdate:modelValue": ($event) => unref(form).region = $event,
        error: unref(form).errors.region,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Province/State"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: unref(form).country,
        "onUpdate:modelValue": ($event) => unref(form).country = $event,
        error: unref(form).errors.country,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Country"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
          } else {
            return [
              createVNode("option", { value: null }),
              createVNode("option", { value: "CA" }, "Canada"),
              createVNode("option", { value: "US" }, "United States")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).postal_code,
        "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
        error: unref(form).errors.postal_code,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Postal code"
      }, null, _parent));
      _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
      if (!__props.organization.deleted_at) {
        _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Organization</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$5, {
        loading: unref(form).processing,
        class: "btn-indigo ml-auto",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update Organization `);
          } else {
            return [
              createTextVNode("Update Organization ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Contacts</h2><div class="mt-6 bg-white rounded shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
      ssrRenderList(__props.organization.contacts, (contact) => {
        _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "flex items-center px-6 py-4 focus:text-indigo-500",
          href: `/contacts/${contact.id}/edit`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(contact.name)} `);
              if (contact.deleted_at) {
                _push2(ssrRenderComponent(_sfc_main$6, {
                  name: "trash",
                  class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(contact.name) + " ", 1),
                contact.deleted_at ? (openBlock(), createBlock(_sfc_main$6, {
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                name: "cheveron-right",
                class: "block w-6 h-6 fill-gray-400"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$6, {
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
      if (Array.isArray(__props.organization.contacts) && __props.organization.contacts.length === 0) {
        _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/organizations/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
