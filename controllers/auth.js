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
    newUser = new User({
      username,
      password,
    });

    // encrypt
    newUser.password = await bcrypt.hash(password, salt);

    // save to db
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error.");
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    var user = await User.findOneAndUpdate({ username }, { new: true }); // findOneAndUpdate เพื่อจะได้รู้เวลาที่ user login
    if (user && user.enabled) {
      // check matched password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return res.send("Welcome");
      } else if (!isMatch) {
        return res.status(400).send("Password doesn't match");
      }
    } else if (user && !user.enabled) {
      return res.status(400).send("User doesn't enable");
    } else {
      return res.status(400).send("Username doesn't exits");
    }
  } catch (err) {
    onsole.log(err);
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

module.exports = { listUser, register, editUser, deleteUser, login };
