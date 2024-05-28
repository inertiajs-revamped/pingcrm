import { defineComponent, ref, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { nanoid } from "nanoid";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "select-input",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: () => `select-input-${nanoid()}`
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selected = ref(props.modelValue);
    const inputRef = ref(null);
    watch(selected, (selected2) => {
      emit("update:modelValue", selected2);
    });
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.select();
    };
    __expose({ focus, select });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$attrs.class
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label class="form-label"${ssrRenderAttr("for", __props.id)}>${ssrInterpolate(__props.label)}:</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<select${ssrRenderAttrs(mergeProps({
        id: __props.id,
        ref_key: "inputRef",
        ref: inputRef
      }, { ..._ctx.$attrs, class: null }, {
        class: ["form-select focus:outline-none focus:ring-1 focus:ring-indigo-400", { error: __props.error }]
      }))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/select-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
