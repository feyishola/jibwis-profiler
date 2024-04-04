const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const verifyTokenUser = (requiredUserTypes) => (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  // Check if token is provided
  if (!token) {
    return res
      .status(403)
      .json({ ok: false, message: "Bearer token not provided" });
  }

  try {
    // Verify the token and decode its payload
    const decoded = jwt.verify(token, jwtSecret);
    console.log({ decoded });

    if (requiredUserTypes && !requiredUserTypes.includes(decoded.role)) {
      return res
        .status(403)
        .json({ ok: false, message: "Unauthorized user type" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    // Handle invalid tokens
    return res.status(401).json({ ok: false, message: "Invalid token" });
  }
};
const verifyToken = (req, res, next) => {
  // Check if headers object is present in the request
  if (!req.headers || !req.headers["authorization"]) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  // Get the token from the request headers
  const token = req.headers["authorization"]?.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    // If the token is invalid, return an error response
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = { verifyTokenUser, verifyToken };
