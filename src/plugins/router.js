import Vue from "vue";
import Router from "vue-router";
const Today = () => import("../components/pages/today/today.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/today"
    },
    {
      path: "/today",
      component: Today
    }
  ]
});
