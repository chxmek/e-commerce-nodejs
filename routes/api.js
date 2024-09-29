const express = require("express");
const {
  login,
  register,
  listUser,
  editUser,
  deleteUser,
} = require("../controllers/auth");
const router = express.Router();

router.get("/auth", listUser);

router.post("/register", register);

router.post("/login", login)

router.put("/auth", editUser);

router.delete("/auth", deleteUser);

module.exports = router;
