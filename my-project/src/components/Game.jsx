import React from "react";
import Board from "./Board";

export default function Game() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="game-board">
        <Board />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
