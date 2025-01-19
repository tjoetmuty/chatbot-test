import { useState } from "react";
import { model } from "../services/aiApi";
import Markdown from "react-markdown";

const ChatBot = () => {
  const [userInput, setuserInput] = useState("");
  const [answer, setAnswer] = useState("")

  const handleUserInput = (e) => {
    setuserInput(e.target.value);
  };

  const modelAi = model
  const sendMessage = async () => {
    try {
      const result = await modelAi.generateContent(userInput);
      const aiAnswer = result.response.text()
      setAnswer(aiAnswer)
      setuserInput("")
      console.log("hasil", aiAnswer);
    } catch(err) {
      console.log("apa yang terjadi", err.message)
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-lg">ChatBot</h1>
          <div className="flex gap-2 ">
            <input
              type="text"
              className="border rounded-lg p-2"
              placeholder="type your message ..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
          <Markdown>{answer}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
