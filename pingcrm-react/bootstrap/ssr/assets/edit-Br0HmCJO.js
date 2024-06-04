import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
import { T as TrashedMessages } from "./trashed-message-BJhylj7P.js";
import { L as Layout } from "./layout-C6sDMM8X.js";
import { usePage, useForm, Head, Link, withLayout, router } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
function Edit() {
  const { contact, organizations } = usePage().props;
  const { data, setData, errors, put, processing } = useForm({
    first_name: contact.first_name || "",
    last_name: contact.last_name || "",
    organization_id: contact.organization_id || "",
    email: contact.email || "",
    phone: contact.phone || "",
    address: contact.address || "",
    city: contact.city || "",
    region: contact.region || "",
    country: contact.country || "",
    postal_code: contact.postal_code || ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/contacts/${contact.id}`);
  };
  const handleDestroy = () => {
    if (confirm("Are you sure you want to delete this contact?")) {
      router.delete(`/contacts/${contact.id}`);
    }
  };
  const handleRestore = () => {
    if (confirm("Are you sure you want to restore this contact?")) {
      router.put(`/contacts/${contact.id}/restore`);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${data.first_name} ${data.last_name}` }),
    /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-indigo-400 hover:text-indigo-600",
          href: "/contacts",
          children: "Contacts"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: " / " }),
      data.first_name,
      " ",
      data.last_name
    ] }),
    contact.deleted_at && /* @__PURE__ */ jsx(TrashedMessages, { className: "mb-6", onRestore: handleRestore, children: "This contact has been deleted." }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl bg-white rounded-md shadow overflow-hidden", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -mb-8 -mr-6 p-8", children: [
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "First name",
            name: "first_name",
            type: "text",
            error: errors.first_name,
            value: data.first_name,
            onChange: (e) => setData("first_name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Last name",
            name: "last_name",
            type: "text",
            error: errors.last_name,
            value: data.last_name,
            onChange: (e) => setData("last_name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs(
          SelectInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Organization",
            name: "organization_id",
            error: errors.organization_id,
            onChange: (e) => setData("organization_id", e.target.value),
            defaultValue: data.organization_id,
            children: [
              /* @__PURE__ */ jsx("option", { value: "null" }),
              Array.isArray(organizations) && organizations.map(({ id, name }) => /* @__PURE__ */ jsx("option", { value: id, children: name }, id))
            ]
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
            onChange: (e) => setData("country", e.target.value),
            defaultValue: data.country,
            children: [
              /* @__PURE__ */ jsx("option", { value: "null" }),
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
            onChange: (e) => setData("postal_code", e.target.value),
            defaultValue: data.postal_code
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100", children: [
        !contact.deleted_at && /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-red-600 hover:underline",
            tabIndex: -1,
            type: "button",
            onClick: handleDestroy,
            children: "Delete Contact"
          }
        ),
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            loading: processing,
            className: "btn-indigo ml-auto",
            type: "submit",
            children: "Update Contact"
          }
        )
      ] })
    ] }) })
  ] });
}
Edit.layout = withLayout(Layout);
export {
  Edit,
  Edit as default
};
