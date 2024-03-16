import React from "react";

const RightCards = ({ description, icon, onClick }) => {
  return (
    <div
      className="bg-sky-50 mx-2 my-4 rounded-lg hover:bg-gray-100 cursor-pointer"
      onClick={onClick} 
    >
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
        <img
          src={icon}
          alt="Icon"
          className="bg-white rounded-full p-2 w-12 h-12 mt-4 ml-auto"
        />
      </div>
    </div>
  );
};

export default RightCards;
