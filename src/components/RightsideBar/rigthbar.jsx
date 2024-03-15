import React, { useState } from "react";
import Navbar from "../Navbar";
import RightCards from "./rightCards";
import BulbIcon from "../../gemini-assets/assets/bulb_icon.png";
import CompassIcon from "../../gemini-assets/assets/compass_icon.png";
import CodeIcon from "../../gemini-assets/assets/code_icon.png";
import MessageIcon from "../../gemini-assets/assets/message_icon.png";
// import SearchBar from "../SearchBar";
import runChat from "../../config/gemini";

import Result from "../Result";

const Rigthbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setShowResult(true);
    setRecentPrompt(searchQuery);
    setIsLoading(true);
    console.log(recentPrompt);
    const resultResponse = await runChat(searchQuery);
    setResultData(resultResponse);
    setIsLoading(false);
    setSearchQuery("");
  };

  const handleSearchClick = () => {
    onSent(searchQuery);
  };

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />
      <div className="px-10">
        {!showResult ? (
          <>
            <div className="flex flex-col justify-center mx-60 pt-16">
              <span className="text-6xl font-semibold">
                Hello,{" "}
                <span className="bg-gradient-to-r from-red-800 to-blue-500 text-transparent bg-clip-text">
                  Dev.
                </span>
              </span>
              <span className="text-6xl pt-8 font-semibold text-gray-300">
                How can I help you today?
              </span>
            </div>
            <div className="flex mt-24 mx-32">
              <RightCards
                description={
                  "Suggest beautiful places to see on an upcoming road trip"
                }
                icon={CompassIcon}
              />
              <RightCards
                description={"Briefly summarize this concept: urban planning"}
                icon={BulbIcon}
              />
              <RightCards
                description={
                  "Brainstorm team bonding activities for our work retreat"
                }
                icon={MessageIcon}
              />
              <RightCards
                description={"Tell me about React js and React native"}
                icon={CodeIcon}
              />
            </div>{" "}
          </>
        ) : (
          <div className="overflow-y-auto mt-6 mx-10">
            {" "}
            <Result
              resultData={resultData}
              recentPrompt={recentPrompt}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleSearchClick={handleSearchClick}
        /> */}
      </div>
    </>
  );
};

export default Rigthbar;
