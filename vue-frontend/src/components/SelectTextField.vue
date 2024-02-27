<template>
    <select v-model="selectedValue" @change="handleChange" class="select-text-field" :placeholder="placeholder">
        <option :value="''" disabled hidden>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selectedValue: '', // Set selectedValue to an empty string initially
        };
    },
    methods: {
        handleChange(event) {
            this.$emit('change', event.target.value);
        },
    },
};
</script>



<style scoped>
  .select-text-field {
    width: 420px;
    height: 40px;
    background-color: #eeeeee;
    border-radius: 10px;
    border: 0;
    padding: 10px;
    margin-right: 30px;
  }

    @media screen and (max-width: 492px) {
         .select-text-field {
         width: 320px;
    }
    }
</style>