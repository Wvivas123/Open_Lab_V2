import React from 'react';

const Fileupload = () => {
  return (
    <div>
      <h1>Welcome to Open Lab</h1>
      <h3>A place for Open Source creations</h3>
      <form id="upload" enctype="multipart/form-data" method="post">
        <input id="fileupload" name="myfile" type="file" />
        <input type="submit" value="submit" id="submit" />
      </form>
    </div>
  );
};
export default Fileupload;
