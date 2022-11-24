import React from "react";

const CircleBtn = ({ sign, addToEquation }) => {
  return (
    <button
      onClick={() => addToEquation(sign)}
      className="rounded-full bg-slate-200 p-4"
    >
      {sign}
    </button>
  );
};

export default CircleBtn;
