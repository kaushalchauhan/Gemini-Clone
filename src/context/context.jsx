import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [sidebarShow, setSidebarShow] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarShow(!sidebarShow);
  }
  const delayData = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  }
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }
  const onSent = async (prompt) => {

    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt)
    } else {
      setPreviousPrompt(prev => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let formattedRes = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        formattedRes += responseArray[i]
      }
      else {
        formattedRes += "<b>" + responseArray[i] + "</b>"
      }
    }
    let formattedRes2 = formattedRes.split("*").join("</br>");
    let newResponseArray = formattedRes2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayData(i, nextWord + " ")
    }
    setLoading(false);
    setInput("");
  };
  // onSent("what is react js");
  const contextValue = {
    previousPrompt, setPreviousPrompt, onSent, recentPrompt, setRecentPrompt, showResult, loading, resultData, input, setInput, newChat, handleSidebarToggle, sidebarShow, setSidebarShow
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
