import React from "react";
import { FaInstagram } from "react-icons/fa";

function FollowButton({ username }) {
  return (
    <>
      <button
        onClick={() =>
          window.open(`https://www.instagram.com/${username}/`, "_blank")
        }
        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-white transition hover:scale-105"
      >
        <FaInstagram />
        Follow
      </button>
    </>
  );
}

export default FollowButton;
