import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { F as FileInput } from "./file-input-qcA5w6tN.js";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
import { L as Layout } from "./layout-C6sDMM8X.js";
import { useForm, Head, Link, withLayout } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
function Create() {
  const { data, setData, errors, post, processing } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    owner: "0",
    photo: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/users");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create User" }),
    /* @__PURE__ */ jsxs("h1", { className: "mb-8 text-3xl font-bold", children: [
      /* @__PURE__ */ jsx(Link, { className: "text-indigo-400 hover:text-indigo-600", href: "/users", children: "Users" }),
      /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: " / " }),
      " Create"
    ] }),
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
            label: "Password",
            name: "password",
            type: "password",
            error: errors.password,
            value: data.password,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs(
          SelectInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Owner",
            name: "owner",
            error: errors.owner,
            value: data.owner,
            onChange: (e) => setData("owner", e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "1", children: "Yes" }),
              /* @__PURE__ */ jsx("option", { value: "0", children: "No" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          FileInput,
          {
            className: "pb-8 pr-6 w-full lg:w-1/2",
            label: "Photo",
            name: "photo",
            error: errors.photo,
            value: data.photo,
            accept: "image/*",
            onInput: (photo) => setData("photo", photo.name)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100", children: /* @__PURE__ */ jsx(
        LoadingButton,
        {
          loading: processing,
          className: "btn-indigo",
          type: "submit",
          children: "Create User"
        }
      ) })
    ] }) })
  ] });
}
Create.layout = withLayout(Layout);
export {
  Create as default
};
