import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./file-input-DYW6jhSX.js";
import { _ as _sfc_main$2, a as _sfc_main$5 } from "./text-input-C7hEwGQ7.js";
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      owner: false,
      photo: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create User" }, null, _parent));
      _push(`<h1 class="mb-8 text-3xl font-bold">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-indigo-400 hover:text-indigo-600",
        href: "/users"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Users`);
          } else {
            return [
              createTextVNode("Users")
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
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.email,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        error: unref(form).errors.password,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        type: "password",
        autocomplete: "new-password",
        label: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).owner,
        "onUpdate:modelValue": ($event) => unref(form).owner = $event,
        error: unref(form).errors.owner,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Owner"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option${ssrRenderAttr("value", true)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${_scopeId}>No</option>`);
          } else {
            return [
              createVNode("option", { value: true }, "Yes"),
              createVNode("option", { value: false }, "No")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: unref(form).photo,
        "onUpdate:modelValue": ($event) => unref(form).photo = $event,
        error: unref(form).errors.photo,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        type: "file",
        accept: "image/*",
        label: "Photo"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        loading: unref(form).processing,
        class: "btn-indigo",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create User`);
          } else {
            return [
              createTextVNode("Create User")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/users/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
