const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    next(error);
  }
};

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save user to database
    await newUser.save();

    res.json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Create user error:", error);
    next(error);
  }
};

// Update user details
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { username, email } = req.body;

    // Update user
    await User.findByIdAndUpdate(userId, { username, email });

    res.json({ msg: "User updated successfully" });
  } catch (error) {
    console.error("Update user error:", error);
    next(error);
  }
};

// Delete a user
exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Delete user
    await User.findByIdAndDelete(userId);

    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    next(error);
  }
};
