import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, L as LoadingButton } from "./text-input-3oYGq4aA.js";
import { L as Logo } from "./logo-D3xV-gz5.js";
import { useForm, Head } from "@inertiajs-revamped/react";
function Login() {
  const { data, setData, errors, post, processing } = useForm({
    email: "johndoe@example.com",
    password: "secret",
    remember: false
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    post("/login");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center p-6 min-h-screen bg-indigo-800", children: [
    /* @__PURE__ */ jsxs(Head, { title: "Login", children: [
      /* @__PURE__ */ jsx("meta", { name: "title", content: "Login - Ping CRM" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "A demo application to illustrate how Inertia.js works with Laravel and Preact."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "laravel, inertia, inertiajs, inertia.js-revamped, pingcrm, pingcrm-react"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, nofollow" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsx(
        Logo,
        {
          className: "block mx-auto w-full max-w-xs fill-white",
          height: "50"
        }
      ),
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "mt-8 bg-white rounded-lg shadow-xl overflow-hidden",
          onSubmit: handleSubmit,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "px-10 py-12", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-center text-3xl font-bold", children: "Welcome Back!" }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 mx-auto w-24 border-b-2" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "mt-10",
                  label: "Email",
                  name: "email",
                  type: "email",
                  error: errors.email,
                  value: data.email,
                  onChange: (event) => setData("email", event.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "mt-6",
                  label: "Password",
                  name: "password",
                  type: "password",
                  error: errors.password,
                  value: data.password,
                  onChange: (event) => setData("password", event.target.value)
                }
              ),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  className: "flex items-center mt-6 select-none",
                  htmlFor: "remember",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        name: "remember",
                        id: "remember",
                        className: "mr-1",
                        type: "checkbox",
                        checked: data.remember,
                        onChange: (event) => setData("remember", event.target.checked)
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Remember Me" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex px-10 py-4 bg-gray-100 border-t border-gray-100", children: /* @__PURE__ */ jsx(
              LoadingButton,
              {
                type: "submit",
                loading: processing,
                className: "btn-indigo ml-auto",
                children: "Login"
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
export {
  Login as default
};
