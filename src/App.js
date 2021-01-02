import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    let corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    let gambitlabs = "http://tuftuf.gambitlabs.fi/feed.txt";
    fetch(corsAnywhere + gambitlabs)
      .then((response) => response.text())
      .then((result) => {
        const theDataArr = result.replace(/\n/g, " ");
        const array = theDataArr.split(" ");
        console.log(array);
        setData(array);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {data.map((value) => (
        <div>{value}</div>
      ))}
    </div>
  );
}

export default App;
