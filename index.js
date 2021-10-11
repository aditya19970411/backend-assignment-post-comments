const express = require("express");
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 4000;

// to parse json data
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/test-api", (req, res) => {
  res.send("Hello from the Server, This  is a test Api");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is runnig on Port ${port}`);
});
