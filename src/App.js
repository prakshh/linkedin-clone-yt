import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* <h1>lets build linkedin clone</h1> */}
      <Header />
      <div className="app__body">
        <Sidebar/>
      </div>

      {/*App Body
          Sidebar
          Feed
          Widgets */}

    </div>
  );
}

export default App;
