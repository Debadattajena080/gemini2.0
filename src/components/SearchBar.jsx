import React from "react";
import MicIcon from "../gemini-assets/assets/mic_icon.png";
import GalleryIcon from "../gemini-assets/assets/gallery_icon.png";
import SendIcon from "../gemini-assets/assets/send_icon.png";

const SearchBar = ({ searchQuery, handleSearchChange, handleSearchClick }) => {
  return (
    <div className="mx-auto bg-white border-gray-300">
      <div className="relative flex-grow">
        <input
          className="rounded-full bg-sky-50 h-12 px-5 text-sm focus:outline-none w-full"
          type="text"
          name="search"
          placeholder="Enter your prompt here"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <div className="">
          <button
            type="submit"
            className="absolute top-3 right-0 mr-2"
            onClick={handleSearchClick}
          >
            <img
              className="text-gray-600 h-5 w-5 fill-current"
              src={SendIcon}
              alt="SendIcon"
            />
          </button>
          <button type="submit" className="absolute top-3 right-10 mr-2">
            <img
              className="text-gray-600 h-5 w-5 fill-current"
              src={MicIcon}
              alt="MicIcon"
            />
          </button>
          <button type="submit" className="absolute top-3 right-20 mr-2">
            <img
              className="text-gray-600 h-5 w-5 fill-current"
              src={GalleryIcon}
              alt="GalleryIcon"
            />
          </button>
        </div>
      </div>
      <span className="text-xs text-gray-500 ml-4">
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </span>
    </div>
  );
};

export default SearchBar;
