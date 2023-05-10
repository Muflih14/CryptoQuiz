import React from "react";

function Home() {
  return (
    <div>
      <div className="game-home">
        <div className="home-buttons-div flex flex-col items-center">
          <div className="direction-buttons rounded-3xl">
            <button className="dir-button">
              <a href="./profile">Profile</a>
            </button>
          </div>
          <div className="direction-buttons rounded-3xl">
            <button className="dir-button1">
              <a href="/challenges">Start Challenge</a>
            </button>
          </div>
          <div className="direction-buttons rounded-3xl">
            <button className="dir-button1">Leader Board</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
