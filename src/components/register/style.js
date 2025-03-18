import { styled } from "styled-components";

const Wrapper = styled.div`
    width:40vh;
    height:70vh;
.container{
width:100%;
height:100%;
    }

    .input{
    display:flex;
    width:100%;
    }

  h2{
    color:#773ced;
    margin-bottom:15px;
  }

img{
    width:20px;
    margin:5px 5px;
    padding:5px 5px;
}

input{

    width:100%;
    border:none;
    outline:none;
    font-size:1rem;
    margin : 0px 5px;
    padding:6px 6px;
}

select{

  width: 100%;
  outline: none;
  border: none;
  color: grey;
  font-weight: 500;
}

form{
 display: grid;
  place-items: center; 
  width:100%;
  height:80%;
}

p {
    font-size: 16px;
    margin:10px 10px;
    color:black;
  }

  p a{
    // text-decoration: none;
}

button{
    width:40%;
    margin:10px 90px;
    font-size:1rem;
    background:#773ced;
    color: white;
    border-radius:6px;
    padding:5px 5px;
    
     &:hover {
        cursor: pointer;
    }

`
export default Wrapper