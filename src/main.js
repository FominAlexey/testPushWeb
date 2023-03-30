import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//CSS Framework Vuetify
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/styles/styles.css";

//FCM
import FCMToken from "./services/firebase";

//Работа с запросами
import axios from "axios";
import VueAxios from "vue-axios";

//Получение Device_Token для FCM
FCMToken();

//Загрузка шрифтов
loadFonts();

createApp(App)
	.use(router)
	.use(store)
	.use(vuetify)
	.use(VueAxios, axios)
	.mount("#app");
