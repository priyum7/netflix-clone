require("dotenv").config();
const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");
const session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.DB_URL;
const secret = process.env.SECRET_KEY;

const store = new MongoDBStore({
  uri: uri,
  databaseName: "notflix",
  collection: "sessions",
});

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());

app.use(
  session({
    secret: secret,
    store: store,
    saveUninitialized: true,
    resave: false,
  })
);

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

app.get("/isLoggedIn", async (req, res) => {
  res.status(200).send({
    isAuthenticated:
      "isAuthenticated" in req.session && req.session.isAuthenticated
        ? true
        : false,
  });
});

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

const postLogin = (req, res, next) => {
  req.session.isAuthenticated = true;
  res.status(200).send({
    success: req.success,
    isAuthenticated:
      "isAuthenticated" in req.session && req.session.isAuthenticated
        ? true
        : false,
  });
};

app.post(
  "/login",
  async (req, res, next) => {
    try {
      const user = await db.collection("users").findOne({
        email: req.body.email,
      });

      if (!user) {
        res.status(200).send({ success: false });
      }

      req.success = await bcrypt.compare(req.body.password, user.password);
      next();
    } catch (e) {
      console.error(e);
      res.status(400).send(e);
    }
  },
  postLogin
);

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await db.collection("users").insertOne({
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).send({
      success: true,
    });
  } catch (e) {
    console.error(e);
    res.status(400).send({
      success: false,
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
