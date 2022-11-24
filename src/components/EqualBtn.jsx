import React from "react";

const EqualBtn = ({ calculateAll }) => {
  return (
    <button
      onClick={() => calculateAll()}
      className="bg-slate-200 mt-4 rounded-lg py-2 px-4 text-center w-full"
    >
      =
    </button>
  );
};

export default EqualBtn;
