import { createInertiaApp, resolvePageComponent } from "@inertiajs-revamped/vue";
import { createServer } from "@inertiajs-revamped/vue/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `../pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "../pages/auth/login.vue": () => import("./assets/login-qYsw6pdV.js"), "../pages/contacts/create.vue": () => import("./assets/create-KHXBOrwe.js"), "../pages/contacts/edit.vue": () => import("./assets/edit-C-3VWDTy.js"), "../pages/contacts/index.vue": () => import("./assets/index-Bz3uMBWM.js"), "../pages/dashboard/index.vue": () => import("./assets/index-ZzgbBYFV.js"), "../pages/error.vue": () => import("./assets/error-B1c558Gj.js"), "../pages/organizations/create.vue": () => import("./assets/create-C0uPcV7E.js"), "../pages/organizations/edit.vue": () => import("./assets/edit-CnSks9uD.js"), "../pages/organizations/index.vue": () => import("./assets/index-fnwIgxLz.js"), "../pages/reports/index.vue": () => import("./assets/index-K4qGYbk-.js"), "../pages/users/create.vue": () => import("./assets/create-BTFQP1MO.js"), "../pages/users/edit.vue": () => import("./assets/edit-DtUUEi77.js"), "../pages/users/index.vue": () => import("./assets/index-IbDU0E7B.js") })
    ),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
