import React from "react";
import HowToPlay from "./HowTo";
import StartGame from "./StartGame";

import Welcome from "./Welcome";

function LandingPage() {
  return (
    <div>
      <Welcome />
      <HowToPlay />
      <StartGame />
    </div>
  );
}

export default LandingPage;
