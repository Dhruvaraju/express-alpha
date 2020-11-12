import express from "express";

const app = express();
const _port = 5000;

app
  .route("/detail/:user/:data")
  .get((req, res) => {
    console.log("user details entered: " + req.params.user);
    res.send("Get call initiated on port 5000");
  })
  .put((req, res) => {
    //res.send("Put call initiated on port 5000");
    res.redirect("https://www.google.com");
  })
  .post((req, res) => {
    res.send("post call initiated on port 5000");
  })
  .delete((req, res) => {
    res.send("delete call initiated on port 5000");
  });

app.get(
  "/route-handler",
  (req, res, next) => {
    res.send("This is from route handler");
    next();
  },
  (req, res) => {
    console.log("This is from the next of route handler");
    //console.log(JSON.stringify(res));
  }
);

app.listen(_port, () => {
  console.log("Server started on port 5000...");
});
