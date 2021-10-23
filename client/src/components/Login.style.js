import styled from "styled-components";

export const LoginModalView = styled.div.attrs((props) => ({
  role: "dialog"
}))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  width: 335px;
  height: 360px;

  > div.clost.btn {
    margin-top: 15px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
`;

export const ModalInsideContainer = styled.div`

`

export const Title = styled.div`
  font-size: 30px;
  color: #ffad4f;
  font-family: 'mikado';
`;

export const TitleDiv = styled.div`
  border-bottom: solid 5px #ffad4f;
  font-family: 'Mikado';
  font-size: 30px;
  color: #ffad4f;
  width: 300px;
  padding-bottom: 5px;
  text-align: center;
`

export const Id_text = styled.div`
  font-size: 23px;
  color: #ffad4f;
  padding: 10px 0 2px;
  font-family: 'Mikado';
`;

export const Pw_text = styled.div`
  font-size: 25px;
  color: #ffad4f;
  padding: 10px 0 2px;
  font-family: 'Mikado';
`;

export const LoginModalContainer = styled.div`
  height: 15rem;
`;

export const LoginModalBtn = styled.button.attrs({type: 'button'})`
  margin-top: 7.5em;
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

export const LoginBtn = styled.button.attrs({ type: "submit"})`
  background-color: #ffad4f;
  font-size: 20px;
  border: none;
  padding:12px;
  width: 288px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Mikado';
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

export const Validation_Check = styled.div`
  color:red;
  padding-top: 5px;
`


export const Id_Input = styled.input.attrs({ type: 'text' })`
  font-size: 17px;
  width: 288px;
  height: 2.1em;
  outline: none;
  cursor: pointer;
  border: solid 1px #dadada;
  
  &:focus {
    outline: 1px solid #ffad4f;
    border:hidden;
  }
`
export const Pw_Input = styled.input.attrs({ type: 'password' })`
  width: 288px;
  height: 2.2em;
  outline: none;
  padding: 0px 25px 0px 0px;
  border: solid 1px #dadada;
  cursor:pointer;

  &:focus {
    outline: 1px solid #ffad4f;
    border:hidden;
  }
`
export const CloseBtn = styled.span`
  border-radius: 50px;
  margin: 20px 0 0 300px;
  cursor: pointer;
  background-color: #ffad4f;

  &:hover {
  box-shadow: gray 2px 2px 2px;
}
`


