<template>
  <div class="list-container">
    <h1>Patient List</h1>
    <div class="list-container-one">
      <div class="search-bar">
        <input type="text" placeholder="Search..." v-model="searchTerm" />
        <font-awesome-icon icon="search" class="search-icon" />
      </div>
    </div>

    <div class="list-container-two">
      <div class="patient-table-container">
        <table class="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Current Disease</th>
              <th>Mobile Number</th>
              <th>Next Appointment Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in filteredData"
              :key="index"
              @click="redirectToPatientProfile(row)"
            >
              <td>{{ row.name }}</td>
              <td>{{ row.age }}</td>
              <td>{{ row.currentDisease }}</td>
              <td>+94 {{ row.mobileNumber }}</td>
              <td>{{ row.nextAppointmentDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const searchTerm = ref("");

    const data = [
      {
        name: "John Doe",
        age: 45,
        currentDisease: "Fever",
        mobileNumber: 123456789,
        nextAppointmentDate: "2024-02-10",
      },
      {
        name: "Jane Smith",
        age: 25,
        currentDisease: "Cough",
        mobileNumber: 123456789,
        nextAppointmentDate: "2024-02-15",
      },
      {
        name: "Alice Johnson",
        age: 40,
        currentDisease: "Headache",
        mobileNumber: 123456789,
        nextAppointmentDate: "2024-02-18",
      },
      {
        name: "Bob Williams",
        age: 32,
        currentDisease: "Back Pain",
        mobileNumber: 123456789,
        nextAppointmentDate: "2024-02-22",
      },
      {
        name: "Eva Davis",
        age: 60,
        currentDisease: "Allergies",
        mobileNumber: 123456789,
        nextAppointmentDate: "2024-02-28",
      },
      {
        name: "",
        age: "",
        currentDisease: "",
        mobileNumber: "",
        nextAppointmentDate: "",
      },
      {
        name: "",
        age: "",
        currentDisease: "",
        mobileNumber: "",
        nextAppointmentDate: "",
      },
    ];

    const filteredData = ref(data);

    const redirectToPatientProfile = (row) => {
      router.push("/patient-profile");
    };

    return {
      searchTerm,
      data,
      filteredData,
      redirectToPatientProfile,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  created() {
    library.add(faSearch);
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.list-container h1 {
  color: var(--primary-color);
  padding: 10px;
  font-size: xxx-large;
}

.list-container-one {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  padding-right: 50px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
  width: 200px;
  margin-right: 20px;
}

input {
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
}

.search-icon {
  cursor: pointer;
  margin-left: 5px;
}

.list-container-two {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
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

@media (max-width: 768px) {
  .list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    padding-right: 75px;
  }

  .list-container h1 {
    margin-top: 0;
    padding-top: 0;
  }

  .search-bar {
    width: 100%;
  }

  .list-container-two {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    margin-left: 0;
  }
}

@media (max-width: 375px) {
  .list-container {
    margin-top: 50px;
    padding-right: 100px;
  }

  .list-container h1 {
    font-size: xx-large;
  }
}
</style>
