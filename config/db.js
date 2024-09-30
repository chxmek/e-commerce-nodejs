const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE);
    // await mongoose.connect(process.env.DATABASE_DEPLOY);
    console.log("Connect DB success");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = { connectDB };
