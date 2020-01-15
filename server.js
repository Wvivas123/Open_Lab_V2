const express = require('express');
var http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;
var upload = require('express-fileupload');
var fs = require('fs');

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use(upload());

app.post('/', function(req, res) {
  if (req.files) {
    var file = req.files.filename,
      filename = file.name;
    file.mv('./uploads/' + filename, function(err) {
      console.log('Uploaded');
      if (err) {
        console.log(err);
        res.send('error occured');
      } else {
        res.send('Done!');
      }
    });
  }
});
