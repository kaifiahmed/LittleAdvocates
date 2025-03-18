import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    height: 150px; /* Set height for rectangle */
    width: 400px; /* Set width for rectangle */
    margin: 0 auto; /* Center align */
    background-size: cover;
    background-position: center;
    border-radius: 10px; /* Smooth rounded corners */
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  div:hover {
    // transform: scale(1.05); /* Slight zoom-in effect */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5); /* More prominent shadow on hover */
  }

  .first_game {
    background-image: url("https://via.placeholder.com/300x150?text=First+Game");
  }

  .second_game {
    background-image: url("https://via.placeholder.com/300x150?text=Second+Game");
  }

  .third_game {
    background-image: url("https://via.placeholder.com/300x150?text=Third+Game");
  }

  .forth_game {
    background-image: url("https://via.placeholder.com/300x150?text=Forth+Game");
  }

  .content-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    border-radius: inherit; /* Match parent's border-radius */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  div:hover .content-overlay {
    opacity: 1; /* Overlay fades in on hover */
  }

  .content-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  div:hover .content-text {
    opacity: 1; /* Text fades in on hover */
  }
`;
