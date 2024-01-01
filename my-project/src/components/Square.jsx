import React, { useState } from "react";

function Square({value ,onSquareClick}) {

  return (
    <button onClick={onSquareClick} className="flex flex-1 justify-center items-center text-5xl h-16 w-16 p-4 border-gray-700 border-[1px]">
      {value}
    </button>
  );
}

export default Square;
