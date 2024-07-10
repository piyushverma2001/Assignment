const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

// Get all users (admin)
router.get("/", authMiddleware, getUsers);

// Create a user (admin)
router.post("/", authMiddleware, createUser);

// Update a user (admin)
router.put("/:userId", authMiddleware, updateUser);

// Delete a user (admin)
router.delete("/:userId", authMiddleware, deleteUser);

module.exports = router;
