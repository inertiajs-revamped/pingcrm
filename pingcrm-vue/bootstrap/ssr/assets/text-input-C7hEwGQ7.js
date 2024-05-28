import { defineComponent, mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { nanoid } from "nanoid";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "loading-button",
  __ssrInlineRender: true,
  props: {
    loading: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        disabled: __props.loading,
        class: "flex items-center"
      }, _attrs))}>`);
      if (__props.loading) {
        _push(`<div class="btn-spinner mr-2"></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/loading-button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "text-input",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: () => `text-input-${nanoid()}`
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const inputRef = ref(null);
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.select();
    };
    const setSelectionRange = (start, end) => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.setSelectionRange(start, end);
    };
    __expose({ focus, select, setSelectionRange });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$attrs.class
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label class="form-label"${ssrRenderAttr("for", __props.id)}>${ssrInterpolate(__props.label)}:</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttrs(mergeProps({
        id: __props.id,
        ref_key: "inputRef",
        ref: inputRef
      }, { ..._ctx.$attrs, class: null }, {
        class: ["form-input focus:outline-none focus:ring-1 focus:ring-indigo-400", { error: __props.error }],
        type: __props.type,
        value: __props.modelValue
      }))}>`);
      if (__props.error) {
        _push(`<div class="form-error">${ssrInterpolate(__props.error)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/text-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
