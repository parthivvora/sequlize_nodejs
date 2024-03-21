const User = require("../models/user");

exports.userRegister = async (req, res) => {
  try {
    await User.create(req.body);
    return res.status(200).json({
      status: "Success",
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ where: { email, password } });
    if (isUser) {
      return res.status(200).json({
        status: "Success",
        message: "User logged in successfully",
        user: isUser,
      });
    }
    return res.status(401).json({
      status: "Error",
      message: "Invalid credentials",
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.getAllUserList = async (req, res) => {
  try {
    const userData = await User.findAll();
    if (userData.length > 0) {
      return res.status(200).json({
        status: "Success",
        message: "Users fetched successfully",
        users: userData,
      });
    }
    return res.status(401).json({
      status: "Error",
      message: "No users found",
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const userData = await User.findOne({ where: { id: userId } });
    if (userData) {
      return res.status(200).json({
        status: "Success",
        message: "User fetched successfully",
        user: userData,
      });
    }
    return res.status(401).json({
      status: "Error",
      message: "No user found",
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name } = req.body;
    const updateUser = await User.update(
      { name: name },
      {
        where: { id: userId },
      }
    );
    return res.status(200).json({
      status: "Success",
      message: "User updated successfully",
      user: updateUser,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.updateBulkUser = async (req, res) => {
  try {
    const { name } = req.body;
    const updateUser = await User.update({ name: name }, { where: {} });
    return res.status(200).json({
      status: "Success",
      message: "Users updated successfully",
      users: updateUser,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleteUser = await User.destroy({ where: { id: userId } });
    return res.status(200).json({
      status: "Success",
      message: "User deleted successfully",
      user: deleteUser,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.deleteBulkDelete = async (req, res) => {
  try {
    const deleteUser = await User.destroy({ where: {} });
    return res.status(200).json({
      status: "Success",
      message: "Users deleted successfully",
      users: deleteUser,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
