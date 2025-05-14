"use client";

export default function Modal({ onClose }) {
  return (
    <div className="z-50 flex items-center justify-center px-4 border-2 border-gray-300 bg-white rounded-lg shadow-lg">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-[10px]">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Avatar</h2>

        <div className="space-y-4">
          <input className="w-full p-3 border border-gray-300 " placeholder="Name" />
          <input className="w-full p-3 border border-gray-300 " placeholder="Image URL" />
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 text-gray-700">Cancel</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white ">Create</button>
        </div>
      </div>
    </div>
  );
}
  