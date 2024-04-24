import React, { useState } from 'react';
import { StyledContainer, LogoWrap, Input, SignUpButton, SignUpType, NextButton, CurrentSignUpType, CheckSignUpType, BackIcon } from "./styles/SignUpStyles.js";
import logo from "@assets/images/logo_big.svg";
import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();
  const [currentSignUpType, setCurrentSignUpType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showCheckSignUpType, setShowCheckSignUpType] = useState(true);

  const signUpType = [
    { name: "판매자로 가입하기", type: "seller" },
    { name: "구매자로 가입하기", type: "user" }
  ];

  const handleClickBackBtn = () => {
    /* 데이터 소실 가능성 높으니 recoil / 쿼리 스트링 / 로컬 스토리지 중 하나 정해서 추후에 데이터 보존해야 함 */
    navigate(-1);
  }

  const handleSignUpTypeChange = (type) => {
    setCurrentSignUpType(type);
    setShowForm(true);
    setShowCheckSignUpType(false);
  };

  const handleClickLogo = () => {
    navigate("/");
  }

  const handleClickSubmit = () => {
    /* 추후 로직 구현 */
    alert("회원가입이 완료되었습니다")
    navigate("/");
  }

  const renderForm = () => {
    if (currentSignUpType === "seller") {
      return (
        <>
        <form>
          <label htmlFor="email">
          <Input type="email" id="email" name="email" placeholder="이메일" required /></label>
          <label htmlFor="password">
          <Input type="password" id="password" name="" placeholder="비밀번호"/></label>
          <label htmlFor="passwordcheck">
          <Input type="password" id="passwordcheck" name="passwordcheck" placeholder="비밀번호 확인" /></label>
          <label htmlFor="name">
          <Input type="text" id="name" name="name" placeholder="이름" /></label>
          <label htmlFor="shopname">
          <Input type="text" id="shopname" name="shopname" placeholder="상호명" /></label>
          <label htmlFor="openinghours">
          <Input type="text" id="openinghours" name="openinghours" placeholder="영업시간" /></label>
          <label htmlFor="address">
          <Input type="text" id="address" name="address" placeholder="주소" /></label>
          <label htmlFor="addressDetail">
          <Input type="text" id="addressDetail" name="addressDetail" placeholder="상세 주소" /></label>
          <label htmlFor="phone">
          <Input type="text" id="phone" name="phone" placeholder="휴대폰 번호" /></label>
          <label htmlFor="tel">
          <Input type="text" id="tel" name="tel" placeholder="유선전화 (선택)" /></label>
        </form>
        </>
      );
    } else if (currentSignUpType === "user") {
      return (
        <>
        <form>
          <label htmlFor="email">
          <Input type="email" id="email" name="email" placeholder="이메일" required /></label>
          <label htmlFor="password">
          <Input type="password" id="password" name="password" placeholder="비밀번호"/></label>
          <label htmlFor="passwordcheck">
          <Input type="password" id="passwordcheck" name="passwordcheck" placeholder="비밀번호 확인" /></label>
          <label htmlFor="name">
          <Input type="text" id="name" name="name" placeholder="이름" /></label>
          <label htmlFor="nickname">
          <Input type="text" id="nickname" name="nickname" placeholder="닉네임" /></label>
          <label htmlFor="phone">
          <Input type="text" id="phone" name="phone" placeholder="휴대폰 번호" /></label>
        </form>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <StyledContainer>
        <BackIcon onClick={handleClickBackBtn}/>
        <div>
          <LogoWrap onClick = {handleClickLogo}>
            <img src={logo} alt="메이크어케이크" />
          </LogoWrap>
        </div>
        {showCheckSignUpType && (
          <CheckSignUpType>
            가입 유형을 선택해 주세요.
          </CheckSignUpType>
        )}

        {!showForm && signUpType.map(type => (
          <SignUpType key={type.type} onClick={() => handleSignUpTypeChange(type.type)}>
            {type.name}
          </SignUpType>
        ))}
        {!showForm && <NextButton>다음</NextButton>}   
        <div>
          <CurrentSignUpType>
            {signUpType.find(type => type.type === currentSignUpType)?.name} 
          </CurrentSignUpType>
        </div>
        {showForm && (
          <>
            <div>
              {renderForm()}
            </div>
            <SignUpButton onClick={handleClickSubmit}>회원가입</SignUpButton>
          </>
        )}
      </StyledContainer>
    </div>
  );
}

export default SignUp;