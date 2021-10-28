import React, { useState } from 'react';
import {
  TitleDiv,
  LoginModalContainer,
  LoginModalBtn,
  LoginBtn,
  LoginModalBackdrop,
  LoginModalView,
  Id_Input,
  Pw_Input,
  Id_text,
  Pw_text,
  Validation_Check,
  ModalInsideContainer,
  CloseBtn
} from './Login.style';

import SignUp from './SignUp';
import axios from 'axios';

const Login = ({ isLogin, setIsLogin, userInfo, setUserInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.type === 'text') {
      setUserId(e.target.value);
    }
  };

  const loginBtnHandler = () => {
    // axios로 사용 요청을 보낼때  db에 있는 정보에 맞춰서 버튼 실행하는 이벤트 핸들러
    axios
      .post('http://localhost:4000/login', {
        userId: userId,
        password: password
      })
      .then((res) => {
        setUserInfo(res.data.data);
        setIsLogin(true);
        alert(res.data.message);
        openModalHandler();
      })
      .catch((err) => alert('ID와 Password를 확인해 주세요!'));
  };

  return (
    <LoginModalContainer>
      {isLogin ? (
        <LoginModalBtn onClick={openModalHandler}>Logout</LoginModalBtn>
      ) : (
        <LoginModalBtn onClick={openModalHandler}>Login</LoginModalBtn>
      )}
      {isOpen === true ? (
        <LoginModalBackdrop onClick={openModalHandler}>
          <LoginModalView onClick={(e) => e.stopPropagation()}>
            <CloseBtn
              className="fas fa-times-circle"
              onClick={openModalHandler}
            ></CloseBtn>
            <ModalInsideContainer>
              <TitleDiv>WHOEVER login</TitleDiv>
              <Id_text>Whoever ID</Id_text>
              <Id_Input onChange={handleChange} />
              <Pw_text>Password</Pw_text>
              <Pw_Input onChange={handleChange} />
              <LoginBtn onClick={loginBtnHandler}>Login</LoginBtn>
              <SignUp />
            </ModalInsideContainer>
          </LoginModalView>
        </LoginModalBackdrop>
      ) : null}
    </LoginModalContainer>
  );
};

export default Login;
