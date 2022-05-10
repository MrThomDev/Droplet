// import "./App"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Droplets({ user, url }) {
  const [droplets, setDroplets] = useState([]);
  const [dropletHtml, setDropletHtml] = useState([]);

  const getUserDroplets = async () => {
    const res = await axios.get(`${url}/user/droplets/${user}`);
    const droplets = res.data;
    setDroplets(droplets);
  };

  const buildDropletHtml = () => {
    // console.log("17: Buckets Arr: ", bucketsArr);
    console.log(droplets);
    const HTML = droplets.map((el, index) => {
      return (
        <div className="dropletItem" key={index}>
          <div className="dropletName">{el.dropName}</div>
          <div className="dropletDescription">{el.dropDescription}</div>
          <div className="dropletStart">{el.dropStart}</div>
          <div className="dropletEnd">{el.dropEnd}</div>
          <div className="dropletStatus">{el.status}</div>
          <div className="dropletTime">{`${
            el.totalTime / 1000 / 60 / 60
          } hours`}</div>
        </div>
      );
    });
    setDropletHtml(HTML);
    console.log(dropletHtml);
  };

  useEffect(() => {
    getUserDroplets();
  }, []);

  useEffect(() => {
    if (droplets.length < 0) {
      getUserDroplets();
    } else {
      buildDropletHtml();
    }
  }, [droplets]);

  return (
    <div className="buckets">
      Droplets will go in here.
      {dropletHtml}
    </div>
  );
}

export default Droplets;
