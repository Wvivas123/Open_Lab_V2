import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1 className="navbar_Logo">Open Lab</h1>

        <Link
          to="/upload"
          style={{ color: 'white' }}
          activeStyle={{ color: 'red' }}
        >
          Upload
        </Link>
        <Link
          to="/list"
          style={{ color: 'white' }}
          activeStyle={{ color: 'red' }}
        >
          Collaborate
        </Link>
      </nav>
    );
  }
}

export default Navbar;
