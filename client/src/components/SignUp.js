import React, {useEffect,useState} from "react";
import axios from "axios";

import {useForm} from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import {
  TitleDiv,
  Idtext, 
  Pwtext, 
  PwConfirmtext, 
  SignUpModalContainer,
  SignUpModalView,
  SignUpModalBtn,
  JoinBtn,
  Id_Validation_Check,
  PwNotMatch,
  PwValidLenMatch,
  CloseBtn,
  Id_Input,
  Pw_Input,
  Pw_ReInput,
  SignUpModalBackdrop} from './SignUp.style';

  const SignUp = () => {

    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    
    const {
      register,
      handleSubmit,
      formState: {errors},
      watch
    } = useForm({mode: 'onChange'});

    const onSubmit = (data) => {
      // axios
      // .post(`${process.env.REACT_APP_API_URL}/signup`, {
      //   userId: data.userId,
      //   password: data.password,
      //   email: data.email
      // })
      // .then((res) => {
      //   history.push('/');
      // })
      // .catch((err) => alert('중복된 ID 입니다.'));
    }

    useEffect(() =>{
      setIsVerified(watch('verifyPassword') === watch('password'));
    }, [watch('verifyPassword'), watch('password')]);
    
    const openModalHandler = () => {
      setIsOpen(!isOpen);
    };


    return (
      <SignUpModalContainer onSubmit={handleSubmit(onSubmit)}>
        
        <SignUpModalBtn onClick={openModalHandler}>
        {isOpen === false ? '아직 계정이 없다면?' : '아직 계정이 없다면?'}
        </SignUpModalBtn>
        
        {isOpen === true ? (
          <SignUpModalBackdrop onClick={openModalHandler}>
            <SignUpModalView onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={openModalHandler}>
                &times;
              </CloseBtn>
              <TitleDiv>WHOEVER Sign Up</TitleDiv>
            <Idtext>Whoever ID</Idtext>
            <Id_Input 
              name="userId"
              className="userId"
              {...register('userId', {
                pattern: /^[a-z0-9_-]{4,20}$/
              })}
              required
              />
              {errors.userId && (
                <Id_Validation_Check>
                  * 아이디는 소문자, 숫자 4~20 글자여야 합니다.
                </Id_Validation_Check>
              )}
            <Pwtext>Password</Pwtext>  
              <Pw_Input 
              name="password"
              className="password"
              {...register('password', {
                pattern: /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                required: true
              })}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity(
                  '비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.'
                );
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
            />
              {errors.password && (
                <PwValidLenMatch>
                  * 비밀번호는 8글자 이상, 영문, 숫자 조합이어야 합니다.
                </PwValidLenMatch>
              )}
            <PwConfirmtext>Password Confirm</PwConfirmtext>
              <Pw_ReInput 
              name="verifyPassword"
              className="password"
              {...register('verifyPassword', { required: true })}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity('비밀번호가 일치하지 않습니다.');
              }}
              onInput={(e) => {
                e.target.setCustomValidity('');
              }}
              />
              {!isVerified ? (
                <PwNotMatch>
                  * 비밀번호가 일치하지 않습니다.
                </PwNotMatch>
              ) : ''}
            <JoinBtn>Sign Up</JoinBtn>
            </SignUpModalView>
          </SignUpModalBackdrop>
        ) : null}
      </SignUpModalContainer>
    )
  }

  export default SignUp