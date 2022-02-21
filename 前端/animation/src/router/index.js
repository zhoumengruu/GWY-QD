/*
 * @Author: 周梦茹
 * @Date: 2021-12-13 10:33:23
 * @LastEditors: 周梦茹
 * @LastEditTime: 2021-12-13 10:35:07
 * @Description: 路由
 * @FilePath: \animation\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
