"use client"
export default function Card({ avatar }) {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 text-center">
        <img
          src={avatar.avatar}
          alt={avatar.first_name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="font-semibold">{avatar.first_name} {avatar.last_name}</h2>
        <p className="text-sm text-gray-500">{avatar.email}</p>
        <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Edit
        </button>
      </div>
    );
  }
  