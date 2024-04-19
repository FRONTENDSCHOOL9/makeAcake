import {Input, StyledContainer, LogoWrap, Checkbox, SnsWrap, SignUpWrap, KeepLogin, LoginButton, Error, BackIcon } from "./styles/LoginStyles.js"
import { useForm } from 'react-hook-form';
import logo from "@assets/images/logo-big.svg"
import naver from "@assets/images/naver.svg"
import kkt from "@assets/images/kkt.svg"
import google from "@assets/images/google.svg"
import apple from "@assets/images/apple.svg"
import axios from 'axios';
import { useNavigate } from "react-router";

export default function Login() {

  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate("/");
  }
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
    }
  });

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('https://market-lion.koyeb.app/api/users/login', formData);
      alert(response.data.item.name + '님 로그인에 성공했습니다.');
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <StyledContainer>
        <BackIcon onClick={handleBackBtn}/>
        <LogoWrap>
          <img src={logo} alt="메이크어케이크" />
        </LogoWrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="email" id="email" className="email" placeholder="이메일을 입력하세요."
           {...register('email', {
            required: "이메일을 입력하세요.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "올바른 이메일 주소를 입력해주세요.",
            },})} />
        {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div>
          <Input type="password" id="password" className="password" placeholder="비밀번호를 입력하세요."
           {...register('password', {
            required: "비밀번호를 입력하세요.",
            minLength: {
              value: 8,
              message: "비밀번호 형식에 맞게 입력해 주세요.",
            },})} />
          {errors.password && <Error>{errors.password.message}</Error>}
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
    </>
  )
};