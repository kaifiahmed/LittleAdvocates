import React from 'react'
import girl_img from "../assets/startingPage/img/cartoon-girl-with-glasses-book-called-girl_935004-1774-removebg-preview 1.png"
import { welcome } from '../assets/context/starting_page/starting'
import { Wrapper } from './style'
const StartingPage = () => {
  return (
    <Wrapper>
      <div className='title'>
         <h1>Little Advocates</h1>
      </div>
      <div className='img'><img src={girl_img}></img>
      </div>
      <div className='text_container'>
        <div>{welcome}</div>
        <div>Start Now</div>
      </div>
    </Wrapper>
  )
}

export default StartingPage
