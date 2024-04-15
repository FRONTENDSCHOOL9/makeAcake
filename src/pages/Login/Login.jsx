import {Input, StyledContainer, LogoWrap, Checkbox, SnsWrap, SignUpWrap, KeepLogin, LoginButton, ErrorWrap } from "./styles/LoginStyles.js"
import React, { useEffect, useState } from 'react'
import logo from "@assets/images/logo-big.svg"
import naver from "@assets/images/naver.svg"
import kkt from "@assets/images/kkt.svg"
import google from "@assets/images/google.svg"
import apple from "@assets/images/apple.svg"


function Login() {
  
  return (
    <div>
      <StyledContainer>
        <LogoWrap>
          <img src={logo} alt="메이크어케이크" />
        </LogoWrap>
      <form>
        <div>
          <Input type="email" id="email" className="email" placeholder="이메일을 입력하세요." required/>
          <ErrorWrap>올바른 이메일 주소를 입력해주세요.</ErrorWrap>
        </div>
        <div>
          <Input type="password" id="password" className="password" placeholder="비밀번호를 입력하세요."/>
          <ErrorWrap>비밀번호가 맞지 않습니다.</ErrorWrap>
        </div>
        <KeepLogin>
          <Checkbox type="checkbox" id="checkbox"/>
          <p>로그인 상태 유지</p>
        </KeepLogin>
        <LoginButton>로그인</LoginButton>
        <div>
          <SnsWrap>
            <div>
              <p>SNS 계정으로 로그인</p>
            </div>
            <ul>
              <img src={naver} alt="네이버" />
              <img src={kkt} alt="카카오톡" />
              <img src={google} alt="구글" />
              <img src={apple} alt="애플" />
            </ul>
          </SnsWrap>
        </div>
        <div>
          <SignUpWrap>계정이 없으신가요? <p>회원가입</p></SignUpWrap>
        </div>
      </form>
    </StyledContainer>
  </div>
  )
};

export default Login;