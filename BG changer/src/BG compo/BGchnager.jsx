import React from "react";
import "./BGchanger.css";

function BGchnager() {
  

  const changebgc = () => {
    document.body.style.backgroundColor = "red";
  };
  const changebgy = () => {
    document.body.style.backgroundColor = "yellow";
  };
  const changebgf = () => {
    document.body.style.backgroundColor = "fuchsia";
  };
  const changebgp = () => {
    document.body.style.backgroundColor = "purple";
  };
  const changebgs = () => {
    document.body.style.backgroundColor = "skyblue";
  };

  return (
    <div className="justify-center">
      <div className=" bg-white p-6 rounded-xl">
        <h1 className="mb-5 text-xl text-bold ">Without Using States</h1>
        <button
          className="bg-red-600 px-8 rounded-xl mr-2 text-xl red1"
          onClick={changebgc}
        >
          Red
        </button>
        <button
          className="bg-yellow-300 px-8 rounded-xl mr-2 text-xl yellow1"
          onClick={changebgy}
        >
          Yellow
        </button>
        <button
          className="bg-fuchsia-700 px-8 rounded-xl mr-2 text-xl fuchsia1"
          onClick={changebgf}
        >
          fuchsia
        </button>
        <button
          className="bg-purple-800 px-8 rounded-xl mr-2 text-xl purple1"
          onClick={changebgp}
        >
          purple
        </button>
        <button
          className="bg-sky-500 px-8 rounded-xl mr-2 text-xl sky1"
          onClick={changebgs}
        >
          sky
        </button>
      </div>
    </div>
  );
}

export default BGchnager;
