<template>
  <div class="signin-container">
    <div class="signin-container-one">
      <div class="welcome-meassage">
        <h1>Hi,</h1>
        <h1>Welcome Back</h1>
      </div>
      <img :src="img2" alt="" />
    </div>

    <div class="signin-container-two">
      <div class="signin-header-link">
        <h3 class="create-account-heading">Create an account?</h3>
        <router-link to="/doctor-register"> Sign up </router-link>
      </div>

      <div class="signin-body">
        <div class="signin-header">
          <h1>Login</h1>
          <h1>to eHealthHub</h1>
        </div>

        <div class="signin-textfield-container">
          <TextField
            size="large"
            v-model="largeTextValue"
            placeholder="Enter your Email"
          />
          <PasswordInput v-model="password" placeholder="Enter your password" />
          <router-link to="#"> Forgot Password? </router-link>
        </div>
        <div class="Signin-button-section">
          <button class="signin-button" @click="handleSignInClick">
            <h2>Sign in</h2>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img2 from "../assets/image2.png";
import TextField from "../components/TextFields.vue";
import PasswordInput from "../components/PasswordTextField.vue";

export default {
  mounted() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  },
  data() {
    return {
      img2: img2,
    };
  },
  components: {
    TextField,
    PasswordInput,
  },
  methods: {
    handleSignInClick() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.signin-container {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  width: 100vw;
  height: 100vh;
}

.signin-container-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 40%;
}

.welcome-meassage {
  display: flex;
  flex-direction: row;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: x-large;
}

.signin-container-one h1,
.signin-container-one h1 {
  margin: 0;
  margin-right: 10px;
}

.signin-container-two {
  display: flex;
  flex-direction: column;
   height: 100%;
  min-height: 0;
  width: 60%;
  background-color: var(--primary-color);
  overflow: hidden; 
  box-sizing: border-box;
}

.signin-header-link {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}

.signin-header-link a {
  color: white !important;
  cursor: pointer;
  text-decoration: underline;
}

.create-account-heading {
  color: white;
  margin-right: 10px;
}

.signin-body {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.signin-header {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: white;
  margin-bottom: 40px;
}

.signin-header h1:first-child {
  margin-right: 10px;
}

.signin-textfield-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.signin-textfield-container .router-link-active {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
.Signin-button-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px;
}

.signin-button {
  color: var(--primary-color);
  background-color: white;
  padding: 0 50px 0 50px;
  border: 0;
  border-radius: 10px;
  font-size: medium;
}

.signin-button:hover {
  background-color: rgb(185, 182, 182);
}

@media screen and (max-width: 1366px) {
  .signin-container {
    display: flex;
    flex-direction: column;
  }

  .signin-container-one {
    display: none;
  }

  .signin-container-two {
    width: 100%;
  }

  .signin-header {
    font-size: 30px;
  }

  .signin-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signin-button {
    font-size: small;
  }
}

@media screen and (max-width: 768px) {
  .signin-container {
    flex-direction: column;
  }

  .signin-container-one {
    display: none;
  }

  .signin-container-two {
    width: 100%;
  }

  .signin-header {
    font-size: 20px;
  }
  .signin-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signin-button {
    font-size: small;
    padding: auto;
  }
}

@media (max-width: 400px) {
  .signin-header-link h3 {
    font-size: medium;
  }

  .signin-header h1 {
    font-size: larger;
  }

  .signin-button {
    padding: 0 30px 0 30px;
  }

  .signin-button h3 {
    font-size: small;
  }
}
</style>
