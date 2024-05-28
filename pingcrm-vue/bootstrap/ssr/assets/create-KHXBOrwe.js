import { defineComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  props: {
    organizations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const form = useForm({
      first_name: "",
      last_name: "",
      organization_id: null,
      email: "",
      phone: "",
      address: "",
      city: "",
      region: "",
      country: "",
      postal_code: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create Contact" }, null, _parent));
      _push(`<h1 class="mb-8 text-3xl font-bold">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-indigo-400 hover:text-indigo-600",
        href: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacts`);
          } else {
            return [
              createTextVNode("Contacts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="font-medium"> /</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).first_name,
        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
        error: unref(form).errors.first_name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "First name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).last_name,
        "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
        error: unref(form).errors.last_name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Last name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).organization_id,
        "onUpdate:modelValue": ($event) => unref(form).organization_id = $event,
        error: unref(form).errors.organization_id,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Organization"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
            ssrRenderList(__props.organizations, (organization) => {
              _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("option", { value: null }),
              (openBlock(true), createBlock(Fragment, null, renderList(__props.organizations, (organization) => {
                return openBlock(), createBlock("option", {
                  key: organization.id,
                  value: organization.id
                }, toDisplayString(organization.name), 9, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
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
            _push2(`Create Contact`);
          } else {
            return [
              createTextVNode("Create Contact")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/contacts/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
