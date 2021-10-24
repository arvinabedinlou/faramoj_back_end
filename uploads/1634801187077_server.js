const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use("/", express.static("../files"));

// app.use('/.well-known/acme-challenge/', express.static('../.well-known/acme-challenge/'), serveIndex('../.well-known/acme-challenge/', {'icons': true}))
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.listen(4022, () => {
  console.log(`Server is running port 4022 ...`);
});
