import React from "react";
import ReactMarkdown from "react-markdown";
import UserImage from "../gemini-assets/assets/user_icon.png";
import GeminiIcon from "../gemini-assets/assets/gemini_icon.png";

const Result = ({ resultData, recentPrompt, isLoading }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex items-center mb-4">
        <img
          src={UserImage}
          alt="userIcon"
          className="rounded-full h-10 w-10 object-cover"
        />
        <p className="text-xl font-bold ml-4">{recentPrompt}</p>
      </div>

      {isLoading ? (
        <img
          src={GeminiIcon}
          alt="geminiIcon"
          className="h-10 w-10 rotating-icon mb-4"
        />
      ) : (
        <ReactMarkdown children={resultData} />
      )}
    </div>
  );
};

export default Result;
