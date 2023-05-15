import React from "react";
import { useParams } from "react-router-dom";

export default function Questions({ props }) {
  const { difficulty } = useParams();

  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  let question;

  if (difficulty === "easy") {
    question = (
      <div className="m-28">
        <h1 className="text-2xl font-bold mb-4">Question:</h1>
        <p className="mb-4">What is the capital of France?</p>

        <div className="flex flex-col space-y-2">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              selectedAnswer === "paris" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleAnswerClick("paris")}
          >
            Paris
          </button>

          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              selectedAnswer === "berlin" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleAnswerClick("berlin")}
          >
            Berlin
          </button>

          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              selectedAnswer === "london" ? "bg-blue-700" : ""
            }`}
            onClick={() => handleAnswerClick("london")}
          >
            London
          </button>
        </div>
      </div>
    );
  } else if (difficulty === "intermediate") {
    question = "These are Intermediate Questions";
  } else if (difficulty === "difficult") {
    question = "These are difficult questions";
  }

  return (
    <div className="container mx-auto p-4 m-24">
      <h2 className="text-3l font-bold">QUESTIONS</h2>
      <h3 className="text-3l font-bold">
        Difficulty: {difficulty.toUpperCase()}
      </h3>
      <div>{question}</div>
    </div>
  );
}
