// import "./App"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Buckets({ user, buckets }) {
  //consts
  const [bucketPreview, setBucketPreview] = useState();
  //

  const bucketHtml = () => {
    // console.log("17: Buckets Arr: ", bucketsArr);
    console.log(buckets);
    const bucketHTML = buckets.map((el, index) => {
      return (
        <div className="bucketItem" key={index}>
          <div className="bucketName">{el.bucketName}</div>
          <div className="bucketDescription">{el.bucketDescription}</div>
        </div>
      );
    });
    setBucketPreview(bucketHTML);
  };

  useEffect(() => {
    bucketHtml(buckets);
  }, []);

  return (
    <div className="buckets" onClick={bucketHtml}>
      Buckets will go in here.
      {bucketPreview}
    </div>
  );
}

export default Buckets;
