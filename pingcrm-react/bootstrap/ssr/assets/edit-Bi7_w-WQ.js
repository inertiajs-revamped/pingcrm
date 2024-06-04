import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Icon, L as Layout } from "./layout-C6sDMM8X.js";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
import { T as TrashedMessages } from "./trashed-message-BJhylj7P.js";
import { usePage, useForm, Head, Link, withLayout, router } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
function Edit() {
  const { organization } = usePage().props;
  const { data, setData, errors, put, processing } = useForm({
    name: organization.name || "",
    email: organization.email || "",
    phone: organization.phone || "",
    address: organization.address || "",
    city: organization.city || "",
    region: organization.region || "",
    country: organization.country || "",
    postal_code: organization.postal_code || ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/organizations/${organization.id}`);
  };
  const handleDestroy = () => {
    if (confirm("Are you sure you want to delete this organization?")) {
      router.delete(`/organizations/${organization.id}`);
    }
  };
  const handleRestore = () => {
    if (confirm("Are you sure you want to restore this organization?")) {
      router.put(`/organizations/${organization.id}/restore`);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${data.name}` }),
    /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-indigo-400 hover:text-indigo-600",
          href: "/organizations",
          children: "Organizations"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: " / " }),
      data.name
    ] }),
    organization.deleted_at && /* @__PURE__ */ jsx(TrashedMessages, { className: "mb-6", onRestore: handleRestore, children: "This organization has been deleted." }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl bg-white rounded-md shadow overflow-hidden", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -mb-8 -mr-6 p-8", children: [
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Name",
            name: "name",
            type: "text",
            error: errors.name,
            value: data.name,
            onChange: (e) => setData("name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Email",
            name: "email",
            type: "email",
            error: errors.email,
            value: data.email,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Phone",
            name: "phone",
            type: "text",
            error: errors.phone,
            value: data.phone,
            onChange: (e) => setData("phone", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Address",
            name: "address",
            type: "text",
            error: errors.address,
            value: data.address,
            onChange: (e) => setData("address", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "City",
            name: "city",
            type: "text",
            error: errors.city,
            value: data.city,
            onChange: (e) => setData("city", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Province/State",
            name: "region",
            type: "text",
            error: errors.region,
            value: data.region,
            onChange: (e) => setData("region", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs(
          SelectInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Country",
            name: "country",
            error: errors.country,
            value: data.country,
            onChange: (e) => setData("country", e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "" }),
              /* @__PURE__ */ jsx("option", { value: "CA", children: "Canada" }),
              /* @__PURE__ */ jsx("option", { value: "US", children: "United States" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Postal code",
            name: "postal_code",
            type: "text",
            error: errors.postal_code,
            value: data.postal_code,
            onChange: (e) => setData("postal_code", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100", children: [
        !organization.deleted_at && /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-red-600 hover:underline",
            tabIndex: -1,
            type: "button",
            onClick: handleDestroy,
            children: "Delete Organization"
          }
        ),
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            loading: processing,
            className: "btn-indigo ml-auto",
            type: "submit",
            children: "Update Organization"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("h2", { className: "mt-12 text-2xl font-bold", children: "Contacts" }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 bg-white rounded shadow overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full whitespace-nowrap", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left font-bold", children: [
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", children: "City" }),
        /* @__PURE__ */ jsx("th", { className: "pb-4 pt-6 px-6", colSpan: 2, children: "Phone" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        Array.isArray(organization.contacts) && organization.contacts.map(
          ({ id, name, phone, city, deleted_at }) => /* @__PURE__ */ jsxs(
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
          )
        ),
        Array.isArray(organization.contacts) && organization.contacts.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "px-6 py-4 border-t", colSpan: 4, children: "No contacts found." }) })
      ] })
    ] }) })
  ] });
}
Edit.layout = withLayout(Layout);
export {
  Edit,
  Edit as default
};
