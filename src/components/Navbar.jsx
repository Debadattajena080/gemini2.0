import React from "react";
import UserImage from "../gemini-assets/assets/user_icon.png";
import SearchBar from "./SearchBar";

const Navbar = ({ searchQuery, handleSearchChange, handleSearchClick }) => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-10 p-4 flex items-center ">
      <h1 className="text-2xl hidden md:block">Gemini</h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
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
