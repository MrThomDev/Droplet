// import "./App"
import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import axios from "axios";

function Summary({ buckets, droplets }) {
  const [summaryHtml, setSummaryHtml] = useState([]);
  let closedDrops;
  let activeDrops;

  //functions
  const buildBucketSummary = () => {
    const sumObj = {};
    for (let bucket of buckets) {
      if (!sumObj[bucket.bucketName]) {
        sumObj[bucket.bucketName] = {
          id: bucket.id,
          totalDrops: 0,
          activeDrops: 0,
        };
      }
    }

    droplets.forEach((el) => {
      for (let bucket in sumObj) {
        if (el.bucketId === sumObj[bucket].id) {
          sumObj[bucket].totalDrops += 1;
        }
      }
    });

    droplets.forEach((el) => {
      for (let bucket in sumObj) {
        if (el.bucketId === sumObj[bucket].id && el.status === "active") {
          sumObj[bucket].activeDrops += 1;
        }
      }
    });
    //
    return sumObj;
  };

  const buildBucketHtml = () => {
    const sumObj = buildBucketSummary();
    let out = [];
    for (let bucket in sumObj) {
      out.push(
        <div className="bucketSummaryItem">
          <h4>{bucket}</h4>
          <div>{`Total Drops in bucket: ${sumObj[bucket].totalDrops}`}</div>
          {sumObj[bucket].activeDrops > 0 ? (
            <div>{`Total active Drops: ${sumObj[bucket].activeDrops}`}</div>
          ) : (
            <div>No active drops</div>
          )}
        </div>
      );
    }
    return out;
  };

  const totalDropletHours = () => {
    const dropHours = droplets.reduce((pre, cur) => {
      return cur.totalTime + pre;
    }, 0);
    return dropHours;
  };

  const buildDropHtml = () => {
    const dropSumm = [];
    const dropHours = totalDropletHours();

    dropSumm.push(
      <div className="dropsSumm">
        <h4>
          Total Drop Hours: <div>{`${dropHours / 1000 / 60 / 60}`}</div>
        </h4>
      </div>
    );

    return dropSumm;
  };

  const buildSummaryHtml = () => {
    const sumObj = buildBucketSummary();
    const bucketSumm = buildBucketHtml();
    const dropSumm = buildDropHtml();

    const out = bucketSumm.concat(dropSumm);

    setSummaryHtml(out);
  };

  useEffect(() => {
    buildSummaryHtml();
    closedDrops = droplets.filter((el) => el.status != "active");
    activeDrops = droplets.filter((el) => el.status === "active");
  }, [buckets, droplets]);

  return (
    <>
      <div className="summary">{summaryHtml}</div>
      <LineChart buckets={buckets} droplets={droplets} />
    </>
  );
}

export default Summary;
