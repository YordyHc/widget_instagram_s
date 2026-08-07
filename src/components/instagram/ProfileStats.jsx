import React from "react";

function ProfileStats({ mediaCount, followers, following }) {
  const Item = ({ number, label }) => (
    <div className="text-start">
      <p className="text-lg font-bold text-[var(--text)]">{number}</p>
      <p className="text-[var(--text)]">{label}</p>
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
