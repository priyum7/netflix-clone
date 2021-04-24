require("dotenv").config();
const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

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
    const users = await db.collection("users").find({
      email,
    });
  } catch {}
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
