// import "./App"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/buckets.css";

function Buckets({ buckets }) {
  const [bucketHtml, setBucketHtml] = useState([]);

  const buildBucketHtml = () => {
    const HTML = buckets.map((el, index) => {
      return (
        <div className="bucketItem" key={index}>
          <div className="bucketName">{el.bucketName}</div>
          <div className="bucketDescription">{el.bucketDescription}</div>
        </div>
      );
    });
    setBucketHtml(HTML);
  };

  useEffect(() => {
    if (buckets.length < 1) {
      setBucketHtml(<div>No Buckets were loaded</div>);
    } else {
      buildBucketHtml();
    }
  }, [buckets]);

  return <div className="buckets">{bucketHtml}</div>;
}

export default Buckets;
