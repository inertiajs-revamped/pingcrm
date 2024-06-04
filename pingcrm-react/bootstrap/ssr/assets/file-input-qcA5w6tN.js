import { jsxs, jsx } from "react/jsx-runtime";
import { createRef, useState } from "react";
const Button = ({ text, onClick }) => /* @__PURE__ */ jsx(
  "button",
  {
    type: "button",
    className: "px-4 py-1 text-white text-xs font-medium bg-gray-600 hover:bg-gray-700 rounded-sm focus:outline-none",
    onClick,
    children: text
  }
);
function FileInput({
  className,
  name,
  label,
  accept,
  error,
  onInput
}) {
  const fileRef = createRef();
  const [file, setFile] = useState(null);
  const filesize = (size) => {
    var i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][i];
  };
  const browse = () => {
    var _a;
    if (fileRef) {
      (_a = fileRef.current) == null ? void 0 : _a.click();
    }
  };
  const handleFileChange = (e) => {
    var _a;
    const input = e.target;
    if (!((_a = input.files) == null ? void 0 : _a.length)) {
      return;
    }
    const file2 = input.files[0];
    setFile(file2);
    onInput(file2);
  };
  const remove = () => {
    setFile(null);
    onInput({ name: "" });
    fileRef.current.value = "";
  };
  return /* @__PURE__ */ jsxs("div", { className, children: [
    label && /* @__PURE__ */ jsxs("label", { className: "form-label", htmlFor: name, children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `form-input p-0 ${error && "error"}`, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          id: name,
          ref: fileRef,
          accept,
          type: "file",
          className: "hidden",
          onInput: handleFileChange
        }
      ),
      !file && /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx(Button, { text: "Browse", onClick: browse }) }),
      file && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-1", children: [
          file.name,
          /* @__PURE__ */ jsxs("span", { className: "ml-1 text-gray-600 text-xs", children: [
            "(",
            filesize(file.size),
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { text: "Remove", onClick: remove })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "form-error", children: error })
  ] });
}
export {
  FileInput as F
};
