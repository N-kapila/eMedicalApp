const handleErrors = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Handle other specific error types here...

  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
};

module.exports = handleErrors;
