import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./text-input-C7hEwGQ7.js";
import { _ as _sfc_main$3 } from "./select-input-Cj8IIvo_.js";
import { _ as _sfc_main$1 } from "./layout-Bitm2-Gh.js";
import { useForm, Head, Link } from "@inertiajs-revamped/vue";
import "nanoid";
import "./logo-CSTlbsNI.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      address: null,
      city: null,
      region: null,
      country: null,
      postal_code: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Organization" }, null, _parent));
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
      _push(`<span class="font-medium"> /</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        error: unref(form).errors.name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.email,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        error: unref(form).errors.phone,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Phone"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event,
        error: unref(form).errors.address,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Address"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).city,
        "onUpdate:modelValue": ($event) => unref(form).city = $event,
        error: unref(form).errors.city,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "City"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).region,
        "onUpdate:modelValue": ($event) => unref(form).region = $event,
        error: unref(form).errors.region,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Province/State"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
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
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).postal_code,
        "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
        error: unref(form).errors.postal_code,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Postal code"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        loading: unref(form).processing,
        class: "btn-indigo",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Organization`);
          } else {
            return [
              createTextVNode("Create Organization")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/organizations/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
