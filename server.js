const express = require('express');
var http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;
var upload = require('express-fileupload');
var fs = require('fs');
var multer = require('multer');
var cors = require('cors');

app.listen(PORT, () => console.log(`listening on ${PORT}`));
app.use(cors());

var upload = multer({ storage: storage }).single('file');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
