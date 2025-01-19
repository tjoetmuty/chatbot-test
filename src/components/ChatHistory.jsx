import Markdown from "react-markdown";

// eslint-disable-next-line react/prop-types
const ChatHistory = ({ chat }) => {
  return (
    <div>
      {chat.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 rounded-lg ${
            message.type === "user"
              ? "bg-gray-100 text-gray-800"
              : "bg-gray-100 text-blue-800"
          }`}
        >
          {message.type === "user" && (
            <span className="mr-2 font-bold text-gray-600">You: </span>
          )}
          <div>
          <Markdown>{message.message}</Markdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
