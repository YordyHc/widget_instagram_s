import React from "react";
import ProfileStats from "../instagram/ProfileStats";
import FollowButton from "../instagram/FollowButton";
function ProfileCard({ perfil }) {
  if (!perfil) return null;
  return (
    <div className="mx-auto flex w-full max-w-[fit-content] items-center px-5 py-4">
      <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`https://www.instagram.com/${perfil.username}/`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={perfil.profile_picture_url}
              alt={perfil.name}
              className="h-15 w-15 rounded-full border-[3px] border-[#d6249f] p-[2px] object-cover"
            />
          </a>

          <div className="justify-items-start">
            <h2 className="text-2xl font-bold">
              <a
                href={`https://www.instagram.com/${perfil.username}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition"
              >
                {perfil.name}
              </a>
            </h2>

            <p className="text-gray-500">
              <a
                href={`https://www.instagram.com/${perfil.username}/`}
                target="_blank"
                rel="noreferrer"
              >
                @{perfil.username}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <ProfileStats
            mediaCount={perfil.media_count}
            followers={perfil.followers_count}
            following={perfil.follows_count}
          />

          <FollowButton username={perfil.username} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
