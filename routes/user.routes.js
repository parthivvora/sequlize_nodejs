const express = require("express");
const {
  userRegister,
  userLogin,
  getAllUserList,
  updateUserProfile,
  updateBulkUser,
  getUserById,
  deleteUserById,
  deleteBulkDelete,
} = require("../controller/user.controller");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

router.get("/getAllUserList", getAllUserList);
router.get("/getUserById/:userId", getUserById);

router.put("/update/:userId", updateUserProfile);
router.put("/updateBulkUser", updateBulkUser);

router.delete("/deleteUserById/:userId", deleteUserById);
router.delete("/deleteBulkDelete", deleteBulkDelete);

module.exports = router;
