import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;

  @media (min-width: 412px) {
    width: 50vh;
    height: 90vh;
  }

  .title {
    margin: 60px auto;
    width: 60%;
  }

  h1 {
    width: 100%;
    margin: 0 auto;
    font-size: 32px;
    text-align: center;
  }

  span {
    color: #fcc915;
  }

  .text_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eadcfd;
    border-radius: 26px;
    width: 95%;
    margin: 0 auto;
  }

  .text_container > div {
    overflow: hidden;
    margin: 10px auto;
  }

  p {
    margin: 10px auto;
    text-align: center;
    font-size: 18px;
    color: #998f8f;
  }

  .text_container > :nth-child(2) {
    background-color: #007aff;
    border-radius: 12px;
    padding: 10px 10px;
    font-size: 30px;
    color: white;
    width: 90%;
    text-align: center;
  }

  .start-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .start-button:hover {
    background-color: #0056b3;
  }
`;
