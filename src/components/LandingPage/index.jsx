import React from "react";
import Typewriter from "typewriter-effect";

function LandingPage() {
  return (
    <div>
      <div className=" justify-between text-white mt-4 hero">
        <div class=" p-12 shadow-lg overflow-hidden mt-10 marketting-section">
          <h1 class="text-5xl font-semibold mb-2 mt-14 font-extrabold text-2xl font-sans">
            CryptoQuiz
          </h1>
          <h2 class="text-xl font-semibold font-sans mt-4 mb-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to our Web3 Play-to-Earn Game!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("An excellent Play to Learn and Earn Game")
                  .start();
              }}
            />
          </h2>

          <p class="text-gray-600 text-lg mt-10 mb-10 font-serif font-semibold text-white
          leading-loose">
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

      <div className="flex flex-row justify-end w-full">
        <div
          className="w-32 h-32 bg-white shadow-blue-800 shadow-lg border-0 rounded-lg 
      border-black rotate-45 marketting-logo"
        >
          <div className="inner-div transform -rotate-45">
            <div className="flex flex-row justify-center -ml-20 mt-14">
              <h1 className="font-mono text-5xl leading-loose">
                Play! <br />
                Learn! <br />
                Earn!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <button
        class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 
        hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg shadow-md 
        font-mono text-7xl font-black drop-shadow-2xl animate-pulse start-button"
      >
        <a href="/home">Start Game</a>
      </button>
    </div>
  );
}

export default LandingPage;
