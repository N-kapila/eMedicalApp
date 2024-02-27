<template>
    <input :type="inputType" :placeholder="placeholder" :value="value" @input="onChange" :class="inputClass" />
</template>

<script>
export default {
    props: {
        placeholder: String,
        value: String,
        onChange: Function,
        size: String  
    },
    computed: {
        inputType() {
           
            return this.placeholder === "Enter name" ? "text" : "password";
        },
        inputClass() {
           
            return {
                'small-text-field': this.size === 'small',
                'medium-text-field': this.size === 'medium',
                'large-text-field': this.size === 'large'
            };
        }
    }
};
</script>

<style scoped>
.small-text-field {
    width: 100px;
    height: 25px;
    background-color: #eeeeee;
    border-radius: 5px;
    border: 0;
}

.medium-text-field {
    width: 200px;
    height: 25px;
    /* background-color: #eeeeee; */
    border-radius: 5px;
    border: 0;
    padding: 5px;
}

.large-text-field {
    width: 400px;
    height: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
    border: 0;
    padding: 10px;
}

@media screen and (max-width: 492px) {
  .large-text-field {
    width: 300px;
  }
}
@media (max-width: 300px) {

      .medium-text-field{
        width: 150px;
        height: 20px;
      }
      .large-text-field {
        width: 200px;
        height: 20px;
      }
    }
</style>
