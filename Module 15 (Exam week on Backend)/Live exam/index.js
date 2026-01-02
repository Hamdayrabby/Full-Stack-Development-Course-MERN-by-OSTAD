const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "uploads/";

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + fileName + fileExt);
  },
});

const upload = multer({ storage: myStorage });

// express app initialization
const app = express();

app.post("/", upload.single("file"), (req, res) => {
   res.send("File uploaded successfully");
});

// Error
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an Upload Error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("Success");
  }
});

app.listen(4000, () => {
  console.log("app listening at port 4000");
});
