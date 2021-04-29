require("dotenv").config();
const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");

const app = express();
var router = express.Router();

const port = process.env.PORT || 5000;
const uri = process.env.DB_URL;

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(router);

let db;

MongoClient.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (!error) {
      console.log("Connected to mongoDB Database");
      db = client.db("notflix");
    } else {
      throw error;
    }
  }
);

app.post("/checkUser", async (req, res) => {
  try {
    const users = await db.collection("users").find({ email: req.body.email });
    users.toArray().then((user) => {
      user.length != 0
        ? res.status(200).send({
            exists: true,
          })
        : res.status(200).send({
            exists: false,
          });
    });
  } catch {
    res.status(400).send({
      error: "Database Error",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await db.collection("users").findOne({
      email: req.body.email,
    });

    if (!user) {
      res.status(200).send({ success: false });
    } else {
      const verified = await bcrypt.compare(req.body.password, user.password);
      res.status(200).send({ success: verified });
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const result = await db.collection("users").insertOne({
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).send({
      success: true,
    });
  } catch (e) {
    res.status(400).send({
      success: false,
    });
    console.error(e);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
