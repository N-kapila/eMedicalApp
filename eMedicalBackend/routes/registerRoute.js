const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// Import the auth object from firebase-admin
const { auth } = require("firebase-admin");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use Firebase Authentication to create a new user
    const user = await auth().createUser({ email, password });

    // Generate and send back an authentication token
    const token = await user.getIdToken();
    res.json({ token });
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Error creating user" });
  }
});

module.exports = router;
