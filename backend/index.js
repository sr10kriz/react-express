const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3030;

const eventsRoute = require("../backend/src/routes/events.route");

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.json({ message: "all fine" });
});

app.use("/", eventsRoute);

// error handling middleware
// ...............

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
