import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.css";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
