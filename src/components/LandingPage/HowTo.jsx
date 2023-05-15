import React from "react";

export default function HowToPlay() {
  return (
    <div className="flex flex-row bg-white">
      <div className="flex flex-row w-full bg-white ml-28">
        <div
          className="w-32 h-32 bg-white shadow-blue-800 shadow-lg border-0 rounded-lg 
      border-black rotate-45 marketting-logo"
        >
          <div className="inner-div transform -rotate-45">
            <div className="flex flex-row justify-center -ml-20 mt-8">
              <h1 className="font-mono text-5xl leading-loose">
                Play! <br />
                Learn! <br />
                Earn!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end text-violet-900 bg-white m-28 
        how-to text-xl font-semibold leading-9 participate">
        <h3>
          To Participate and earn tokens, Sign up or log in by connecting your
          wallet, explore various categories and select a question, submit your
          answer and earn tokens based on accuracy and speed, and redeem tokens
          for exciting rewards and NFTs. <br />
          <br/>
          Stay engaged and keep learning to maximize your earnings!"
        </h3>
      </div>

    </div>
  );
}
