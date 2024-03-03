<template>
  <div class="app">
    <Navbar v-if="showNavbar" />
    <div :class="{ 'main-content': showMainContent }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./Pages/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      showNavbar: false,
      showMainContent: false,
    };
  },

 watch: {
    $route(to, from) {
      if (
        to.path === "/doctor-register" ||
        to.path === "/doctor-signin" ||
        to.path === "/"
      ) {
        this.showNavbar = false;
        this.showMainContent = false;
      } else {
        this.showNavbar = true;
        this.showMainContent = true;
      }
    },
  },
};
</script>

<style>
.app {
  height: 100%;
  display: flex;
  align-items: flex-start;
}

.main-content {
  margin-left: 20vw;
  height: calc(100vh - 1rem);
  overflow-x: auto;
  flex-grow: 1;
}

@media screen and (max-width: 768px) {
  .main-content {
    margin-left: 0;
    flex: 1;
  }
}

@media (max-width: 375px) {
  .main-content {
    padding-left: 0;
  }
}
</style>
