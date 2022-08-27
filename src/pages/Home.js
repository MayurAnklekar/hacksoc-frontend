import React from "react";
import Card from "../components/card/card";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-row">
      <div className="bg-slate-100 w-[25%] h-screen p-4">ProfileCard</div>
      <div className="flex flex-row flex-wrap justify-around w-full">
        <Card />
        <Card />
      </div>
    </div>
    </div>
  );
};

export default Home;
