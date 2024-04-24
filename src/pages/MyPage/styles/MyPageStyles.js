import styled from "styled-components";


// export const 
export const InfoWrap = styled.div`
display: flex;
justify-content: center;
text-align: center;
font-size: 0.8rem;
color: #9c9c9c;
& h3 {
  font-size: 1rem;
  color: #000;
}
& input {
  border: none;
  border-bottom: solid 1px #000;
  margin-bottom: 20px;
  margin-top: 20px;
}
& input::placeholder{
  text-align: center;
  font-size: 0.8rem;
}
`;

export const FormWrap = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
& > h3 {
  text-decoration: underline;
  margin-right: auto;
  font-size: 0.9rem;
}
`;

export const Form = styled.form`
display: grid;
grid-template-columns: 80px 1fr;
grid-gap: 8px;
// max-width: 320px;
font-size: 0.8rem;
& label {
width: 100px;
}
& input {
  width: 140px;
  margin-left: 8px;
  border: 1px solid #BDBDBD;
  border-radius: 10px;
}
& input::placeholder {
 color: #717171; 
}
& button {
  margin-top: 50px;
  height: 22px;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
}
}
`

export const Input = styled.input`
margin-left: 10px;
height: 20px;
`;
