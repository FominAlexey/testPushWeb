import LoginView from "@/views/login/LoginView.vue";
import LoginLayout from "@/layouts/LoginLayout";

import store from "@/store/index";

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("vuex")) {
    store.dispatch("INIT_ACCOUNT_VUEX");
  }

  if (store.getters.isAuthorized) {
    next({ name: "NewTenders" });
  }

  next();
  return;
};

export default [
  {
    path: "/",
    component: LoginView,
    name: "Login",
    beforeEnter: ifAuthenticated,
    meta: {
      layout: LoginLayout,
      title: "Авторизация",
    },
  },
];
