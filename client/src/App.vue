<script>
import { RouterView } from "vue-router";
import Login from "./views/Login.vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Login,
    Sidebar,
    Navbar,
  },
};
</script>
<template>
  <Navbar v-if="$route.name !== 'login'" />
  <Sidebar v-if="$route.name !== 'login'" />
  <RouterView />
</template>
