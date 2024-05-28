import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$5 } from "./file-input-DYW6jhSX.js";
import { _ as _sfc_main$3, a as _sfc_main$6 } from "./text-input-C7hEwGQ7.js";
import { _ as _sfc_main$4 } from "./select-input-Cj8IIvo_.js";
import { _ as _sfc_main$2 } from "./trashed-message-Dd4lSOHa.js";
import { _ as _sfc_main$1 } from "./layout-Bitm2-Gh.js";
import { useForm, Head, Link, router } from "@inertiajs-revamped/vue";
import "nanoid";
import "./logo-CSTlbsNI.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "put",
      first_name: props.user.first_name,
      last_name: props.user.last_name,
      email: props.user.email,
      password: "",
      owner: props.user.owner,
      photo: null
    });
    const restore = () => {
      if (confirm("Are you sure you want to restore this user?")) {
        router.put(`/users/${props.user.id}/restore`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `${unref(form).first_name} ${unref(form).last_name}`
      }, null, _parent));
      _push(`<div class="flex justify-start mb-8 max-w-3xl"><h1 class="text-3xl font-bold">`);
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
      _push(`<span class="font-medium"> /</span> ${ssrInterpolate(unref(form).first_name)} ${ssrInterpolate(unref(form).last_name)}</h1>`);
      if (__props.user.photo) {
        _push(`<img class="block ml-4 w-8 h-8 rounded-full"${ssrRenderAttr("src", __props.user.photo)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.user.deleted_at) {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mb-6",
          onRestore: restore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` This user has been deleted. `);
            } else {
              return [
                createTextVNode(" This user has been deleted. ")
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
        modelValue: unref(form).first_name,
        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
        error: unref(form).errors.first_name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "First name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).last_name,
        "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
        error: unref(form).errors.last_name,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Last name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.email,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        label: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        error: unref(form).errors.password,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        type: "password",
        autocomplete: "new-password",
        label: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
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
      _push(ssrRenderComponent(_sfc_main$5, {
        modelValue: unref(form).photo,
        "onUpdate:modelValue": ($event) => unref(form).photo = $event,
        error: unref(form).errors.photo,
        class: "pb-8 pr-6 w-full lg:w-1/2",
        type: "file",
        accept: "image/*",
        label: "Photo"
      }, null, _parent));
      _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
      if (!__props.user.deleted_at) {
        _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete User</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$6, {
        loading: unref(form).processing,
        class: "btn-indigo ml-auto",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update User`);
          } else {
            return [
              createTextVNode("Update User")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/users/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
