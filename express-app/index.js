import express from "express";
import data from "./data/data.json";

const app = express();
const _PORT = 3000;

app.get("/", (req, res) => {
  res.send("Get call response");
});

app.get("/mock-data", (req, res) => {
  res.json(data);
});

app.use(express.static("public"));
app.use("/resources", express.static("resources"));

app.put("/put", (req, res) => {
  res.send("PUT call response");
});

app.post("/post", (req, res) => {
  res.send("POST call response");
});

app.delete("/delete", (req, res) => {
  res.send("DELETE call response");
});

app.listen(_PORT, () => {
  console.log("Server listening on port: " + _PORT);
});
