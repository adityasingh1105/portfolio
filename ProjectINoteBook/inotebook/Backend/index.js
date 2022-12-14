
const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

//Available Routes
//app.use("/api/note", require("./routes/note"))
app.use("/api/auth", require("./routes/auth"))

app.get("/", (req, res) => res.send("Hello Aditya!")),
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
