const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function listUser(req, res) {
  try {
    res.send("Hi everybody this is GET method");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error.");
  }
}

async function register(req, res) {
  try {
    // check user
    const { username, password } = req.body; // destructuring
    var user = await User.findOne({ username }); // ติดต่อกับ model แล้วไป call username ใน db
    if (user) {
      return res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    user = new User({
      username,
      password,
    });

    // encrypt
    user.password = await bcrypt.hash(password, salt);

    // save to db
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error.");
  }
}

async function editUser(req, res) {
  try {
    res.send("Hello PUT !!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error.");
  }
}

async function deleteUser(req, res) {
  try {
    res.send("Hello Delete !!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error.");
  }
}

module.exports = { listUser, register, editUser, deleteUser };
