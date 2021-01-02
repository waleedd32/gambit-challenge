import { useEffect, useState } from "react";
import "./App.css";
import TwoMaps from "./TwoMaps";
import ValueBox from "./components/ValueBox";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataContent, setDataContent] = useState([]);
  const obj = {};
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

  useEffect(() => {
    data.forEach((d) => {
      var key = d.split(":")[0];
      var value = d.split(":")[1];
      obj[key] = value;
    });
    const k = Object.values(obj);

    setDataContent(k);
  }, [data]);

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__container">
          <h1 className="app__logo">TUF-2000M Registers</h1>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search by index number"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="app__subheader">
        <div>
          <p>Time of registery:</p>
        </div>
        <img src="https://i.ibb.co/PxGygfW/delivery.png" alt="Truck" />
      </div>
      <div>
        <TwoMaps sisalto={dataContent} />
      </div>
    </div>
  );
}

export default App;
