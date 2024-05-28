import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./text-input-C7hEwGQ7.js";
import { L as Logo } from "./logo-CSTlbsNI.js";
import { useForm, Head } from "@inertiajs-revamped/vue";
import "nanoid";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "johndoe@example.com",
      password: "secret",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<div class="flex items-center justify-center p-6 min-h-screen bg-indigo-800"><div class="w-full max-w-md">`);
      _push(ssrRenderComponent(Logo, {
        class: "block mx-auto w-full max-w-xs fill-white",
        height: "50"
      }, null, _parent));
      _push(`<form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"><div class="px-10 py-12"><h1 class="text-center text-3xl font-bold">Welcome Back!</h1><div class="mt-6 mx-auto w-24 border-b-2"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        error: unref(form).errors.email,
        class: "mt-10",
        label: "Email",
        type: "email",
        autofocus: "",
        autocapitalize: "off"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        error: unref(form).errors.password,
        class: "mt-6",
        label: "Password",
        type: "password"
      }, null, _parent));
      _push(`<label class="flex items-center mt-6 select-none" for="remember"><input id="remember"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} class="mr-1" type="checkbox"><span class="text-sm">Remember Me</span></label></div><div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        loading: unref(form).processing,
        class: "btn-indigo ml-auto",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
