"use client"
export default function Button({ onClick }) {
    return (
      <button
      onClick={onClick}
      className=" p-4 bg-blue-600 text-white rounded-full shadow-lg transition-all hover:bg-blue-500 focus:outline-none"
    >
      Create Avatar
    </button>
    );
  }
  