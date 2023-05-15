import React from "react";

export default function StartGame() {
  return (
    <div class="flex flex-row start-game">
    <div class="flex game-options m-24">
      <h2 class="text-3xl mt-12 font-semi text-violet-900">
        Discover a range of learning pathways tailored to different skill
        levels and interests. Choose from beginner, intermediate, and advanced
        topics, including blockchain basics, decentralized finance (DeFi),
        non-fungible tokens (NFTs), smart contracts, and more. Progress
        through each pathway to enhance your knowledge and earn tokens along
        the way.
      </h2>
    </div>
  
    <div class="flex flex-grow justify-end mt-28">
      <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 
        hover:to-purple-500 text-white font-bold py-4 px-8 rounded-lg shadow-md 
        font-mono text-7xl font-black drop-shadow-2xl animate-pulse start-button">
        <a href="/home">Start Game</a>
      </button>
    </div>
  </div>
  
  );
}
