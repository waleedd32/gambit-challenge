import { useEffect, useState } from "react";
import "./App.css";
import "./components/ValueBox.css";
import "./components/IndexBox.css";
import TwoMaps from "./TwoMaps";
function App() {
  const [data, setData] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
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
  }, [searchTerm]);
  useEffect(() => {
    data.forEach((d) => {
      var key = d.split(":")[0];
      var value = d.split(":")[1];
      obj[key] = value;
    });
    const k = Object.values(obj);

    setDataContent(k);
  }, [data]);

  useEffect(() => {
    const mappedResult = data.map((d) => {
      var key = d.split(":")[0];
      var value = d.split(":")[1];
      return {
        avain: key,
        value: value,
      };
    });

    const results = mappedResult.filter((joka) => joka.avain === searchTerm);
    setFilterResults(results);
  }, [data, searchTerm]);

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
          <p>
            Time of registery:{" "}
            <span className="app__registryTime">
              {`${data[0]} ${data[1]} `}
            </span>
          </p>
        </div>
        <img src="https://i.ibb.co/PxGygfW/delivery.png" alt="Truck" />
      </div>

      <div>
        <TwoMaps
          filterResults={filterResults}
          sisalto={dataContent}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
