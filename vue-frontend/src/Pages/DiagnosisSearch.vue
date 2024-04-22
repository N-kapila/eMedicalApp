<template>
    <div class="diagnosis-search-container">
        <div>
            <input type="text" placeholder="Search Diseases" v-model="searchText" @input="handleInputChange" />
            <ul v-if="isListVisible">
                <li v-for="diagnosis in diagnosisList" :key="diagnosis.code" @click="handleDiagnosisSelect(diagnosis)">
                    {{ diagnosis.display }}
                </li>
            </ul>
        </div>
        <div class="selected-diagnoses">
            <ul>
                <li v-for="(diagnosis, index) in selectedDiagnoses" :key="index">{{ diagnosis }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
const SNOMED_SERVER = "https://r4.ontoserver.csiro.au/fhir";
const DIAGNOSIS_URL =
    SNOMED_SERVER +
    "/ValueSet/$expand?url=" +
    encodeURIComponent("http://snomed.info/sct") +
    encodeURIComponent("?fhir_vs=ecl/") +
    encodeURIComponent("< 404684003") +
    "&count=20";

export default {
    data() {
        return {
            diagnosisList: [],
            diagnosisFilter: "",
            selectedDiagnoses: [],
            searchText: "",
            isListVisible: false // Initially set to false
        };
    },
    methods: {
        fetchDiagnosisList() {
            if (this.searchText.length < 1) { // Check if searchText is empty
                this.diagnosisList = []; // Clear diagnosis list
                this.isListVisible = false; // Hide the list
                return; // Exit the function
            }
            fetch(DIAGNOSIS_URL + "&filter=" + this.searchText)
                .then((response) => response.json())
                .then((data) => {
                    this.diagnosisList = data.expansion.contains || [];
                    this.isListVisible = true; // Show the list
                });
        },
        handleInputChange() {
            this.fetchDiagnosisList();
        },
        handleDiagnosisSelect(diagnosis) {
            this.selectedDiagnoses.push(diagnosis.display);
            this.searchText = "";
            this.isListVisible = false;
        }
    }
};
</script>

<style scoped>
.diagnosis-search-container {
    font-family: Arial, sans-serif;
}

.diagnosis-search-container input[type="text"] {
    width: 400px;
  height: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  border: 0;
  padding: 10px;
}

.diagnosis-search-container ul {
    list-style-type: none;
    padding: 0;
}

.diagnosis-search-container ul li {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.diagnosis-search-container ul li:hover {
    background-color: #f0f0f0;
}

.diagnosis-search-container .selected-diagnoses ul {
     list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.diagnosis-search-container .selected-diagnoses ul li {
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  margin-right: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
  flex: 0 0 calc(33.33% - 10px);
  max-width: calc(33.33% - 10px);
}
</style>