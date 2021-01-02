import React from "react";
import IndexBox from "./components/IndexBox";
import ValueBox from "./components/ValueBox";
import "./components/ValueBox.css";
import "./components/IndexBox.css";

function TwoMaps({ searchTerm, filterResults, sisalto }) {
  return (
    <div className="twoMaps">
      {searchTerm === ""
        ? sisalto.map((value, index) => (
            <div>
              <div className="twoMaps__item hover1">
                <IndexBox indexx={index + 1} />
              </div>
              <div className="twoMaps__item hover2">
                <ValueBox value={value} />
              </div>
            </div>
          ))
        : filterResults.map(({ avain, value }, index) => (
            <div>
              <div className="twoMaps__item">
                <IndexBox indexx={avain} />
              </div>
              <div className="twoMaps__item">
                <ValueBox value={value} />
              </div>
            </div>
          ))}
    </div>
  );
}

export default TwoMaps;
