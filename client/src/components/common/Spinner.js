import React from "react";
import spinner from "./spinner3.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "90px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
