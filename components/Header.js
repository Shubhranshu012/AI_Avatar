"use client"
export default function Header({ username }) {
    return (
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {username} 👋</h1>
        <p className="text-gray-600">Manage your AI avatars below</p>
      </div>
    );
  }
  