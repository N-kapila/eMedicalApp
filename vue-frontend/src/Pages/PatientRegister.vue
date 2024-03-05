<template>
  <div class="register-patient">
    <h1>Register Patient</h1>

    <div class="patient-container">
      <div class="patient-container-one">
        <p>Full Name:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter your name"
        />
        <br />
        <p>Age:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter age"
        />
        <br />
        <p>Email:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter email address"
        />
        <br />
        <p>Current Diseases</p>
        <SelectTextField
          :options="options"
          v-model="selectedOption"
          placeholder="Select disease"
        />
        <br />
        <p>Current Medication</p>
        <SelectTextField
          :options="options"
          v-model="selectedOption"
          placeholder="Select medication"
        />
        <br />
        <p>Current Treatments</p>
        <SelectTextField
          :options="options"
          v-model="selectedOption"
          placeholder="Select treatments"
        />
      </div>

      <div class="patient-container-one">
        <p>Gender:</p>
        <TextField size="large" v-model="largeTextValue" placeholder="Gender" />
        <br />
        <p>Mobile Number:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter mobile number"
        />
        <br />
        <p>Address:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter address"
        />
        <br />
        <p>Register Date:</p>
        <TextField
          size="large"
          v-model="largeTextValue"
          placeholder="Enter register date"
        />
        <br />
        <p>Past Diseases</p>
        <SelectTextField
          :options="options"
          v-model="selectedOption"
          placeholder="Select disease"
        />
        <br />
        <p>Next Appointment Date:</p>
        <TextField size="large" v-model="largeTextValue" placeholder="Date" />
      </div>
    </div>
    <div class="button-section">
      <button class="register-button">
        <h2>Register</h2>
      </button>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextFields.vue";
import SelectTextField from "../components/SelectTextField.vue";
export default {
  components: {
    TextField,
    SelectTextField,
  },
  data() {
    return {
      largeTextValue: "",
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

<style scoped>
.register-patient {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.register-patient h1 {
  color: var(--primary-color);
  padding: 10px;
  font-size: xxx-large;
  margin: 0;
}

.patient-container {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.patient-container-one {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  padding-left: 100px;
}

.button-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

.register-button {
  background-color: var(--primary-color);
  color: white;
  padding: 1px 100px 1px 100px;
  border: 0;
  border-radius: 10px;
}
.register-button:hover {
  background-color: #903e00;
}

@media screen and (max-width: 1366px) {
  .patient-container-one {
    width: 100%;
    padding-left: 50px;
  }
}

@media screen and (max-width: 768px) {
  .register-patient {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 10px;
  }

  .register-patient h1 {
    font-size: xxx-large;
  }

  .patient-container {
    width: 75%;
    flex-direction: column;
  }

  .patient-container-one {
    width: 100%;
    padding-left: 0;
  }
}

@media (max-width: 375px) {
  .register-patient h1 {
    padding-top: 10px;
    font-size: xx-large;
  }

  .register-button {
    padding: 1px 50px 1px 50px;
  }
}
</style>
