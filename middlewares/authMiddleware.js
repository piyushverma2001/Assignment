const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user is admin
    if (!decoded.user.isAdmin) {
      return res.status(403).json({ msg: "Admin access required" });
    }

    req.user = decoded.user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ msg: "Invalid token" });
  }
};
