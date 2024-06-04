import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { L as Layout } from "./layout-C6sDMM8X.js";
import { Head, Link, withLayout } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold", children: "Dashboard" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-8 leading-normal", children: [
      "Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-indigo-500 hover:text-orange-600 underline",
          href: "https://inertiajs-revamped.com/",
          children: "Inertia.js-Revamped"
        }
      ),
      " ",
      "works."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex mb-8", children: [
      /* @__PURE__ */ jsx(Link, { className: "btn-indigo mr-1", href: "/500", children: "500 error" }),
      /* @__PURE__ */ jsx(Link, { className: "btn-indigo", href: "/404", children: "404 error" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "leading-normal", children: "👆 These links are intended to be broken to illustrate how error handling works." })
  ] });
}
Index.layout = withLayout(Layout);
export {
  Index as default
};
