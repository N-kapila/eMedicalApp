const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./firebaseConfig");
const authenticateUser = require("./middleware/authMiddleware");
const loginRoutes = require("./routes/loginRoute");
const handleErrors = require("./middleware/errorMiddleware");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a new medical record
app.post("/api/medical-records", async (req, res) => {
  const { patientName, diagnosis } = req.body;

  const newRecord = {
    patientName,
    diagnosis,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  };

  try {
    const docRef = await admin
      .firestore()
      .collection("medicalRecords")
      .add(newRecord);
    res.status(201).json({ id: docRef.id, ...newRecord });
  } catch (error) {
    res.status(500).json({ error: "Error saving medical record" });
  }
});

// Get all medical records
app.get("/api/medical-records", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("medicalRecords").get();
    const records = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving medical records" });
  }
});

// Get all SNOMED CT concepts
app.get("/api/snomed-concepts", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("snomedConcepts").get();
    const concepts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(concepts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving SNOMED CT concepts" });
  }
});

// Get all FHIR resources
app.get("/api/fhir-resources", async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection("fhirResources").get();
    const resources = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving FHIR resources" });
  }
});

// Welcome message for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the eMedicalBackend API!");
});

// Authentication middleware
const authenticateUserMiddleware = authenticateUser;
app.use(authenticateUserMiddleware);

// Use the login routes
app.use(loginRoutes);

// Use custom error handling middleware
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Access Firestore from the admin object
const firestore = admin.firestore();

// Example route handler using Firestore
app.get("/fetchData", async (req, res) => {
  try {
    const data = await firestore.collection("fhirResources").get();
    const dataArray = [];
    data.forEach((doc) => {
      dataArray.push(doc.data());
    });
    res.json(dataArray);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
