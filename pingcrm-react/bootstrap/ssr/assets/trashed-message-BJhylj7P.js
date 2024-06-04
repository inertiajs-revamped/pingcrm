import { jsxs, jsx } from "react/jsx-runtime";
import { I as Icon } from "./layout-C6sDMM8X.js";
function TrashedMessages({
  children,
  onRestore
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 p-4 max-w-3xl bg-yellow-400 rounded", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(Icon, { name: "trash", className: "shrink-0 mr-2 w-4 h-4 fill-yellow-800" }),
      /* @__PURE__ */ jsx("div", { className: "text-yellow-800 text-sm font-medium", children })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-yellow-800 hover:underline text-sm",
        tabIndex: -1,
        type: "button",
        onClick: onRestore,
        children: "Restore"
      }
    )
  ] });
}
export {
  TrashedMessages as T
};
