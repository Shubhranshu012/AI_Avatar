"use client"
import Card from './Card';

export default function Grid({ avatars }) {
  return (
    <div className="flex flex-wrap space-x-6 justify-evenly w-[full]">
      {avatars.map(avatar => (
        <Card key={avatar.id} avatar={avatar} />
      ))}
    </div>
  );
}
