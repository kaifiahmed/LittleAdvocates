import React from 'react';
import girl_img from "../assets/startingPage/img/cartoon-girl-with-glasses-book-called-girl_935004-1774-removebg-preview 1.png";
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
var text = require('../assets/context/starting_page/starting');

const StartingPage = () => {
  return (
    <Wrapper>
      <div className='title'>
         <h1><span>Little </span>Advocates</h1>
      </div>
      <div className='img'>
        <img src={girl_img} alt="Cartoon Girl" />
      </div>
      <div className='text_container'>
        <div>
          <p>{text.first}</p>
          <p>{text.second}</p>
          <p>{text.third}</p>
        </div>
        <div>
          <Link to="/home" className="start-button">Start Now</Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default StartingPage;
