import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  state = {
    posts: [],
    error: null
  };
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    axios
      .request({
        url: 'http://localhost:8000/music',
        method: 'get',
        headers: {
          'Content-Type': 'audio/mp4'
        }
      })
      .then(result => {
        console.log(result);
      });
  }
  render() {
    return (
      <div className="Card">
        <h1>This is where the files will appear</h1>
      </div>
    );
  }
}
export default List;
