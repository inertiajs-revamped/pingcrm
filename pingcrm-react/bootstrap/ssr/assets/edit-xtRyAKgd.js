import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { F as FileInput } from "./file-input-qcA5w6tN.js";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { S as SelectInput } from "./select-input-hZIK0Hde.js";
import { T as TrashedMessages } from "./trashed-message-BJhylj7P.js";
import { L as Layout } from "./layout-C6sDMM8X.js";
import { usePage, useForm, Head, Link, withLayout, router } from "@inertiajs-revamped/react";
import "react";
import "./logo-D3xV-gz5.js";
function Edit() {
  const { user } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    _method: "PUT",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || "",
    password: user.password || "",
    owner: user.owner ? "1" : "0",
    photo: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/users/${user.id}`);
  };
  const handleDestroy = () => {
    if (confirm("Are you sure you want to delete this user?")) {
      router.delete(`/users/${user.id}`);
    }
  };
  const handleRestore = () => {
    if (confirm("Are you sure you want to restore this user?")) {
      router.put(`/users/${user.id}/restore`);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: `${data.first_name} ${data.last_name}` }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-start mb-8 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold", children: [
        /* @__PURE__ */ jsx(Link, { className: "text-indigo-400 hover:text-indigo-600", href: "/users", children: "Users" }),
        /* @__PURE__ */ jsx("span", { className: "text-indigo-400 font-medium", children: " / " }),
        data.first_name,
        " ",
        data.last_name
      ] }),
      user.photo && /* @__PURE__ */ jsx(
        "img",
        {
          className: "block ml-4 w-8 h-8 rounded-full",
          src: user.photo,
          alt: data.first_name
        }
      )
    ] }),
    user.deleted_at && /* @__PURE__ */ jsx(TrashedMessages, { onRestore: handleRestore, children: "This user has been deleted." }),
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
            onChange: (e) => setData("owner", e.target.value),
            defaultValue: data.owner,
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100", children: [
        !user.deleted_at && /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-red-600 hover:underline",
            tabIndex: -1,
            type: "button",
            onClick: handleDestroy,
            children: "Delete User"
          }
        ),
        /* @__PURE__ */ jsx(
          LoadingButton,
          {
            loading: processing,
            className: "btn-indigo ml-auto",
            type: "submit",
            children: "Update User"
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
