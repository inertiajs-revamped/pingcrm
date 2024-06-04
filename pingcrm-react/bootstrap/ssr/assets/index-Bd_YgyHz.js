import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Icon, L as Layout } from "./layout-C6sDMM8X.js";
import { S as SearchFilter, P as Pagination } from "./search-filter-C8t0kUFP.js";
import { usePage, Head, Link, withLayout } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
import "./select-input-hZIK0Hde.js";
const Index = () => {
  const {
    contacts: { data, links }
  } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Contacts" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold", children: "Contacts" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx(SearchFilter, {}),
      /* @__PURE__ */ jsxs(Link, { className: "btn-indigo", href: "/contacts/create", children: [
        /* @__PURE__ */ jsx("span", { children: "Create" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: " Contact" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-md shadow overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left font-bold", children: [
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "Organization" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "City" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", colSpan: 2, children: "Phone" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        data.map(({ id, name, city, phone, organization, deleted_at }) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "hover:bg-gray-100 focus-within:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  className: "flex items-center px-6 py-4 focus:text-indigo-500",
                  href: `/contacts/${id}/edit`,
                  children: [
                    name,
                    deleted_at && /* @__PURE__ */ jsx(
                      Icon,
                      {
                        name: "trash",
                        className: "flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-6 py-4",
                  href: `/contacts/${id}/edit`,
                  tabIndex: -1,
                  children: organization == null ? void 0 : organization.name
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-6 py-4",
                  href: `/contacts/${id}/edit`,
                  tabIndex: -1,
                  children: city
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-6 py-4",
                  href: `/contacts/${id}/edit`,
                  tabIndex: -1,
                  children: phone
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "w-px border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-4",
                  href: `/contacts/${id}/edit`,
                  tabIndex: -1,
                  children: /* @__PURE__ */ jsx(
                    Icon,
                    {
                      name: "cheveron-right",
                      className: "block w-6 h-6 fill-gray-400"
                    }
                  )
                }
              ) })
            ]
          },
          id
        )),
        data.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "px-6 py-4 border-t", colSpan: 4, children: "No contacts found." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { links })
  ] });
};
Index.layout = withLayout(Layout);
export {
  Index as default
};
