import { jsxs, jsx } from "react/jsx-runtime";
function LoadingButton({
  className,
  children,
  loading,
  type
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      disabled: loading,
      className: `flex items-center ${className}`,
      type,
      children: [
        loading && /* @__PURE__ */ jsx("div", { className: "btn-spinner mr-2" }),
        children
      ]
    }
  );
}
function TextInput({
  className,
  error,
  label,
  name,
  type,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    label && /* @__PURE__ */ jsxs("label", { className: "form-label", htmlFor: name, children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        value,
        className: `form-input ${error ? "error" : ""}`,
        onChange
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "form-error", children: error })
  ] });
}
export {
  LoadingButton as L,
  TextInput as T
};
