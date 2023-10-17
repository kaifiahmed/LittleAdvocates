import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-tems:center;
margin: 0 auto;
width: 50vh;

.title{ 
    margin:60px auto;
    width:60%;
}
h1{   
    width:100%;
    margin:0 auto;
    font-size:32px;
    // font-weight:100;
    text-align :center;
}

span{
    color:#FCC915;
}

.text_container{
    display:flex;
    flex-direction:column;
    align-item:center;
    background-color:#EADCFD;
    border-radius:26px;
    width:95%;
    margin: 0 auto;
}

.text_container>div{
    ower-flow:hidden;
    margin:10px auto;
}
p{
    //  width:95%;
     margin:10px auto;
     text-align: center;
     font-size:18px;
     color:#998F8F;

}

.text_container >:nth-child(2){
    background-color:#007AFF;
    border-radius:12px;
    padding:10px 10px;
    font-size:30px;
    color:white;
    width:90%;
    text-align: center;

}

`
