import Vue from "vue";
import VueRouter from "vue-router";
import CoachesList from "../pages/CoachesList.vue";
import CoachDetail from "../pages/CoachDetail.vue";
import CoachContact from "../pages/CoachContact.vue";
import CoachRegister from "../pages/CoachRegister.vue";
import RequestsList from "../pages/RequestsList.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    children: [{ path: "/contact", component: CoachContact }],
  },
  { path: "/register", component: CoachRegister },
  { path: "/requests", component: RequestsList },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
