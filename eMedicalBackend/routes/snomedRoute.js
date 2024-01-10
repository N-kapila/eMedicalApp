const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");
const admin = require("firebase-admin");

// Example SNOMED CT CRUD routes
router.use(authenticateUser);

// Create Operation
router.post("/create", async (req, res) => {
  try {
    // Extract data from the request body
    const { conceptName, description } = req.body;

    // Create a new concept object with a timestamp
    const newConcept = {
      conceptName,
      description,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    // Add the new concept to the Firestore collection
    const docRef = await admin
      .firestore()
      .collection("snomedConcepts")
      .add(newConcept);

    // Return the created concept with its ID
    res.status(201).json({ id: docRef.id, ...newConcept });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating SNOMED CT concept" });
  }
});

// Read Operation (Get all concepts)
router.get("/", async (req, res) => {
  try {
    // Retrieve all concepts from the Firestore collection
    const snapshot = await admin.firestore().collection("snomedConcepts").get();

    // Map the concepts and return them
    const concepts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(concepts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving SNOMED CT concepts" });
  }
});

// Read Operation (Get concept by ID)
router.get("/:id", async (req, res) => {
  try {
    const conceptId = req.params.id;

    // Retrieve the concept with the specified ID
    const doc = await admin
      .firestore()
      .collection("snomedConcepts")
      .doc(conceptId)
      .get();

    // Check if the concept exists
    if (!doc.exists) {
      return res.status(404).json({ error: "Concept not found" });
    }

    // Return the concept data
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving SNOMED CT concept" });
  }
});

// Update Operation
router.put("/update/:id", async (req, res) => {
  try {
    const conceptId = req.params.id;

    // Retrieve the existing concept with the specified ID
    const conceptRef = admin
      .firestore()
      .collection("snomedConcepts")
      .doc(conceptId);
    const concept = await conceptRef.get();

    // Check if the concept exists
    if (!concept.exists) {
      return res.status(404).json({ error: "Concept not found" });
    }

    // Extract updated data from the request body
    const { conceptName, description } = req.body;

    // Update the concept with the new data
    await conceptRef.update({
      conceptName,
      description,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Return the updated concept data
    res.json({ id: concept.id, ...concept.data() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating SNOMED CT concept" });
  }
});

// Delete Operation
router.delete("/delete/:id", async (req, res) => {
  try {
    const conceptId = req.params.id;

    // Delete the concept with the specified ID
    await admin
      .firestore()
      .collection("snomedConcepts")
      .doc(conceptId)
      .delete();

    // Return success message
    res.json({ message: "Concept deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting SNOMED CT concept" });
  }
});

module.exports = router;
