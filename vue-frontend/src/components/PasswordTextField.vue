<template>
    <div class="password-input-container">
            <input :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" v-model="internalValue"
                class="password-input" />
            <span class="password-toggle" @click="toggleShowPassword">
                <font-awesome-icon :icon="showPassword ? 'eye' : 'eye-slash'" />
            </span>
    </div>
</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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
    },
    components: {
        FontAwesomeIcon,
    },
    created() {
        library.add(faEye, faEyeSlash);
    }
};
</script>


<style scoped>
.password-input-container {
    position:absolute;
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
</style>
