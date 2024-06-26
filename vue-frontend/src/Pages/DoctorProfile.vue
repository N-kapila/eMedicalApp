<template>
  <div class="profile-container">
    <div class="heading-container">
      <h1>My Profile</h1>
    </div>
    <div class="profile-container-one">
      <img class="user-image" :src="user" alt="" />
    </div>

    <div class="profile-container-two">
      <div class="profile-textfield-container">
        <div class="field-container">
          <p>Full Name:</p>
          <h3 v-if="userData">{{ userData.fullName }}</h3>
        </div>
        <div class="field-container">
          <p>Doctor Id:</p>
          <h3 v-if="userData">{{ userData.doctorId }}</h3>
        </div>
        <div class="field-container">
          <p>Speciality:</p>
          <h3 v-if="userData">{{ userData.speciality }}</h3>
        </div>
      </div>
      <div class="profile-textfield-container">
        <div class="field-container">
          <p>Email:</p>
          <h3 v-if="userData">{{ userData.email }}</h3>
        </div>
        <div class="field-container">
          <p>Mobile Number:</p>
          <h3 v-if="userData">{{ userData.mobileNumber }}</h3>
        </div>
        <div class="field-container">
          <p>Hospital Name:</p>
          <h3 v-if="userData">{{ userData.hospitalName }}</h3>
        </div>
      </div>
    </div>

    <div class="profile-container-three">
      <button class="edit-button">
        <h2>Edit Details</h2>
      </button>
      <button class="save-button">
        <h2>Save</h2>
      </button>
      <button class="signout-button" @click="handleSignOut">
        <h2>Sign Out</h2>
      </button>

      <button class="delete-button">
        <h2>Delete account</h2>
      </button>
    </div>
  </div>
</template>

<script>
import user from "../assets/user.png";
import TextField from "../components/TextFields.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { mapGetters } from "vuex";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase";

export default {
  name: "App",
  components: {
    TextField,
  },
  data() {
    return {
      user: user,
      userData: null,
    };
  },
  computed: {
    // Map the 'getUserUid' getter from the Vuex store
    ...mapGetters("auth", ["getUserUid"]),
  },
  methods: {
    async fetchData() {
      try {
        const userUid = this.$store.state.auth.userUid;
        if (userUid) {
          const firebaseApp = initializeApp(firebaseConfig);
          const db = getFirestore(firebaseApp);

          const q = query(
            collection(db, "vue-doctor-details"),
            where("uid", "==", userUid)
          );

          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log("Profile User Data:", userData.fullName);
            this.userData = userData;
          } else {
            console.log("User document not found for UID:", userUid);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    async handleSignOut() {
      try {
        await this.$store.dispatch("auth/signOut");
        console.log("User signed out successfully.");
        alert("Sign out successfully");
        this.$router.push("/doctor-signin");
        // Redirect to the sign-in page or any other page after sign-out
      } catch (error) {
        console.error("Error signing out:", error);
      }
    },
  },
  mounted() {
    // Fetch data or perform actions upon component mount
    this.fetchData();
  },
};
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.heading-container {
  align-self: flex-start;
}

.profile-container h1 {
  color: var(--primary-color);
  padding: 30px;
  font-size: xxx-large;
  margin: 0;
}

.profile-container-one {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.user-image {
  height: 200px;
  width: 200px;
}

.profile-container-two {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.profile-container-two > div {
  flex: 1;
  padding-left: 50px;
}

.profile-textfield-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.field-container {
  display: flex;
  align-items: center;
  padding: 10px;
}

.field-container p {
  margin-right: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: large;
  font-weight: bold;
  width: 200px;
}

.profile-container-three {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;
}

.edit-button,
.save-button,
.signout-button,
.delete-button {
  color: white;
  padding: 1px 30px;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: #3131e2;
}

.save-button {
  background-color: var(--primary-color);
}

.signout-button {
  background-color: #29f529;
}

.delete-button {
  background-color: #f0140d;
}

.edit-button:hover {
  background-color: #191967;
}
.save-button:hover {
  background-color: #903e00;
}
.signout-button:hover {
  background-color: #295029;
}
.delete-button:hover {
  background-color: #740400;
}
@media screen and (max-width: 1366px) {
  .profile-container-two {
    width: 100%;
  }

  .profile-container-three {
    width: 100%;
  }
}

@media screen and (max-width: 950px) {
  .profile-container h1 {
    padding-left: 70px;
  }
  .profile-container-two {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .edit-button,
  .save-button,
  .signout-button,
  .delete-button {
    width: 25%;
    padding: 3px;
    margin-bottom: 10px;
    font-size: 12px;
    margin-right: 10px;
  }
}

@media screen and (max-width: 768px) {
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  .user-image {
    height: 150px;
    width: 150px;
  }

  .profile-container-two {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .profile-textfield-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .field-container p {
    margin-bottom: 5px;
  }

  .profile-container-three {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .edit-button,
  .save-button,
  .signout-button,
  .delete-button {
    width: 25%; /* Make all buttons the same width */
    padding: 3px;
    margin-bottom: 10px;
    font-size: 12px;
  }
}

@media (max-width: 375px) {
  .profile-container h1 {
    font-size: xx-large;
  }

  .profile-container-two {
    padding-left: 0;
    padding-right: 0;
    width: 90%;
  }

  .profile-container-two > div {
    padding-left: 0;
  }

  .field-container p {
    width: 100px;
    margin-right: 0;
  }

  .edit-button,
  .save-button,
  .signout-button,
  .delete-button {
    width: 50%;
  }
}
</style>
