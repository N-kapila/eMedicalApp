const { auth } = require("firebase-admin");

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the Firebase authentication token
    const decodedToken = await auth().verifyIdToken(token);

    // Attach user information to the request for further processing
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
};

module.exports = authenticateUser;
