import styled from "styled-components";

export const Wraper = styled.div`
     display:flex;
     flex-direction:column;
     gap:10px;

     div{
       height:20vh;
       border-radius:10px;
       width:98%;
       margin:10px auto;
     }

     .first_game{
      //   width:90%;
        background-color:teal;
        border-radius:10px 10% 5% 100% / 10px 10% 31% 32% 
     }

     .second_game{
      background-color:yellow;
      border-radius:0% 95% 4% 13% / 2% 48% 19% 7% 
     }

     .third_game{
      background-color:green;
      border-radius:10px 10% 5% 100% / 10px 10% 31% 32% 
     }

     .forth_game{
      background-color:blue;
      border-radius:0% 95% 4% 13% / 2% 48% 19% 7% 

     }

`