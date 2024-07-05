import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-gray-300">
      <button className="text-emerald-950 ">
        Back
      </button>
      <span className="text-2xl text-emerald-950 font-bold">AllocatePro</span>
      <button className="text-emerald-950">
        Sign In
      </button>
    </div>
  );
};

export default Header;
