import React from "react";

const messages = [
  { name: "Roger Korsgaard", status: "online" },
  { name: "Terry Torff", status: "online" },
  { name: "Angel Bergson", status: "online" },
  { name: "Emerson Gouse", status: "online" },
  { name: "Corey Baptista", status: "online" },
  { name: "Zain Culhane", status: "offline" },
  { name: "Randy Lipshutz", status: "online" },
  { name: "Craig Botosh", status: "online" },
];

function Messages() {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-200 text-gray-700 font-bold">
        Primary
      </div>
      <div className="px-4 py-2 bg-white text-gray-700 font-bold">General</div>
      <div className="px-4 py-2 bg-white text-gray-700 font-bold">
        Requests(4)
      </div>
      <div className="divide-y divide-gray-200">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 hover:bg-gray-100"
          >
            <div
              className={`h-10 w-10 rounded-full bg-gray-300 flex-shrink-0 mr-3`}
            ></div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-medium">{message.name}</span>
              <span
                className={`text-sm ${
                  message.status === "online"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 bg-white text-blue-500 cursor-pointer hover:underline">
        View All
      </div>
    </div>
  );
}

export default Messages;
