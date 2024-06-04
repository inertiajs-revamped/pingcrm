import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs-revamped/react";
function ErrorPage(props) {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden"
  }[props.status];
  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page."
  }[props.status];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "title" }),
    /* @__PURE__ */ jsx("section", { className: "body-font text-gray-600", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-screen", children: [
      /* @__PURE__ */ jsx("h1", { className: "title-font mb-4 text-gray-900 text-3xl font-medium sm:text-4xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 leading-relaxed", children: description }),
      /* @__PURE__ */ jsx(Link, { href: "/", className: "btn-indigo", children: "Return Home" })
    ] }) })
  ] });
}
export {
  ErrorPage as default
};
