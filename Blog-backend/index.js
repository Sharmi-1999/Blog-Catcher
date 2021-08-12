const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const ENV = require("./config");
const postRoute = require("./controllers/postController");


mongoose
  .connect(ENV.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("created successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/", postRoute);

app.listen(ENV.port, () => {
  console.log(`🚀 app listening at http://localhost:${ENV.port}`);
});
