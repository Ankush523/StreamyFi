import React from "react";

const StartPage = () => {
  return (
    <div>
      <div>
        <a href="/subscription-creation">
          <button className="text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white">
            Continue to Subscribe
          </button>
        </a>
        <a href="/subscription-list">
          <button className="text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white">
            View Subscribed List
          </button>
        </a>
      </div>
    </div>
  );
};

export default StartPage;
