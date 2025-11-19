"use client";

import { use } from "react";

export default function StudentDetails({ params }) {

    const { id } = use(params);

  return (
    <div className="p-6 border rounded shadow bg-white max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <p className="text-xl">
        Student ID: <span className="text-blue-600 font-mono">{id}</span>
      </p>
    </div>
  );
}