import { defineComponent, onMounted, onUnmounted, computed, ref, mergeProps, useSSRContext, watch, reactive, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs-revamped/vue";
import { L as Logo } from "./logo-CSTlbsNI.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    contentClasses: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (show.value && e.key === "Escape") {
        show.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex h-full cursor-pointer">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(show.value ? null : { display: "none" })}" class="fixed inset-0 z-40 bg-black opacity-25"></div><div style="${ssrRenderStyle([
        show.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "dropdown", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "flash-messages",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const flash = computed(() => usePage().props.flash);
    watch(
      flash,
      () => {
        show.value = true;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (flash.value.success && show.value) {
        _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(flash.value.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((flash.value.error || Object.keys(_ctx.$page.props.errors).length > 0) && show.value) {
        _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
        if (flash.value.error) {
          _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(flash.value.error)}</div>`);
        } else {
          _push(`<div class="py-4 text-white text-sm font-medium">`);
          if (Object.keys(_ctx.$page.props.errors).length === 1) {
            _push(`<span>There is one form error.</span>`);
          } else {
            _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
          }
          _push(`</div>`);
        }
        _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/flash-messages.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  props: {
    name: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.name === "cheveron-down") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
      } else if (__props.name === "cheveron-right") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
      } else if (__props.name === "dashboard") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
      } else if (__props.name === "office") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          width: "100",
          height: "100",
          viewBox: "0 0 100 100"
        }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
      } else if (__props.name === "printer") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
      } else if (__props.name === "trash") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
      } else if (__props.name === "users") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/icon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const page = reactive(usePage());
    const isUrl = (...urls) => {
      let currentUrl = page.url.slice(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return !!urls.filter((url) => currentUrl.startsWith(url)).length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "dashboard",
              class: ["mr-2 w-4 h-4", isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                name: "dashboard",
                class: ["mr-2 w-4 h-4", isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, "Dashboard", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/organizations"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "office",
              class: ["mr-2 w-4 h-4", isUrl("organizations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("organizations") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Organizations</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                name: "office",
                class: ["mr-2 w-4 h-4", isUrl("organizations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("organizations") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, "Organizations", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("contacts") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("contacts") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Contacts</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("contacts") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("contacts") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, "Contacts", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/reports"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "printer",
              class: ["mr-2 w-4 h-4", isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Reports</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                name: "printer",
                class: ["mr-2 w-4 h-4", isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, "Reports", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/main-menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  props: {
    auth: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const auth = usePage().props.auth;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "mt-1",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Logo, {
              class: "fill-white",
              width: "120",
              height: "28"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Logo, {
                class: "fill-white",
                width: "120",
                height: "28"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "md:hidden",
        align: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-6 h-6 fill-white",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
              ]))
            ];
          }
        }),
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg" }, [
                createVNode(_sfc_main$1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0"><div class="mr-4 mt-1">${ssrInterpolate((_a = unref(auth).user.account) == null ? void 0 : _a.name)}</div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-1",
        align: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group flex items-center cursor-pointer select-none"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(auth).user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate(unref(auth).user.last_name)}</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "group flex items-center cursor-pointer select-none" }, [
                createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
                  createVNode("span", null, toDisplayString(unref(auth).user.first_name), 1),
                  createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString(unref(auth).user.last_name), 1)
                ]),
                createVNode(_sfc_main$2, {
                  class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
                  name: "cheveron-down"
                })
              ])
            ];
          }
        }),
        dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 py-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/users/${unref(auth).user.id}/edit`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`My Profile`);
                } else {
                  return [
                    createTextVNode("My Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Manage Users`);
                } else {
                  return [
                    createTextVNode("Manage Users")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Logout`);
                } else {
                  return [
                    createTextVNode("Logout")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 py-2 text-sm bg-white rounded shadow-xl" }, [
                createVNode(unref(Link), {
                  class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
                  href: `/users/${unref(auth).user.id}/edit`
                }, {
                  default: withCtx(() => [
                    createTextVNode("My Profile")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
                  href: "/users"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Manage Users")
                  ]),
                  _: 1
                }),
                createVNode(unref(Link), {
                  class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
                  href: "/logout",
                  method: "post",
                  as: "button"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Logout")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "hidden shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" }, null, _parent));
      _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/layouts/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$4 as b
};
