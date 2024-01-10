const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");

// Example FHIR CRUD routes
router.use(authenticateUser);

// Implement FHIR CRUD operations...

module.exports = router;
