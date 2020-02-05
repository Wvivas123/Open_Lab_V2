import React, { Component } from 'react';

class Landing extends Component {
  componentDidMount() {
    console.log('GrandChild did mount.');
  }
  render() {
    return (
      <section className="landingBackground">
        <div className="landingBackground"></div>
        <div className="landingCard">
          <h1>Welcome to Open Lab</h1>
          <hr />
          <h3>A place for Collaborators</h3>
        </div>
      </section>
    );
  }
}
export default Landing;
