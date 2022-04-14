const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running ok");
});

const CONNECTION_URL =
  "mongodb+srv://admin:aa123456@cluster0.qgmjq.mongodb.net/AstonVisit";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`did not connect`));
