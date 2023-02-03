import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import AddProduct from "../views/AddProduct.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/add",
      name: "addProduct",
      component: AddProduct,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});
router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name !== "login") {
    return { name: "login" };
  } else if (localStorage.access_token && to.name === "login") {
    return { name: "home" };
  }
});
export default router;
