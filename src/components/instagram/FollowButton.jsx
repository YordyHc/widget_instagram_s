import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

function FollowButton({ username }) {
  const StyledWrapper = styled.div`
    .button {
      width: fit-content;
      display: flex;
      padding: 0.8em 1rem;
      cursor: pointer;
      gap: 0.4rem;
      font-weight: bold;
      border-radius: 30px;
      text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
      background: linear-gradient(
          15deg,
          #833ab4,
          #c13584,
          #e1306c,
          #f56040,
          #f09f33,
          #f56040,
          #e1306c,
          #c13584,
          #833ab4
        )
        no-repeat;
      background-size: 300%;
      color: #fff;
      border: none;
      background-position: left center;
      box-shadow: 0 30px 10px -20px rgba(0, 0, 0, 0.2);
      transition: background 0.3s ease;
    }

    .button:hover {
      background-size: 320%;
      background-position: right center;
    }

    .button:hover svg {
      fill: #fff;
    }

    .button svg {
      transition: 0.3s ease;
    }
  `;
  return (
    <StyledWrapper>
      <button
        onClick={() =>
          window.open(`https://www.instagram.com/${username}/`, "_blank")
        }
        className="button items-center"
      >
        <FaInstagram />
        Follow
      </button>
    </StyledWrapper>
  );
}

export default FollowButton;
