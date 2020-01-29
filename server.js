//NPM Packages Used in the creation of app
//_________________________________________//
const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const fs = require('fs');

//______________________________________//

//Initilizes Cors
//______________________________________//
app.use(cors());
//______________________________________//

//Declares storage var and saves location of where multer will save uploads
//___________________________________________________________//
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    //uploads will be saved to Directory public_uploads
    cb(null, 'public_uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
//___________________________________________________________//

//Runs multer system storage function//
//__________________________________________________________//
const upload = multer({ storage: storage }).array('file');
//_________________________________________________________//

//Upload endpoint for upload functionality
//_________________________________________________//
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
//_________________________________________________//

app.get('/music', function(req, res) {
  const folder = './public_uploads/';
  const currentDir = [];
  fs.readdir(folder, (err, files) => {
    for (let i = 0; i < files.length; i++) {
      currentDir.push(files[i]);
    }
    res.send('we getting there');
  });
  console.log(currentDir);

  //var file = __dirname + '/public_uploads/' + file;
  //console.log(file);
  //fs.exists(file, function(exists) {
  //if (exists) {
  //var rstream = fs.createReadStream(file);
  //rstream.pipe(res);
  //} else {
  //res.send('Its a 404');

  //}
  // });
});

app.get('/download', function(req, res) {
  var fileId = 'song.mp4';
  var file = __dirname + '/public_uploads/' + fileId;
  fs.exists(file, function(exists) {
    if (exists) {
      res.setHeader('Content-disposition', 'attachment; filename=' + fileId);
      res.setHeader('Content-Type', 'application/audio/mp4');
      var rstream = fs.createReadStream(file);
      rstream.pipe(res);
    } else {
      res.send('Its a 404');
      res.end();
    }
  });
});

//initilizes server and responds telling server is running
//_________________________________________________________//
app.listen(PORT, function() {
  console.log('Server running on port 8000');
});
//_______________________________________________________//
