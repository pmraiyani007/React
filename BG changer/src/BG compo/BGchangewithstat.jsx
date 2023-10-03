import { useState } from "react";
import "./BGchanger.css";
import React from "react";

function BGchangewithstat() {
  const [color, setColor] = useState("black");

  return (
    <div
      className=" bg-white p-6 rounded-xl  fixed ml-64 bottom-10"
      style={{ backgroundColor: color }}
    >
      <h1 className="mb-5 text-xl text-bold ">Using States</h1>
      <button
        className="bg-red-600 px-8 rounded-xl mr-2 text-xl red1"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="bg-yellow-300 px-8 rounded-xl mr-2 text-xl yellow1"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="bg-fuchsia-700 px-8 rounded-xl mr-2 text-xl fuchsia1"
        onClick={() => setColor("fuchsia")}
      >
        fuchsia
      </button>
      <button
        className="bg-purple-800 px-8 rounded-xl mr-2 text-xl purple1"
        onClick={() => setColor("purple")}
      >
        purple
      </button>
      <button
        className="bg-sky-500 px-8 rounded-xl mr-2 text-xl sky1"
        onClick={() => setColor("skyblue")}
      >
        sky
      </button>
    </div>
  );
}

export default BGchangewithstat;
