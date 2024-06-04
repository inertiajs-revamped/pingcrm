import { jsxs, jsx } from "react/jsx-runtime";
function SelectInput({
  children,
  className,
  error,
  label,
  name,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    label && /* @__PURE__ */ jsxs("label", { className: "form-label", htmlFor: name, children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsx(
      "select",
      {
        id: name,
        name,
        ...props,
        className: `form-select ${error ? "error" : ""}`,
        children
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "form-error", children: error })
  ] });
}
export {
  SelectInput as S
};
