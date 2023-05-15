import React from "react";
import { useNavigate } from "react-router-dom";

export default function DifficultySelection() {
  const navigate = useNavigate();

  const handleDifficultyClick = (difficulty) => {
    navigate(`/challenge/${difficulty}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Choose Difficulty Level</h1>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDifficultyClick("easy")}
        >
          EASY
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDifficultyClick("intermediate")}
        >
          INTERMEDIATE
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDifficultyClick("difficult")}
        >
          DIFFICULT
        </button>
      </div>
    </div>
  );
}
