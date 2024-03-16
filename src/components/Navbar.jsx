import React from "react";
import UserImage from "../gemini-assets/assets/user_icon.png";
import SearchBar from "./SearchBar";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Navbar = ({
  searchQuery,
  handleSearchChange,
  handleSearchClick,
  handleVoiceSearch,
  isListening,
  transcript,
  toggleMenu,
  menuOpen,
}) => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-10 py-4 px-4 flex items-center ">
      {menuOpen ? (
        <button onClick={toggleMenu}>
          <IoIosArrowDropleftCircle className="text-2xl text-sky-400 mt-1" />
        </button>
      ) : (
        <button  onClick={toggleMenu}>
          <IoIosArrowDroprightCircle className="text-2xl text-sky-400 mt-1" />
        </button>
      )}
      <h1 className="text-2xl hidden ml-4 md:block">Gemini</h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
        handleVoiceSearch={handleVoiceSearch}
        isListening={isListening}
        transcript={transcript}
      />

      <img
        src={UserImage}
        alt="userImage"
        className="rounded-full h-12 w-12 object-cover hidden md:block"
      />
    </div>
  );
};

export default Navbar;
