import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-family: 'mikado';
  margin: 10px;
`;

export const Text = styled.div`
  font-size: 20px;
  color: white;
  margin: 10px 0;
  margin-top: 10px ;
`;

export const SignupQ = styled.div`
  font-size: 15px;
  text-align: middle 1cm;
  color: white;
  margin : 2.5px;
`;

export const LoginModalContainer = styled.div`
  height: 15rem;
  text-align: center;
`;

export const LoginModalBtn = styled.button.attrs({type: 'button'})`
margin-top: 122px;
background: #fffffc;
border: solid 5px #ffad4999;
border-radius: 15px;
height: 55px;
cursor: pointer;
transition: 300ms ease all;
box-shadow: gray 2px 2px 2px;
padding: 10px;
min-width: 100px;
text-align-last: center;
font-family: 'Mikado';
margin-right: 40px;

&:hover {
  box-shadow: gray 6px 6px 6px;
}

&:before,
&:after {
  content: '';
  position: absolute;
  width: 0;
  transition: ease all;
}

&:hover:before,
&:hover:after {
  width: 100%;
  transition: ease all;
}

&:active {
  box-shadow: none;
}
`;

export const LoginBtn = styled.button`
  background-color: #ffad4f;
  text-decoration: none;
  border: solid 2px white;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  box-align: right auto;
  margin: 10px;
  flex: 1 1 auto;
`;

export const SignUp = styled.button`
  background-color: #ffad4f;
  text-decoration: none;
  border: solid 2px white;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  box-align: left auto;
  flex: 1 1 auto;
`;

export const LoginModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const Id_Input = styled.input.attrs({ type: 'text' })`
  margin-left: 3px;
  width: 150px;
  height:2em;
  flex: 1 1 auto;
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  margin: 10px;
  width: 150px;
  height: 2em;
  flex: 1 1 auto;
`

export const LoginModalView = styled.div.attrs((props) => ({
  role: "dialog"
}))`
  border-radius: 10px;
  background-color: #ffad4f;
  width: 350px;
  height: 300px;

  > div.clost.btn {
    margin-top: 15px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;