import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <section className="Landing">
        <div>
          <h1>Hello world</h1>
          <h1>This is Open Lab a place to find collaborators</h1>
          <button type="button" class="btn btn-success btn-block">
            Click to upload file
          </button>
        </div>
      </section>
    );
  }
}
export default Landing;
