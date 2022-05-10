// import "./App"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/droplets.css";

function Droplets({ droplets }) {
  const [dropletHtml, setDropletHtml] = useState([]);

  const buildDropletHtml = () => {
    // console.log("17: Buckets Arr: ", bucketsArr);
    console.log(droplets);
    const HTML = droplets.map((el, index) => {
      return (
        <div className="dropletItem" key={index}>
          <div className="dropletName">{el.dropName}</div>
          <div className="dropletDescription">{el.dropDescription}</div>
          <div className="dropletStatus">{el.status}</div>
          <div className="dropletTime">{`${
            el.totalTime / 1000 / 60 / 60
          } hours`}</div>
          <div className="dropletStart">{el.dropStart}</div>
          <div className="dropletEnd">{el.dropEnd}</div>
        </div>
      );
    });
    setDropletHtml(HTML);
    console.log(dropletHtml);
  };

  useEffect(() => {
    if (droplets.length < 1) {
      setDropletHtml(<div>No Droplets were loaded</div>);
    } else {
      buildDropletHtml();
    }
  }, [droplets]);

  return <div className="droplets">{dropletHtml}</div>;
}

export default Droplets;
