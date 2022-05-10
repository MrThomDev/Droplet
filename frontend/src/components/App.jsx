import "./styles/App.css";
import Navbar from "./Navbar";
import Buckets from "./Buckets";
import Droplets from "./Droplets";
import Summary from "./Summary";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //user
  const [user, setUser] = useState(1);
  //view
  const [viewBuckets, setViewBuckets] = useState(false);
  const [viewDroplets, setViewDroplets] = useState(false);
  const [viewSummary, setViewSummary] = useState(true);
  //Bucket States
  const [buckets, setBuckets] = useState([]);
  //Droplet States
  const [droplets, setDroplets] = useState([]);

  //Global Variables
  const url = "http://localhost:8080";

  //Bucket functions
  const getUserBuckets = async () => {
    const res = await axios.get(`${url}/user/buckets/${user}`);
    const newBuckets = res.data;
    setBuckets(newBuckets);
  };

  //Droplet functions
  const getUserDroplets = async () => {
    const res = await axios.get(`${url}/user/droplets/${user}`);
    const droplets = res.data;
    setDroplets(droplets);
  };

  //use effects
  useEffect(() => {
    getUserBuckets();
  }, []);

  useEffect(() => {
    getUserDroplets();
  }, []);

  if (viewSummary) {
    return (
      <>
        <Navbar
          setViewBuckets={setViewBuckets}
          setViewDroplets={setViewDroplets}
          setViewSummary={setViewSummary}
        />
        <div className="mainBody">
          <Summary buckets={buckets} droplets={droplets} />
        </div>
      </>
    );
  } else if (viewBuckets) {
    return (
      <>
        <Navbar
          setViewBuckets={setViewBuckets}
          setViewDroplets={setViewDroplets}
          setViewSummary={setViewSummary}
        />
        <div className="mainBody">
          <Buckets buckets={buckets} />
        </div>
      </>
    );
  } else if (viewDroplets) {
    return (
      <>
        <Navbar
          setViewBuckets={setViewBuckets}
          setViewDroplets={setViewDroplets}
          setViewSummary={setViewSummary}
        />
        <div className="mainBody">
          <Droplets droplets={droplets} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}

export default App;
