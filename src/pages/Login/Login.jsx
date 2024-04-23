import {Input, StyledContainer, LogoWrap, Checkbox, SnsWrap, SignUpWrap, KeepLogin, LoginButton, Error, BackIcon } from "./styles/LoginStyles.js"
import { useForm } from 'react-hook-form';
import logo from "@assets/images/logo-big.svg"
import naver from "@assets/images/naver.svg"
import kkt from "@assets/images/kkt.svg"
import google from "@assets/images/google.svg"
import apple from "@assets/images/apple.svg"
import { useLocation, useNavigate } from "react-router";
import useCustomAxios from "@query/useCustomAxios.mjs";
import { useSetRecoilState } from "recoil";
import { memberState } from "@recoil/atoms.js";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const setUser = useSetRecoilState(memberState)
  const handleClickBackBtn = () => {
    /* 데이터 소실 가능성 높으니 recoil / 쿼리 스트링 / 로컬 스토리지 중 하나 정해서 추후에 데이터 보존해야 함 */
    navigate(-1);
  }

  const handleClickRegister = () => {
    navigate("/register")
  }
    
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    values: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('users/login', formData);
      // 사용자 정보 recoil에 저장
      setUser({
        _id: response.data.item._id,
        name: response.data.item.name,
        token: response.data.item.token,
        type: response.data.item.type
      });
      alert(response.data.item.name + '님 로그인 되었습니다.');
      navigate(location.state?.from || '/'); // 메인으로 이동
    } catch (error) {
      // AxiosError(네트워크 에러: response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때: response 있음)
      if (error.response?.data.errors) {
        error.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (error.response?.data.message) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <StyledContainer>
        <BackIcon onClick={handleClickBackBtn}/>
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
          <SignUpWrap>계정이 없으신가요? <button type="button" onClick={handleClickRegister}>회원가입</button></SignUpWrap>
        </div>
      </form>
    </StyledContainer>
    </>
  )
};