import { useState } from "react";
import { model } from "../services/aiApi";
import ChatHistory from "../components/chatHistory";

const ChatBot = () => {
  const [userInput, setuserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setchatHistory] = useState([]);
  const modelAi = model;
  const maxOutputTokens = import.meta.env.VITE_MAX_TOKENS;
  const temperature = import.meta.env.VITE_TEMPERATURE;
  console.log("input", typeof userInput)

  const handleUserInput = (e) => {
    setuserInput(e.target.value);
  };

  
  const clearChat = () => {
    setchatHistory([]);
  };

  const isRelevantToPlants = (question) => {
    const keywords = ["tumbuhan", "tanaman", "flora", "jenis tumbuhan", "karakteristik tumbuhan", "manfaat tumbuhan", "habitat tumbuhan", "pertumbuhan tumbuhan"];
    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  };

  // eslint-disable-next-line no-unused-vars
  const generativeConfig = {
    maxOutputTokens: parseInt(maxOutputTokens),
    temperature: parseFloat(temperature),
  };
  
  const handleSend = () => {
    console.log("userInput:", userInput); // Log nilai sebelum mengirim
    sendMessage(userInput); // Pastikan mengirimkan string
};

  const sendMessage = async (question) => {
    if (typeof question !== 'string') {
      console.log("data type question",typeof question)
      console.error("Pertanyaan harus berupa teks.");
      return;
    }
    
    if (!isRelevantToPlants(question)) {
      console.log("Pertanyaan harus berkaitan dengan tumbuhan. Silakan ajukan pertanyaan yang relevan.");
      return;
  }
    try {
      // const chat = modelAi.startChat({
      //   generativeConfig,
      //   history: []
      // })
      
      const result = await modelAi.generateContent({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: question
              }
            ]
          }
        ],
        generationConfig: generativeConfig
      });
      const aiAnswer = result.response.text();
      setAnswer(aiAnswer);
      setuserInput("");
      setchatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: aiAnswer },
      ]);
    } catch (err) {
      console.log(err.message)
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
              // onClick={sendMessage}
              onClick={handleSend}
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
