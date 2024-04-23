<template>
  <div class="password-input-container">
    <input
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :value="internalValue"
      @input="updateValue($event.target.value)"
      class="password-input"
    />
    <span class="password-toggle" @click="toggleShowPassword">
      <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
    </span>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  props: {
    value: String,
    placeholder: String,
  },
  data() {
    return {
      internalValue: this.value,
      showPassword: false,
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    updateValue(newValue) {
      this.internalValue = newValue;
      this.$emit("update:value", newValue); // Emit the 'update:value' event with the new value
    },
  },
  components: {
    FontAwesomeIcon,
  },
  created() {
    library.add(faEye, faEyeSlash);
  },
};
</script>

<style scoped>
.password-input-container {
  position: relative;
  margin-bottom: 10px;
}

.password-input {
  width: 400px;
  height: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  border: 0;
  padding: 10px;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

@media screen and (max-width: 492px) {
  .password-input {
    width: 300px;
  }
}

@media (max-width: 300px) {
  .password-input {
    width: 200px;
    height: 20px;
  }
}
</style>
