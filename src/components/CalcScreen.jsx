import React, { useState, useEffect } from "react";

const CalcScreen = ({ screenValue }) => {
  return (
    <div className="text-end mb-4 bg-slate-200 rounded-lg py-2 px-4 h-10">
      {screenValue}
    </div>
  );
};

export default CalcScreen;
