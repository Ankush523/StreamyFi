import React from "react";
import Bg from "../images/Bg.png";
const Home = () => {
  return (
    <div className="bg-[#151019] h-[100vh] w-[100vw]">
      {/* <img src={Bg} className="w-[100vw] h-[100vh]" /> */}
      <div className="p-[220px]">
        <label className="text-white text-[50px] font-montserrat">
          Stream your Recurring Payments
        </label>
        <div className="flex flex-row justify-around pt-[20px]">
          <a href="/startpage"><button className="text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:bg-pink-500 p-[8px] bg-purple-700 text-white">Let's Get Started</button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
