import { jsx, jsxs } from "react/jsx-runtime";
import { Link, usePage, router } from "@inertiajs-revamped/react";
import { useState, useRef, useEffect } from "react";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
function Pagination({ links }) {
  return /* @__PURE__ */ jsx("div", { className: "mt-6", children: Array.isArray(links) && links.length > 3 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap -mb-1", children: links.map(({ active, label, url }) => {
    if (url === null) {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded",
          children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: label } })
        },
        label
      );
    }
    return /* @__PURE__ */ jsx(
      Link,
      {
        className: `mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded ${active ? "bg-white" : ""}`,
        href: url,
        children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: label } })
      },
      `link-${label}`
    );
  }) }) });
}
const pickBy = (obj, predicate = (v) => v) => Object.entries(obj).filter(([_k, v]) => predicate(v)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
function SearchFilter() {
  const { filters } = usePage().props;
  const [opened, setOpened] = useState(false);
  const { url } = usePage();
  const [values, setValues] = useState({
    role: filters.role || "",
    search: filters.search || "",
    trashed: filters.trashed || ""
  });
  const prevValues = usePrevious(values);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  function reset() {
    setValues({
      role: "",
      search: "",
      trashed: ""
    });
  }
  useEffect(() => {
    if (prevValues) {
      router.get(url.split("?")[0], pickBy(values), {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues((values2) => ({
      ...values2,
      [key]: value
    }));
    if (opened)
      setOpened(false);
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center mr-4 w-full max-w-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex w-full bg-white rounded shadow", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: { top: "100%" },
          className: `absolute ${opened ? "" : "hidden"}`,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: () => setOpened(false),
                className: "fixed z-20 inset-0 bg-black opacity-25"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative z-30 mt-2 px-4 py-6 w-64 bg-white rounded shadow-lg", children: [
              Object.prototype.isPrototypeOf.call(filters, "role") && /* @__PURE__ */ jsxs(
                SelectInput,
                {
                  className: "mb-4",
                  label: "Role",
                  name: "role",
                  value: values.role,
                  onChange: () => handleChange,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    /* @__PURE__ */ jsx("option", { value: "user", children: "User" }),
                    /* @__PURE__ */ jsx("option", { value: "owner", children: "Owner" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                SelectInput,
                {
                  label: "Trashed",
                  name: "trashed",
                  value: values.trashed,
                  onChange: () => handleChange,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "" }),
                    /* @__PURE__ */ jsx("option", { value: "with", children: "With Trashed" }),
                    /* @__PURE__ */ jsx("option", { value: "only", children: "Only Trashed" })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpened(true),
          className: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400 md:px-6",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-baseline", children: [
            /* @__PURE__ */ jsx("span", { className: "hidden text-gray-700 md:inline", children: "Filter" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-2 h-2 text-gray-700 fill-current md:ml-2",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 961.243 599.998",
                children: /* @__PURE__ */ jsx("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "relative px-6 py-3 w-full rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-400",
          autoComplete: "off",
          type: "text",
          name: "search",
          value: values.search,
          onChange: handleChange,
          placeholder: "Search…"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: reset,
        className: "focus:text-indigo-700 ml-3 text-gray-600 hover:text-gray-700 text-sm focus:outline-none",
        type: "button",
        children: "Reset"
      }
    )
  ] });
}
export {
  Pagination as P,
  SearchFilter as S
};
