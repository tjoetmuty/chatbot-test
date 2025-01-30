import { TypeAnimation } from "react-type-animation";

// eslint-disable-next-line react/prop-types
const ChatHistory = ({ chat }) => {
  return (
    <div className="container w-screen bg-gray-50 p-2 flex flex-col gap-2">
      {chat.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${
            message.type === "user"
              ? " bg-gray-100 text-gray-800"
              : " bg-blue-100 text-blue-800"
          }`}
        >
          {message.type === "user" && (
            <span className="mr-2 font-bold text-gray-600">You: </span> 
          )}
          <div>
            {message.type === "bot" ? (
              <TypeAnimation
                sequence={[message.message, 1000]}
                speed={50}
                repeat={0}
              />
            ) : (
              <span>{message.message}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
