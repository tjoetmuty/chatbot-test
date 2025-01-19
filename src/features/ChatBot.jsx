import { useState } from "react";
import { model } from "../services/aiApi";
import Markdown from "react-markdown";

const ChatBot = () => {
  const [userInput, setuserInput] = useState("");
  const [answer, setAnswer] = useState("");

  const handleUserInput = (e) => {
    setuserInput(e.target.value);
  };

  const modelAi = model;
  const sendMessage = async () => {
    try {
      const result = await modelAi.generateContent(userInput);
      const aiAnswer = result.response.text();
      setAnswer(aiAnswer);
      setuserInput("");
      console.log("hasil", aiAnswer);
    } catch (err) {
      console.log("apa yang terjadi", err.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen justify-between items-center">
        <div className="w-full flex justify-center mt-4">
          <h1 className="font-extrabold text-lg">ChatBot Test</h1>
        </div>
        <div className="flex flex-grow justify-center items-center">
          <div className="text-center">
            <Markdown>{!answer ?  "what can i help with?" : answer}</Markdown>
          </div>
        </div>
        <div className="w-full flex justify-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              className="border rounded-lg p-2 w-80"
              placeholder="type your message ..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 active:bg-blue-400"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
