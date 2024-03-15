import React, { useState } from "react";
import MenuIcon from "../../gemini-assets/assets/menu_icon.png";
import QuestionIcon from "../../gemini-assets/assets/question_icon.png";
import HistoryIcon from "../../gemini-assets/assets/history_icon.png";
import SettingIcon from "../../gemini-assets/assets/setting_icon.png";

const Leftbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const iconData = [
    { image: QuestionIcon, name: "Question" },
    { image: HistoryIcon, name: "History" },
    { image: SettingIcon, name: "Setting" },
  ];

  return (
    <div
      className={`sticky left-0 top-0 bg-sky-50 h-screen py-4 px-6 flex flex-col justify-between ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div>
        <img
          src={MenuIcon}
          alt="MenuIcon"
          className="h-8 w-8 hover:cursor-pointer mb-6"
          onClick={toggleMenu}
        />

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
        </div>
      )}
    </div>
  );
};

export default Leftbar;
