import React, { useState, useCallback, useEffect, useRef } from "react";
import "./genretor.css";

function Genretor() {
  const passwordref = useRef(null);

  const [length, setLength] = useState(8);
  const [num, setNum] = useState("false");
  const [char, setChar] = useState("false");
  const [pass, setPass] = useState(" ");

  const passgenretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*(){}?";

    for (let i = 1; i <= length; i++) {
      let charr = Math.floor(Math.round() * str.length + 1);
      pass += str.charAt(charr);
    }

    setPass(pass);
  }, [length, num, char, setPass]);

  const copytoclip = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0);
    window.navigator.clipboard.writeText(pass);
  });

  useEffect(() => {
    passgenretor();
  }, [length, num, char, passgenretor]);

  return (
    <div className="bg">
      <div className="bg-gray-700">
        <h1 className="text-white text-center text-xl mb-5">
          Password genretor
        </h1>
        <div className="justify-center flex mb-4">
          <div>
            <label className="text-white ">
              Copy your Password :
              <input
                value={pass}
                placeholder="password"
                readOnly
                type="text"
                className="rounded inline text-black ml-3 mr-3"
                ref={passwordref}
              />
            </label>
            <button className="bg-blue-500 p-1 rounded-lg" onClick={copytoclip}>
              Copy
            </button>
          </div>
        </div>
        <div className="justify-center flex mt-4">
          <label className="mr-5">
            <input
              type="range"
              min={8}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </label>
          <h3 className="text-white me-10">password length : {length}</h3>
          <label className="text-white mr-5">
            Include Numbers :{" "}
            <input
              type="checkbox"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
          </label>
          <label className="text-white">
            Include Characters:{" "}
            <input
              type="checkbox"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Genretor;
