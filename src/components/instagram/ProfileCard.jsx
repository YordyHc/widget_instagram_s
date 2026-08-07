import React from "react";
import ProfileStats from "../instagram/ProfileStats";
import FollowButton from "../instagram/FollowButton";

import Checkbox from "./Checkbox";
function ProfileCard({ perfil }) {
  if (!perfil) return null;
  return (
    <div className="mx-auto flex w-full max-w-[fit-content] items-center px-5 py-4">
      <div className="md:flex sm:block flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`https://www.instagram.com/${perfil.username}/`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-block"
          >
            <div className="rounded-full p-[3px] bg-[linear-gradient(45deg,#833ab4,#c13584,#e1306c,#f56040,#f09f33)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(225,48,108,.5)]">
              <img
                src={perfil.profile_picture_url}
                alt={perfil.name}
                className="h-15 w-15 rounded-full border-2 border-[var(--bg)] object-cover"
              />
            </div>

            <span
              className="
      absolute inset-0 rounded-full
      bg-white/20 opacity-0 blur-md
      transition-opacity duration-300
      group-hover:opacity-100
    "
            />
          </a>

          <div className="justify-items-start">
            <h2 className="text-2xl font-bold">
              <a
                href={`https://www.instagram.com/${perfil.username}/`}
                target="_blank"
                rel="noreferrer"
                className="
    inline-block
    bg-[linear-gradient(45deg,#833ab4_0%,#c13584_25%,#e1306c_50%,#f56040_75%,#f09f33_100%)]
    bg-[length:300%_300%]
    bg-[position:0%_50%]
    bg-clip-text
    text-transparent
    transition-[background-position]
    duration-700
    ease-in-out
    hover:bg-[position:100%_50%]
  "
              >
                {perfil.name}
              </a>
            </h2>

            <p className="text-[var(--text)">
              <a
                href={`https://www.instagram.com/${perfil.username}/`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[var(--text-h)]"
              >
                @{perfil.username}
              </a>
            </p>
          </div>
          <div className="md:hidden">
            <FollowButton username={perfil.username} />
          </div>
        </div>

        <div className="flex items-center gap-12 justify-center pt-6 md:pt-0">
          <ProfileStats
            mediaCount={perfil.media_count}
            followers={perfil.followers_count}
            following={perfil.follows_count}
          />

          <div className="hidden md:block">
            <FollowButton username={perfil.username} />
          </div>
        </div>
      </div>
      <div className="absolute lg:right-15 top-13 z-10 hidden md:right-8 md:grid">
        <Checkbox />
      </div>
    </div>
  );
}

export default ProfileCard;
