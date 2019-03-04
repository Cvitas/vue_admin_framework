import Vue from "vue";
import VueRouter from 'vue-router'
import Vuex from "vuex";
import PortalVue from 'portal-vue'


import App from "@/views/App.vue";
import ROUTER from "@/router/router";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(PortalVue);

const router = new VueRouter(ROUTER);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
