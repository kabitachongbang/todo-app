const express = require("express");
const app = express();
const path = require("path");
const router = require("./apiRoutes/api/formData");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/formData", router);
app.use("/", express.static(path.join(__dirname + "/public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening to port ${PORT}`);
});
