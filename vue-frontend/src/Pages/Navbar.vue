<template>
  <div class="navbar-container">
    <button class="toggle-nav-btn" @click="toggleNavVisibility">&#9776;</button>
    <div
      class="overlay"
      :class="{ visible: isNavVisible }"
      @click="closeNav"
    ></div>

    <div class="navbar-container-one" :class="{ visible: isNavVisible }">
      <img class="nav-image" :src="user" alt="" />
      <h3 class="doctor-details">Dr: xxxxxx</h3>
      <h3 class="doctor-details">ID: 123456</h3>
    </div>

    <div class="navbar-container-two" :class="{ visible: isNavVisible }">
      <router-link to="/dashboard" class="nav-link" @click="closeNav">
        <font-awesome-icon icon="home" />
        Dashboard
      </router-link>
      <router-link to="/doctor-profile" class="nav-link" @click="closeNav">
        <font-awesome-icon icon="user" />
        My Profile
      </router-link>
      <router-link to="/patient-register" class="nav-link" @click="closeNav">
        <font-awesome-icon icon="clipboard-list" />
        Patient Registration
      </router-link>
      <router-link to="/patient-list" class="nav-link" @click="closeNav">
        <font-awesome-icon icon="list" />
        Patient List
      </router-link>
    </div>
  </div>
</template>

<script>
import user from "../assets/user.png";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faClipboardList,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  data() {
    return {
      user: user,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  created() {
    library.add(faHome, faUser, faClipboardList, faList);
  },
  setup() {
    const isNavVisible = ref(false);
    const route = useRoute();

    const toggleNavVisibility = () => {
      isNavVisible.value = !isNavVisible.value;
    };

    const closeNav = () => {
      isNavVisible.value = false;
    };

    return {
      isNavVisible,
      toggleNavVisibility,
      closeNav,
      route,
    };
  },
};
</script>

<style>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 20vw;
  max-width: 300px;
  min-width: 225px;
}

.navbar-container-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  height: 30%;
}

.nav-image {
  height: 100px;
  width: 100px;
}

.doctor-details {
  color: rgb(255, 255, 255);
  margin-bottom: 0;
}

.navbar-container-two {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5d5ae;
  height: 70%;
  padding: 20px 0 0 50px;
}

.nav-link {
  text-decoration: none;
  color: rgb(35, 35, 35);
  margin: 20px 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.nav-link:hover {
  color: rgb(0, 0, 0);
  transform: scale(1.05);
}

.nav-link span {
  margin-right: 10px;
}

.nav-link svg {
  margin-right: 10px;
}

.nav-link.active-link {
  color: var(--primary-color);
}

.toggle-nav-btn {
  display: none;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Set a high z-index to ensure it's above other elements */
}

.overlay.visible {
  display: block;
}

@media screen and (max-width: 1366px) {
  .nav-link {
    padding-left: 10px;
    margin-left: 0;
    white-space: nowrap;
  }
  .navbar-container-one {
    padding: 20px;
  }
  .navbar-container-two {
    padding: 30px;
  }
}

@media screen and (max-width: 768px) {
  .navbar-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 0;
  }

  .toggle-nav-btn {
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 20px;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    z-index: 1004;
  }

  .navbar-container-one,
  .navbar-container-two {
    display: none;
    position: fixed;
    width: 100vw;
  }

  .navbar-container-one.visible,
  .navbar-container-two.visible {
    display: flex;
    position: fixed;
    width: 100vw;
    z-index: 1003;
  }

  .navbar-container-one.visible {
    top: 0;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 20px;
  }

  .navbar-container-two.visible {
    align-items: flex-start;
    padding: 0 0 0 20px;
    bottom: 0;
  }
}

@media (max-width: 375px) {
  .navbar-container-one.visible {
    height: 25%;
    padding-bottom: 20px;
  }
}
</style>
