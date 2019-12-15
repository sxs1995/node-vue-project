import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
    children: [
      {
        path: "/categories/create",
        component: () => import("@/views/CategoryEdit")
      },
      {
        path: "/categories/edit/:id",
        props: true,
        component: () => import("@/views/CategoryEdit")
      },
      {
        path: "/categories/list",
        component: () => import("@/views/CategoryList")
      },
      {
        path: "/products/create",
        component: () => import("@/views/ProductEdit")
      },
      {
        path: "/products/edit/:id",
        props: true,
        component: () => import("@/views/ProductEdit")
      },
      {
        path: "/products/list",
        component: () => import("@/views/ProductList")
      },
      {
        path: "/heroes/create",
        component: () => import("@/views/HeroEdit")
      },
      {
        path: "/heroes/edit/:id",
        props: true,
        component: () => import("@/views/HeroEdit")
      },
      {
        path: "/heroes/list",
        component: () => import("@/views/HeroList")
      },
      {
        path: "/articles/create",
        component: () => import("@/views/ArticleEdit")
      },
      {
        path: "/articles/edit/:id",
        props: true,
        component: () => import("@/views/ArticleEdit")
      },
      {
        path: "/articles/list",
        component: () => import("@/views/ArticleList")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
