import React, { useState, useEffect } from "react";
import "./DiagnosisSearch.css";
import { LargeTextField } from "../Components/Textfeilds";

const SNOMED_SERVER = "https://r4.ontoserver.csiro.au/fhir";
const DIAGNOSIS_URL =
  SNOMED_SERVER +
  "/ValueSet/$expand?url=" +
  encodeURIComponent("http://snomed.info/sct") +
  encodeURIComponent("?fhir_vs=ecl/") +
  encodeURIComponent("< 404684003") +
  "&count=20";

export function DiagnosisSearch() {
  const [diagnosisList, setDiagnosisList] = useState([]);
  const [diagnosisFilter, setDiagnosisFilter] = useState("");
  const [selectedDiagnoses, setSelectedDiagnoses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isListVisible, setIsListVisible] = useState(true);

  useEffect(() => {
    if (diagnosisFilter.length < 1) {
      return;
    }

    fetch(DIAGNOSIS_URL + "&filter=" + diagnosisFilter)
      .then((response) => response.json())
      .then((data) => {
        setDiagnosisList(data.expansion.contains || []);
      });
  }, [diagnosisFilter]);

  const handleDiagnosisSelect = (diagnosis) => {
    const updatedSelectedDiagnoses = [...selectedDiagnoses, diagnosis.display];
    setSelectedDiagnoses(updatedSelectedDiagnoses);
    setSearchText("");
    setIsListVisible(false);
  };

  return (
    <div className="diagnosis-search-container">
      <div>
        <LargeTextField
          className="large-text-fields"
          type="text"
          placeholder="Search Diseases"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setDiagnosisFilter(e.target.value);
            setIsListVisible(true);
          }}
        />
        {isListVisible && (
          <ul>
            {diagnosisList.map((diagnosis) => (
              <li
                key={diagnosis.code}
                onClick={() => handleDiagnosisSelect(diagnosis)}
              >
                {diagnosis.display}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="selected-diagnoses">
        <ul>
          {selectedDiagnoses.map((diagnosis, index) => (
            <li key={index}>{diagnosis}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
