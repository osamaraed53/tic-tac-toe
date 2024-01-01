import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove%2 == 0

  
    function handlePlay(nextSquares){
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
      setCurrentMove(nextMove)
      setXIsNext(nextMove%2 != 0);
      }



      const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button className="border-2 border-white bg-slate-800 p-2 text-white shadow-lg shadow-slate-300" onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
    <div className="flex flex-row justify-center items-center gap-2 mt-7">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
