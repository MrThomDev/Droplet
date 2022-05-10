import "../App.css";
import Navbar from "./Navbar";
import Buckets from "./Buckets";
import Droplets from "./Droplets";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(1);
  const [buckets, setBuckets] = useState([]);
  const url = "http://localhost:8080";

  const getUserBuckets = async (user) => {
    const res = await axios.get(`${url}/user/buckets/${user}`);
    const newBuckets = res.data;
    setBuckets(newBuckets);
  };

  useEffect(() => {
    getUserBuckets(user);
  }, []);

  useEffect(() => {
    if (buckets.length < 1) {
      getUserBuckets(user);
      console.log("No Buckets for you!");
      console.log("see: ", buckets);
    }
  }, [buckets, user]);
  return (
    <>
      <Navbar />
      <div className="mainBody">
        <Buckets buckets={buckets} url={url} />
        <Droplets user={user} url={url} />
      </div>
    </>
  );
}

export default App;
