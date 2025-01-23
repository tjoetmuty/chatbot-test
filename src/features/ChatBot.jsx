import { useState } from "react";
import { model } from "../services/aiApi";
import ChatHistory from "../components/chatHistory";
import Loading from "../components/Loading";

const ChatBot = () => {
  const [userInput, setuserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setchatHistory] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleUserInput = (e) => {
    setuserInput(e.target.value);
  };

  const clearChat = () => {
    setchatHistory([])
  }

  const modelAi = model;
  const sendMessage = async () => {
    setLoading(true)
    try {
      const result = await modelAi.generateContent(userInput);
      const aiAnswer = result.response.text();
      setAnswer(aiAnswer);
      console.log("hasil", aiAnswer);
      setuserInput("");
      setchatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: aiAnswer },
      ]);
      setLoading(false)
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
          {/* <div className="text-center">
            <Markdown>{!answer ?  "what can i help with?" : answer}</Markdown>
          </div> */}
          </div>
          {/* <Loading isLoading={loading}/> */}
          <div>
            {!answer ? (
              <p className="font-bold text-2xl">what can i help you with?</p>
            ) : (
              <ChatHistory
                chat={chatHistory}
                className="rounded-lg shadow-md p-4"
              />
            )}
          </div>
          <Loading/>
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
            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 active:bg-blue-400"
                onClick={sendMessage}
              >
                Send
              </button>
              <button
                className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-500 active:bg-gray-400"
                onClick={clearChat}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChatBot;
