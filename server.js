const express = require("express");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Defines middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Start the server
app.listen(PORT, function () {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
