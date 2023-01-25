import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { title: "Coaches", icon: "mdi-view-dashboard", route: "/coaches" },
      { title: "Register Coach", icon: "mdi-image", route: "/register" },
      { title: "Requests", icon: "mdi-help-box", route: "/requests" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
