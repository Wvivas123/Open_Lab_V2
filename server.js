const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var multer = require('multer');
var upload = multer({ dest: './Uploads/' });

app.listen(PORT, () => {
  console.log('Server is running');
});

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
