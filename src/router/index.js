import { createRouter, createWebHistory } from "vue-router";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsShow from "../views/ProductsShow.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import SignupView from "../views/SignupView.vue";
import ProductsNew from "../views/ProductsNew.vue";
import ProductsEdit from "../views/ProductsEdit.vue";
import OrdersView from "../views/OrdersView.vue";

const routes = [
  {
    path: "/products",
    name: "products",
    component: ProductsIndex,
  },
  {
    path: "/product/:id",
    name: "products-show",
    component: ProductsShow,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/products/new",
    name: "products-new",
    component: ProductsNew,
  },
  {
    path: "/products/:id",
    name: "products-show",
    component: ProductsShow,
  },
  {
    path: "/products/:id/edit",
    name: "products-edit",
    component: ProductsEdit,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
