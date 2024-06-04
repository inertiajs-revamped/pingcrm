import { jsx } from "react/jsx-runtime";
import { createInertiaApp, resolvePageComponent } from "@inertiajs-revamped/react";
import { createServer } from "@inertiajs-revamped/react/server";
import { renderToString } from "react-dom/server";
const appName = "PingCRM";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `../pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "../pages/auth/login.tsx": () => import("./assets/login-ywJf0fXZ.js"), "../pages/contacts/create.tsx": () => import("./assets/create-CyF4qFc3.js"), "../pages/contacts/edit.tsx": () => import("./assets/edit-Br0HmCJO.js"), "../pages/contacts/index.tsx": () => import("./assets/index-Bd_YgyHz.js"), "../pages/dashboard/index.tsx": () => import("./assets/index-CnKPMxQG.js"), "../pages/error.tsx": () => import("./assets/error--Jl7G3WY.js"), "../pages/organizations/create.tsx": () => import("./assets/create-B5qe48ZL.js"), "../pages/organizations/edit.tsx": () => import("./assets/edit-Bi7_w-WQ.js"), "../pages/organizations/index.tsx": () => import("./assets/index-bcoHREXA.js"), "../pages/reports/index.tsx": () => import("./assets/index-VzRQPh_D.js"), "../pages/users/create.tsx": () => import("./assets/create-DAdnOdyY.js"), "../pages/users/edit.tsx": () => import("./assets/edit-xtRyAKgd.js"), "../pages/users/index.tsx": () => import("./assets/index-HYxgFU1s.js") })
    ),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
