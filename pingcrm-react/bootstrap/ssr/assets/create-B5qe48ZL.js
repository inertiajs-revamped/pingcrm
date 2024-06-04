import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
import { L as Layout } from "./layout-C6sDMM8X.js";
import { useForm, Head, Link, withLayout } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    country: "",
    postal_code: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/organizations");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Organization" }),
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
      " Create"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl bg-white rounded-md shadow overflow-hidden", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -mb-8 -mr-6 p-8", children: [
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Name",
            name: "name",
            error: errors.name,
            value: data.name,
            type: "text",
            onChange: (e) => setData("name", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Email",
            name: "email",
            error: errors.email,
            value: data.email,
            type: "email",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Phone",
            name: "phone",
            error: errors.phone,
            value: data.phone,
            type: "text",
            onChange: (e) => setData("phone", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Address",
            name: "address",
            error: errors.address,
            value: data.address,
            type: "text",
            onChange: (e) => setData("address", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "City",
            name: "city",
            error: errors.city,
            value: data.city,
            type: "text",
            onChange: (e) => setData("city", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Province/State",
            name: "region",
            error: errors.region,
            value: data.region,
            type: "text",
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
            error: errors.postal_code,
            value: data.postal_code,
            type: "text",
            onChange: (e) => setData("postal_code", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100", children: /* @__PURE__ */ jsx(
        LoadingButton,
        {
          loading: processing,
          className: "btn-indigo",
          type: "submit",
          children: "Create Organization"
        }
      ) })
    ] }) })
  ] });
};
Create.layout = withLayout(Layout);
export {
  Create as default
};
