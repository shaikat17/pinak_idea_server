const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const app = express();
const port = process.env.PORT | 5000;

// import routes
const router = require("./routes/routes");

// middleware
app.use(express.json());
app.use(cors());

// app.use("/api", routes);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
