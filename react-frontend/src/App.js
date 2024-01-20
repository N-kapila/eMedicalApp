import React, { useState } from "react";
import { LargeTextField, SelectTextField } from "./Components/Textfeilds";

function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <h1> Welcome to the eMedical App</h1>
      <LargeTextField placeholder="Enter your name" />
      <SelectTextField
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Select your choice"
      />
    </div>
  );
}

export default App;
