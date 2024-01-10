const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use Firebase Authentication to validate user credentials
    const user = await auth().signInWithEmailAndPassword(email, password);

    // Generate and send back an authentication token
    const token = await user.getIdToken();
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
