import { defineComponent, ref, watch, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "file-input",
  __ssrInlineRender: true,
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const fileRef = ref(null);
    watch(() => props.modelValue, (value) => {
      if (!value) {
        fileRef.value.value = "";
      }
    });
    const filesize = (size) => {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][i];
    };
    const browse = () => {
      var _a;
      (_a = fileRef.value) == null ? void 0 : _a.click();
    };
    const change = (e) => {
      var _a;
      emit("update:modelValue", (_a = e.target.files) == null ? void 0 : _a[0]);
    };
    const remove = () => {
      emit("update:modelValue", null);
    };
    __expose({ browse, change, remove });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.label) {
        _push(`<label class="form-label">${ssrInterpolate(__props.label)}:</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ error: __props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", __props.accept)} class="hidden">`);
      if (!__props.modelValue) {
        _push(`<div class="p-2"><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Browse</button></div>`);
      } else {
        _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate(__props.modelValue.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate(filesize(__props.modelValue.size))})</span></div><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Remove</button></div>`);
      }
      _push(`</div>`);
      if (__props.errors.length) {
        _push(`<div class="form-error">${ssrInterpolate(__props.errors[0])}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/components/file-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
