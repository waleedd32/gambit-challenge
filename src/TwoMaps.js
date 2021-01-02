import React from "react";
import IndexBox from "./components/IndexBox";
import ValueBox from "./components/ValueBox";
import "./components/ValueBox.css";
import "./components/IndexBox.css";

function TwoMaps({ sisalto }) {
  return (
    <div className="twoMaps">
      {sisalto.map((value) => (
        <div>
          <div>
            <ValueBox value={value} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TwoMaps;
