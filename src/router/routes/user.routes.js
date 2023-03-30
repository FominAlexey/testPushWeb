import NewTendersView from "@/views/user/NewTendersView.vue";
import TendersForAnalysisView from "@/views/user/TendersForAnalysisView.vue";
import TendersInProgressView from "@/views/user/TendersInProgressView.vue";
import SettingsView from "@/views/user/SettingsView.vue";

import UserLayout from "@/layouts/UserLayout";

import store from "@/store/index";

const ifNotAuthenticated = (to, from, next) => {
  if (localStorage.getItem("vuex")) {
    store.dispatch("INIT_ACCOUNT_VUEX");
  }

  if (!store.getters.isAuthorized) {
    next({ name: "Login" });
  }

  next();
  return;
};

export default [
  {
    path: "/NewTenders",
    component: NewTendersView,
    name: "NewTenders",
    beforeEnter: ifNotAuthenticated,
    meta: {
      layout: UserLayout,
      title: "Новые тендеры",
    },
  },
  {
    path: "/TendersForAnalysis",
    component: TendersForAnalysisView,
    name: "TendersForAnalysis",
    beforeEnter: ifNotAuthenticated,
    meta: {
      layout: UserLayout,
      title: "Тендеры для анализа",
    },
  },
  {
    path: "/TendersInProgress",
    component: TendersInProgressView,
    name: "TendersInProgress",
    beforeEnter: ifNotAuthenticated,
    meta: {
      layout: UserLayout,
      title: "Тендеры в работе",
    },
  },
  {
    path: "/Settings",
    component: SettingsView,
    name: "Settings",
    beforeEnter: ifNotAuthenticated,
    meta: {
      layout: UserLayout,
      title: "Настройки",
    },
  },
];
