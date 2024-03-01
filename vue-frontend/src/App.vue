<template>
  <div id="app">
    <!-- <TextField placeholder="Small TextField" size="small" v-model="smallTextValue" /><br/>
    <TextField placeholder="Medium TextField" size="medium" v-model="mediumTextValue" /><br/>
    <TextField placeholder="Large TextField" size="large" v-model="largeTextValue" /> -->
    <!-- <PasswordInput placeholder="Enter Password" v-model="password" /> -->
    <!-- <SelectTextField :options="options" v-model="selectedOption" placeholder="Select an option" /> -->
    <Navbar />
  </div>
</template>

<script>
import TextField from "./components/TextFields.vue";
import PasswordInput from "./components/PasswordTextField.vue";
import SelectTextField from "./components/SelectTextField.vue";
import DoctorRegister from "./Pages/DoctorRegister.vue";
import DoctorSignin from "./Pages/DoctorSignin.vue";
import Navbar from "./Pages/Navbar.vue";

export default {
  name: "App",
  components: {
    TextField,
    PasswordInput,
    SelectTextField,
    DoctorRegister,
    DoctorSignin,
    Navbar
  },
  data() {
    return {
      smallTextValue: "",
      mediumTextValue: "",
      largeTextValue: "",
      password: "",
      selectedOption: "",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    };
  },
};
</script>

<style>

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 0px;
}
</style>
