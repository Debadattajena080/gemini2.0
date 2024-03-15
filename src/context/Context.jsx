// import { createContext, useState } from "react";
// import runChat from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPropmt] = useState("");
//   const [previousPropmpt, setPreviousPrompt] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");
//   const onSent = async (prompt) => {
//     await runChat(input);

//     console.log(input);
//   };

//   onSent();
//   const contextValue = {
//     previousPropmpt,
//     setPreviousPrompt,
//     onSent,
//     recentPrompt,
//     setRecentPropmt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput
//   };

//   return (
//     <Context.Provider value={contextValue}>{props.children}</Context.Provider>
//   );
// };

// export default ContextProvider;
