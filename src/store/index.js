import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { title: "Coaches", icon: "mdi-list-box", route: "/coaches" },
      { title: "Register Coach", icon: "mdi-account-plus", route: "/register" },
      { title: "Requests", icon: "mdi-help-box", route: "/requests" },
    ],
    coaches: [
      {
        id: "c1",
        firstName: "Maximilian",
        lastName: "Schwarzmüller",
        areas: ["frontend", "backend", "career"],
        description:
          "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30,
      },
      {
        id: "c2",
        firstName: "Julie",
        lastName: "Jones",
        areas: ["frontend", "career"],
        description:
          "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
        hourlyRate: 30,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
