import React from "react";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <div>
      <div className="justify-between text-white mt-4 welcome">
        <div class=" p-12 shadow-lg overflow-hidden mt-10 welcome-section">
          <h1 class="text-5xl font-semibold mb-2 mt-14 font-extrabold text-2xl app-name">
            CryptoQuiz
          </h1>
          <h2 class="text-xl font-semibold mt-4 mb-2 sub-title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to our Web3 Play-to-Earn Game!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("An Excellent Play to Learn and Earn Game")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Learn Web3 and Earn Amazing Prizes")
                  .start();
              }}
            />
          </h2>
          <div className= "bg-white p-4 mt-8 rounded-lg shadow-lg shadow-white">
            <p
              class="text-gray-600 text-lg mt-2 mb-10 font-semibold
            leading-loose text"
            >
              Get ready to EARN while you LEARN with our Web3 Play-to-earn game!
              Answer Quiz Qestions related to WEB3 and earn rewards as you
              improve your knowledge of this exciting technology. Join now and
              explore the world of WEB3 in a fun and interactive way.
            </p>

            <button
              class="border-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 
            hover:text-white text-purple-500 font-bold py-2 px-4 rounded-lg inline-flex items-center 
            transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
            >
              <span class="mr-2 animate-bounce">🎮</span>
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
