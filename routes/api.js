const express = require("express");
const {
  register,
  listUser,
  editUser,
  deleteUser,
} = require("../controllers/auth");
const router = express.Router();

router.get("/auth", listUser);

router.post("/auth", register);

router.put("/auth", editUser);

router.delete("/auth", deleteUser);

module.exports = router;
