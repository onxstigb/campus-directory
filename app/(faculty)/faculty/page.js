"use client";

import { useState } from "react";

const facultyList = ["Dr. Kelly Hayes", "Dr. Madison Lind", "Dr. Iyanna Smith"];

export default function FacultyPage() {
  const [input, setInput] = useState("");

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Faculty Directory</h1>


      {/* Faculty List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Faculty Members:</h2>
        <ul className="list-disc pl-6 space-y-2">
          {facultyList.map((faculty, index) => (
            <li key={index} className="text-lg text-gray-800 dark:text-gray-200">{faculty}</li>
          ))}
        </ul>
      </div>


      {/* Live Text Input */}
      <div className="p-6 bg-gray-50 border rounded-lg">
        <label className="block mb-2 font-bold text-gray-700">Leave a note:</label>
        
        <input
          type="text"
          placeholder="Please type something here..."
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="p-3 bg-white border border-gray-200 rounded min-h-[3rem]">
          <span className="text-gray-500 text-sm uppercase font-bold block mb-1">Live Preview:</span>
          <p className="text-lg text-blue-600 break-words">
            {input || "Waiting for text..."}
          </p>
        </div>
      </div>
    </div>
  );
}