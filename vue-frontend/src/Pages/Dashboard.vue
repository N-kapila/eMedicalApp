<template>
  <div class="dashboard-container">
    <div class="dashboard-container-one">
      <div>
        <h1>Good morning, Dr. xxxxx</h1>
        <p>
          You have 7 patients remaining today! <br />
          Remember to record your details today.
        </p>
      </div>
      <div class="dashboard-user-image">
        <img class="user-image" :src="user" alt="" />
      </div>
    </div>

    <div class="dashboard-container-two">
      <img :src="chart" alt="Chart" />
      <div class="calendar-container">
         
      </div>
    </div>

     <div class="dashboard-container-three">
      <div class="dashboard-header">
        <h2>Recent Patient List</h2>
        <router-link to="/patient-list">View All</router-link>
      </div>
      <div class="patient-table-container">
        <table class="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Current Disease</th>
              <th>Next Appointment Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in data" :key="index">
              <td>{{ row.name }}</td>
              <td>{{ row.currentDisease }}</td>
              <td>{{ row.nextAppointmentDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import user from "../assets/user.png";
import chart from "../assets/chart.png"

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      user,
      chart,
      data: [
        {
          name: "John Doe",
          currentDisease: "Fever",
          nextAppointmentDate: "2024-02-10",
        },
        {
          name: "Jane Smith",
          currentDisease: "Cough",
          nextAppointmentDate: "2024-02-15",
        },
        {
          name: "Alice Johnson",
          currentDisease: "Headache",
          nextAppointmentDate: "2024-02-18",
        },
        {
          name: "Bob Williams",
          currentDisease: "Back Pain",
          nextAppointmentDate: "2024-02-22",
        },
        {
          name: "Eva Davis",
          currentDisease: "Allergies",
          nextAppointmentDate: "2024-02-28",
        },
      ],

    };
  }
};
</script>


<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.dashboard-container-one {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 20px 50px;
  padding: 50px;
  height: 10vh;
  width: 80%;
  background-color: #d9d8d8;
  border-radius: 10px;
}

.dashboard-container-one h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.dashboard-user-image img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.dashboard-container-two {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  height: 20vh;
  width: 90%;
}

.dashboard-container-two img {
  height: 250px;
  width: auto;
}
/* 
.calendar-container {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
  } */

  .dashboard-container-three {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 50px;
    width: 80%;
    margin-left: 40px;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    width: 90%;
  }
  
  .dashboard-header h2 {
    margin: 0;
    font-family: 'Arial', sans-serif;
    color: var(--primary-color);
  }
  
  .dashboard-header a {
    text-decoration: none;
    color: #007bff;
  }
  
  .patient-table-container {
    width: 100%;
  }
  
  .patient-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .patient-table th,
  .patient-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .patient-table th {
    background-color: #dedddd;
    font-weight: bold;
    
  }
@media screen and (max-width: 1366px) {

  .dashboard-container-two {
    padding: 50px;
  }

  .dashboard-container-two img {
    height: 200px;
    width: auto;
  }
}
  

@media screen and (max-width: 768px) {

  .dashboard-container{
    padding: 0;
  }

    .dashboard-container-one {
        width: auto;
        height: 100%;
        padding: 10px;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }

    .dashboard-user-image img {
        height: 100px;
        width: 100px;
    }

    .dashboard-container-one h1{
        text-align: center;
    }
    .dashboard-container-one p{
        display: none;
    }
  .dashboard-container-two {
    flex-direction: column;
    width: auto;
    align-items: center;
    justify-content: center;
    margin: 30px 0px 50px;
  }

  .dashboard-container-two img {
    width: 100%;
    height: auto;
  }

  .calendar-container {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }

  .dashboard-container-three {
    width: auto;
    margin-left: 0;
    margin-top: 40px;
    padding: 0;
    padding-bottom: 30px;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }

  .dashboard-header a {
    margin-top: 10px;
  }

  .patient-table-container {
    width: 100%;
  }

  .patient-table {
    margin-top: 5px;
  }
}

@media (max-width: 375px) {

  
  .dashboard-container-one{
    padding: 20px;
    padding-left: 0;
    width: 60%;
  }
  .dashboard-container-one h1{
    font-size: medium;
  }

  .dashboard-container-two{
    width: 80%;
    padding-left: 0;
    padding: 20px;
  }

  .dashboard-container-three{
    width: auto;
  }

    .patient-table{
      width: auto;
    }
}

</style>
