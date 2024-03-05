<template>
  <div class="patient-profile-container">
          <h1>Patient Profile</h1>

          <div class="patient-profile-container-one">
            <div class="profile-textfield-container">
              <div class="field-container">
                <p>Full Name:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Age:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Email:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Mobile Number:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Address:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Register Date:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
            </div>
            <div class="profile-textfield-container">
              <div class="field-container">
                <p>Gender:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Current Diseases:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Current Medication:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Current Treatments:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Past Diseases:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
              <div class="field-container">
                <p>Next Appoinment Date:</p>
              <TextField size="medium" v-model="mediumTextValue" />
              </div>
            </div>
          </div>

          <div class="patient-profile-container-two">
            <button class="edit-button">
              <h2>Edit Details</h2>
            </button>
            <button class="signout-button">
              <h2>Save</h2>
            </button>
            <button class="delete-button">
              <h2>Delete account</h2>
            </button>
          </div>
        </div>
</template>

<script>
import TextField from "../components/TextFields.vue";
export default {
    name: "App",
    components: {
        TextField,
    },

}
</script>

<style scoped>
.patient-profile-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
}

.patient-profile-container h1 {
    color: var(--primary-color);
    padding: 10px;
    font-size: xxx-large;
}

.patient-profile-container-one {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 50px;
}

 .field-container {
     display: flex;
     align-items: center;
     padding: 10px;
 }

 .field-container p {
     margin-right: 10px;
     font-family: Georgia, 'Times New Roman', Times, serif;
     font-size: large;
     font-weight: bold;
     width: 200px;
 }

 .patient-profile-container-two {
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     padding: 50px;
 }

 .edit-button,
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

 .signout-button {
     background-color: #29f529;
 }

 .delete-button {
     background-color: #f0140d;
 }

 .edit-button:hover {
     background-color: #191967;
 }

 .signout-button:hover {
     background-color: #295029;
 }

 .delete-button:hover {
     background-color: #740400;
 }

 @media screen and (max-width: 1366px) {
     .patient-profile-container-one{
         width: 100%;
         margin-left: 50px;
     }

     .patient-profile-container-two {
         width: 100%;
     }

 }

 @media screen and (max-width: 950px) {

     .patient-profile-container-one {
         flex-direction: column;
         align-items: center;
         justify-content: center;
         padding: 0;
     }

     .edit-button,
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
     .patient-profile-container {
         align-items: center;
     }

     .patient-profile-container-one {
         flex-direction: column;
         align-items: center;
         justify-content: center;
         padding: 0;
         margin-top: 10px;
     }

     .patient-profile-container-two {
         flex-direction: column;
     }
 }

 @media (max-width: 375px) {

    .patient-profile-container h1 {
         font-size: xx-large;
     }

         .patient-profile-container-one {
         margin-left: 90px;
         padding-right: 0;
         width: 100%;
     }

     .patient-profile-container p {
         margin-right: 0;
     }

     .edit-button,
     .signout-button,
     .delete-button {
        padding: 0 75px 0 10px;
        display: flex;
        align-items: center;
     }
 }
</style>