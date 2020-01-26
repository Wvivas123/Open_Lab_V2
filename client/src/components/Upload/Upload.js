import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };
  onClickHandler = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    axios
      .post('http://localhost:8000/upload', data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };

  render() {
    return (
      <div className="Upload">
        <h1>My form</h1>
        <form action="/upload" encType="multipart/form-data" method="POST">
          <div className="">
            <label>Select a File </label>
            <input type="file" name="file" onChange={this.onChangeHandler} />
          </div>
          <br></br>
          <button
            type="button"
            class="btn btn-success btn-block"
            onClick={this.onClickHandler}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
