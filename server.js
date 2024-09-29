const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config(); // เป็นไฟล์ที่เอาไว้เก็บ path
const { connectDB } = require("./config/db");

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(express.json());
app.use(cors());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(port, () => console.log(`App running on port ${port}`));
