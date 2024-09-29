const express = require("express");
const {
  login,
  register,
  listUser,
  editUser,
  deleteUser,
} = require("../controllers/auth");
const auth = require("../middleware/auth"); // middleware

const router = express.Router();

router.get("/1", auth, (req, res) => {
  res.send("Welcome");
});

router.post("/register", register);

router.post("/login", login);

router.get("/auth", listUser);

router.put("/auth", editUser);

router.delete("/auth", deleteUser);

module.exports = router;
