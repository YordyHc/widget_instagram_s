import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";

function PostCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden shadow-lg"
    >
      <img
        src={post.media_url}
        alt={post.caption ?? "Instagram"}
        className="h-105 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 grid bg-black/70 p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="mb-3 flex justify-center gap-6 text-lg">
          <span className="flex items-center gap-2">
            <FaHeart />
            {post.like_count ?? 0}
          </span>

          <span className="flex items-center gap-2">
            <FaComment />
            {post.comments_count ?? 0}
          </span>
        </div>

        <p className="line-clamp-4 text-sm">
          {post.caption || "Sin descripción"}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
