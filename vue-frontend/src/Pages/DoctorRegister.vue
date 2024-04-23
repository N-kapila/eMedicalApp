<template>
  <div class="container">
    <div class="container-one">
      <img :src="img1" alt="" />
    </div>

    <div class="container-two">
      <div class="signup-header">
        <h4>Already have an account?</h4>
        <router-link to="/doctor-signin">Sign in</router-link>
      </div>

      <div class="header">
        <h1>Doctor Sign Up</h1>
      </div>

      <div class="textField-container">
        <div class="textField-container-one">
          <p>Full Name:</p>
          <TextField
            size="large"
            :value="fullName"
            @update:value="updateFullName"
            placeholder="Enter your name"
          />
          <br />
          <p>Doctor Id:</p>
          <TextField
            size="large"
            :value="doctorId"
            @update:value="updateDoctorId"
            placeholder="Enter your Id"
          />

          <br />
          <p>Speciality:</p>
          <TextField
            size="large"
            :value="speciality"
            @update:value="updateSpeciality"
            placeholder="Enter speciality"
          />

          <br />
        </div>

        <div class="textField-container-one">
          <p>Email:</p>
          <TextField
            size="large"
            :value="email"
            @update:value="updateEmail"
            placeholder="Enter email address"
          />

          <br />
          <p>Mobile Number:</p>
          <TextField
            size="large"
            :value="mobileNumber"
            @update:value="updateMobileNumber"
            placeholder="Enter mobile number"
          />

          <br />
          <p>Hospital Name:</p>
          <TextField
            size="large"
            :value="hospitalName"
            @update:value="updateHospitalName"
            placeholder="Enter hospital name"
          />

          <br />
        </div>
      </div>

      <div class="textField-container">
        <div class="textField-container-one">
          <p>Password:</p>
          <PasswordInput
            :value="password"
            @update:value="updatePassword"
            placeholder="Enter password"
          />
        </div>

        <div class="textField-container-one">
          <p>Confirm Password:</p>
          <PasswordInput
            :value="confirmPassword"
            @update:value="updateConfirmPassword"
            placeholder="Re-enter password"
          />
        </div>
      </div>

      <div class="footer-container">
        <div class="profile-section">
          <div v-if="profilePic" class="profile-pic-container">
            <img :src="profilePic" alt="Profile" class="profile-pic" />
          </div>
          <div class="label-container">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              @change="handleFileChange"
            />
            <span class="file-input-text"> Choose profile picture </span>
          </div>
        </div>

        <div class="button-section">
          <button class="signup-button" @click="signUp">
            <h2>Sign Up</h2>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/image1.png";
import TextField from "../components/TextFields.vue";
import PasswordInput from "../components/PasswordTextField.vue";
import { db, auth } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      img1: img1,
      profilePic: null,
      fullName: "",
      doctorId: "",
      speciality: "",
      email: "",
      mobileNumber: "",
      hospitalName: "",
      password: "",
      confirmPassword: "",
    };
  },
  components: {
    TextField,
    PasswordInput,
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePic = URL.createObjectURL(file);
      }
    },
    updateFullName(newValue) {
      this.fullName = newValue;
    },
    updateDoctorId(newValue) {
      this.doctorId = newValue;
    },
    updateSpeciality(newValue) {
      this.speciality = newValue;
    },
    updateEmail(newValue) {
      this.email = newValue;
    },
    updateMobileNumber(newValue) {
      this.mobileNumber = newValue;
    },
    updateHospitalName(newValue) {
      this.hospitalName = newValue;
    },
    updatePassword(newValue) {
      this.password = newValue;
    },
    updateConfirmPassword(newValue) {
      this.confirmPassword = newValue;
    },
    async signUp() {
      try {
        if (this.password !== this.confirmPassword) {
          console.error("Passwords do not match");
          alert("Passwords do not match");
          return;
        }

        // Validate if all required fields are filled
        if (
          !this.fullName ||
          !this.doctorId ||
          !this.speciality ||
          !this.email ||
          !this.mobileNumber ||
          !this.hospitalName ||
          !this.password ||
          !this.confirmPassword
        ) {
          console.error("All fields are required");
          alert("All fields are required");
          return;
        }

        // Create user with email and password
        const { user } = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        // If user creation successful, add doctor details to firestore
        if (user) {
          await addDoc(collection(db, "vue-doctor-details"), {
            uid: user.uid,
            fullName: this.fullName,
            doctorId: this.doctorId,
            speciality: this.speciality,
            email: this.email,
            mobileNumber: this.mobileNumber,
            hospitalName: this.hospitalName,
          });
          console.log("Doctor signed up successfully!");

          // Reset form fields after successful signup
          this.fullName = "";
          this.doctorId = "";
          this.speciality = "";
          this.email = "";
          this.mobileNumber = "";
          this.hospitalName = "";
          this.password = "";
          this.confirmPassword = "";

          // Show success message
          alert("Registration successful!");
          window.location.href = "/doctor-signin";
        }
      } catch (error) {
        console.error("Error signing up doctor:", error);
        alert("Error signing up doctor:", +error.message);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  max-height: calc(100vh - 20px);
  width: 100%;
}
.container-one {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
   overflow-y: auto;
}

.container-two {
  display: flex;
  flex-direction: column;
  width: 70vw;
  border-left: 1px solid #ccc;
  overflow-y: auto;
}


.signup-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 0 0;
}

.signup-header h4 {
  margin-right: 5px;
}

.signup-header router-link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
}

.header h1 {
  color: var(--primary-color);
  font-size: 50px;
}

.textField-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.textField-container > div {
  flex: 1;
  padding-left: 50px;
}

.textField-container-one {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
}

.footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

.profile-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.profile-pic-container {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.label-container {
  position: relative;
  margin: 10px;
}

input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

label {
  cursor: pointer;
}

.file-input-text {
  margin-left: 5px;
  padding: 5px;
  border: 1px solid rgb(54, 53, 53);
  border-radius: 5px;
}

.button-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 30px;
}

.signup-button {
  background-color: var(--primary-color);
  color: white;
  padding: 1px 50px 1px 50px;
  border: 0;
  border-radius: 10px;
}

.signup-button:hover {
  background-color: #903e00;
}

@media screen and (max-width: 1366px) {
  .container-one {
    display: none;
  }

  .container-two {
    display: flex;
    width: 100%;
    border: none;
    margin-left: 20px;
  }
}

/* 768px is standard point */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .container-one {
    display: none;
  }

  .container-two {
    width: auto;
  }

  .header {
    align-items: center;
    justify-content: center;
  }

  .textField-container {
    flex-direction: column;
  }
  .textField-container > div {
    padding: 0;
  }

  .footer-container {
    flex-direction: column;
  }
}

@media (max-width: 390px) {
  .signup-header {
    justify-content: flex-end;
    display: flex;
    width: 100%;
  }

  .header h1 {
    font-size: xx-large;
  }
  .file-input-text {
    margin-left: 0;
    padding: 5px 10px;
    font-size: 12px;
    display: inline-block;
  }
  .signup-button {
    padding: 1px 25px;
  }
}
</style>
