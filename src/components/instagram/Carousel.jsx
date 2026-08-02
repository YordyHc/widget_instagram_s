import React from "react";
import PostCard from "./PostCard";

function Carousel({ posts, onOpenPost }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onClick={() => onOpenPost(post)} />
      ))}
    </div>
  );
}

export default Carousel;
