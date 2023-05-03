import React from "react";
import "./Cloud.css";
const Cloud = () => {
  return (
    <div class="cloud-container">
      <button class="cloud-btn">Click me!</button>
      <svg
        class="cloud"
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5,50 a20,20 0 0,0 20,20 h70 a20,20 0 0,0 0,-40 a10,10 0 0,0 -10,-10 h-60 a10,10 0 0,0 -10,10 z" />
      </svg>
    </div>
  );
};

export default Cloud;
