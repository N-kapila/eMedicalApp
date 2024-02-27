<template>
  <div id="app">
   
    <!-- <TextField placeholder="Small TextField" size="small" v-model="smallTextValue" /><br/>
    <TextField placeholder="Medium TextField" size="medium" v-model="mediumTextValue" /><br/>
    <TextField placeholder="Large TextField" size="large" v-model="largeTextValue" /> -->
    <PasswordInput placeholder="Enter Password" v-model="password" />
  </div>
</template>

<script>
import TextField from './components/TextFields.vue';
import PasswordInput from './components/PasswordTextField.vue'

export default {
  name: 'App',
  components: {
    TextField,
    PasswordInput
  },
  data() {
    return {
       smallTextValue: '',
       mediumTextValue: '',
       largeTextValue: '',
        password: ''

    };
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>
