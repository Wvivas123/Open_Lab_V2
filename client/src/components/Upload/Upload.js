/* React Packages in Use */
import React, { Component } from 'react';
import axios from 'axios';

/* sets state to null on load */
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  /*Fires when the user loads a file into form */
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  /*On Click function that sends file to backend Via Axios */
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

  /*HTML to be rendered*/

  render() {
    return (
      <div className="Card">
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
      </div>
    );
  }
}

/*Exports to App.js*/
export default Upload;
