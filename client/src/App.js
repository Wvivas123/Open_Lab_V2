import React from 'react';
import Fileupload from './components/fileupload';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Fileupload />
    </div>
  );
}

export default App;
