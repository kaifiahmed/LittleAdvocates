import styled from "styled-components";

const Wrapper = styled.div`

max-width:430px;
height: 800px;
margin:50px auto;

#container{
   position:fixed;
   top:50px;
   height: 800px;
width: 430px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  margin-left: 30px;
  background: linear-gradient(90deg, #ffc3a0, #f9a8d4);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.card h2 {
  color: #fff;
  font-size: 1.2rem;
  margin-left: 20px;
  flex-grow: 1;
}

`
export default Wrapper