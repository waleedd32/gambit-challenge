import React from "react";
import "./App.css";

function App() {
  let corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  let gambitlabs = "http://tuftuf.gambitlabs.fi/feed.txt";
  fetch(corsAnywhere + gambitlabs)
    .then((response) => response.text())
    .then((result) => {
      const theDataArr = result.replace(/\n/g, " ");
      console.log(theDataArr);
    });

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__container">
          <h1 className="app__logo">TUF-2000M Registers</h1>
          <input type="text" />
        </div>
      </header>
      <div className="app__subheader">
        <div>
          <p>Time of registery:</p>
        </div>
        <img src="https://i.ibb.co/PxGygfW/delivery.png" alt="Truck" />
      </div>

      {/* This is going to be Gambit challenge */}
      {/* task Option 2: Web or native app */}
      {/*a graphical solution, create an app that retrieves and parses 
      the data and presents it as is. The key point 
      is to make use of data available in a backend, 
      and present it in a mobile friendly way. */}
    </div>
  );
}

export default App;
