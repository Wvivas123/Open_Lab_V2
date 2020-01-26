const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
app.use(cors());

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public_uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).array('file');

app.get('/', function(req, res) {
  return res.send('Hello Server');
});

app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    return res.status(200).send(req.file);
    // Everything went fine.
  });
});

app.listen(PORT, function() {
  console.log('Server running on port 8000');
});
