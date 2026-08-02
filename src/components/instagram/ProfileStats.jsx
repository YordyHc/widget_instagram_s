import React from "react";

function ProfileStats({ mediaCount, followers, following }) {
  const Item = ({ number, label }) => (
    <div className="text-center">
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );

  return (
    <div className="flex gap-8">
      <Item number={mediaCount} label="Posts" />

      <Item number={followers} label="Followers" />

      <Item number={following} label="Following" />
    </div>
  );
}

export default ProfileStats;
