const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './Uploads/' });
const app = express();

app.post('/upload', upload.single('file'), function(req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

module.exports = router;
