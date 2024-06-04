import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Icon, L as Layout } from "./layout-C6sDMM8X.js";
import { S as SearchFilter, P as Pagination } from "./search-filter-C8t0kUFP.js";
import { usePage, Head, Link, withLayout } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
import "./select-input-hZIK0Hde.js";
const Index = () => {
  const { users } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Users" }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold", children: "Users" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx(SearchFilter, {}),
      /* @__PURE__ */ jsxs(Link, { className: "btn-indigo", href: "/users/create", children: [
        /* @__PURE__ */ jsx("span", { children: "Create" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: " User" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-md shadow overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left font-bold", children: [
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", colSpan: 2, children: "Role" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        Array.isArray(users) && users.map(({ id, name, email, owner, photo, deleted_at }) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "hover:bg-gray-100 focus-within:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  className: "flex items-center px-6 py-4 focus:text-indigo-500",
                  href: `/users/${id}/edit`,
                  children: [
                    photo && /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "block -my-2 mr-2 w-5 h-5 rounded-full",
                        src: photo,
                        alt: name
                      }
                    ),
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
                  href: `/users/${id}/edit`,
                  tabIndex: -1,
                  children: email
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-6 py-4",
                  href: `/users/${id}/edit`,
                  tabIndex: -1,
                  children: owner ? "Owner" : "User"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "w-px border-t", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "flex items-center px-4",
                  href: `/users/${id}/edit`,
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
        Array.isArray(users) && users.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "px-6 py-4 border-t", colSpan: 4, children: "No users found." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { links: users.links })
  ] });
};
Index.layout = withLayout(Layout);
export {
  Index as default
};
