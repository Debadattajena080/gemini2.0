import React from "react";

import QuestionIcon from "../../gemini-assets/assets/question_icon.png";
import HistoryIcon from "../../gemini-assets/assets/history_icon.png";
import SettingIcon from "../../gemini-assets/assets/setting_icon.png";
import GeolocationComponent from "../Location";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

const Leftbar = ({ menuOpen, toggleMenu }) => {
  const iconData = [
    { image: QuestionIcon, name: "Question" },
    { image: HistoryIcon, name: "History" },
    { image: SettingIcon, name: "Setting" },
  ];

  return (
    <div className={`leftbar flex flex-col justify-between px-4 py-8 ${menuOpen ? "menu-open" : ""}`}>
      <div>
        {menuOpen && <span className="text-lg text-gray-500">Recent</span>}
      </div>
      {menuOpen && (
        <div>
          {iconData.map((icon, index) => (
            <div key={index} className="flex items-center my-3">
              <img
                src={icon.image}
                alt={`${icon.name}Icon`}
                className="h-10 w-10 hover:bg-gray-200 rounded-full p-2 cursor-pointer"
              />
              <span className="ml-2">{icon.name}</span>
            </div>
          ))}
          <div className="ml-4">
            <GeolocationComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Leftbar;
