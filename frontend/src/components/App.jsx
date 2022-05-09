import "../App.css";
import Navbar from "./Navbar";
import Buckets from "./Buckets";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(1);
  const [buckets, setBuckets] = useState([]);

  const getUserBuckets = async (user) => {
    const res = await axios.get(`http://localhost:8080/user/buckets/${user}`);
    const newBuckets = res.data;
    return newBuckets;
  };

  useEffect(() => {
    async function fetchData() {
      const out = await getUserBuckets(user);
      console.log("Out is ", out);
      return out;
    }
    setBuckets(fetchData());
  }, []);
  return (
    <>
      <Navbar />
      <div>This is where the main content will go</div>
      <Buckets buckets={buckets} />
    </>
  );
}

export default App;
