import styled from "styled-components";


export const TitleDiv = styled.div`
  border-bottom: solid 5px #ffad4f;
  font-family: 'Mikado';
  font-size: 30px;
  color: #ffad4f;
  width: 300px;
  text-align: center;
`

export const Idtext = styled.div`
  font-size: 23px;
  color: #ffad4f;
  padding: 10px 0 2px;
  font-family: 'Mikado';
  margin:-5px 170px 0 0;
  `;

export const Pwtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  padding: 10px 0 2px;
  font-family: 'Mikado';
  margin:-5px 180px 0 0;
  `;

export const PwConfirmtext = styled.div`
  font-size: 25px;
  color: #ffad4f;
  padding: 10px 0 2px;
  font-family: 'Mikado';
  margin:-5px 85px 0 0;
  `;

export const PwNotMatch = styled.div`
  display: fixed;
  color:red;
  padding-top: 5px;
  font-size: 11.5px;
  margin-right: 130px;
`;

export const Id_Validation_Check = styled.div`
  display: fixed;
  color:red;
  padding-top: 5px;
  font-size: 11.5px;
  margin-right: 65px;
`

export const PwValidLenMatch = styled.div`
  display: fixed; 
  color:red;
  padding-top: 5px;
  font-size: 11.5px;
  margin-right: 25px;
`;

export const SignUpModalBtn = styled.a`
  display: block;
  color: #ffad4f;
  cursor: pointer;
  min-width: 20px;
  margin: 10px auto 15px auto;
  font-family: 'twayair';
  `;

export const JoinBtn = styled.button`
  background-color: #ffad4f;
  font-size: 20px;
  border: none;
  padding:12px;
  width: 288px;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  font-family: 'Mikado';
  `;


export const SignUpModalContainer = styled.a`
  height: 15rem;
  text-align: center;
  margin-bottom: 10px;
  `;

export const SignUpModalBackdrop = styled.div`
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
  font-size: 17px;
  width: 288px;
  height: 2.1em;
  outline: none;
  cursor: pointer;
  border: solid 1px #dadada;
  &:focus {
    outline: 1px solid #ffad4f;
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
  }
`

  export const Pw_ReInput = styled.input.attrs({ type: 'password' })`
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
  margin: 1px 0 1px 340px;
  cursor: pointer;
  background-color: #ffad4f;

  &:hover {
  box-shadow: gray 2px 2px 2px;
  border:hidden;
}
`
export const SignUpModalView = styled.div.attrs((props) => ({
    role: "dialog"
  }))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  width: 358px;
  height: 395px;
    
    > div.clost.btn {
        margin-top: 10px;
        cursor: pointer;
    }
    
    > div.desc {
        margin-top: 25px;
        color: #4000c7;
    }
    `;


