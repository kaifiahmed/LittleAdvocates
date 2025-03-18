import React from 'react';
import dailyChallengeImg from "../assets/homepage/img/daily-challenge.png";
import legalLaughsImg from '../assets/homepage/img/legal-laughs.png';
import juriDictionaryImg from '../assets/homepage/img/juri-dictionary.jpeg';
import caseStudiesImg from '../assets/homepage/img/case-studies.png';
import Wrapper from './style';

const App = () => {
  const cardData = [
    {
      title: "Daily Challenge",
      imgSrc: dailyChallengeImg,
    },
    {
      title: "Legal Laughs",
      imgSrc: legalLaughsImg,
    },
    {
      title: "Juri Dictionary",
      imgSrc: juriDictionaryImg,
    },
    {
      title: "Case Studies",
      imgSrc: caseStudiesImg,
    },
  ];

  return (
    <Wrapper >
      <div id='container'>
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <img src={card.imgSrc} alt={card.title} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default App;
