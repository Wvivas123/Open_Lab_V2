import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
  state = {
    file: null
  };

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }

  handleUpload(e) {
    console.log(this.state, 'This is the state');
    let file = e.target.file;
    let formdata = new FormData();
    formdata.append('image', file);
    formdata.append('name', 'william vivas');

    axios({
      url: '/some/api',
      method: 'POST',
      headers: {
        authorization: 'your token'
      },
      data: formdata
    }).then(res => {
      console.log('sent');
    });
  }

  render() {
    return (
      <div className="Upload">
        <h1>My form</h1>
        <form>
          <div className="">
            <label>Select a File </label>
            <input type="file" name="file" onChange={e => this.handleFile(e)} />
          </div>
          <br></br>
          <button type="button" onClick={e => this.handleUpload(e)}>
            Click Upload
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
