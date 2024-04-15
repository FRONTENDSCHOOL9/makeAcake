import React, { useState } from 'react';
import { StyledContainer, LogoWrap, Input, SignUpButton, SignUpType, NextButton, CurrentSignUpType, CheckSignUpType } from "./styles/SignUpStyles.js";
import logo from "@assets/images/logo_big.svg";

function SignUp() {
  const [currentSignUpType, setCurrentSignUpType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showCheckSignUpType, setShowCheckSignUpType] = useState(true);
  const signUpType = [
    { name: "판매자로 가입하기", type: "seller" },
    { name: "구매자로 가입하기", type: "user" }
  ];
  const handleSignUpTypeChange = (type) => {
    setCurrentSignUpType(type);
    setShowForm(true);
    setShowCheckSignUpType(false);
  };

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
          <Input type="number" id="phone" name="phone" placeholder="휴대폰 번호" /></label>
          <label htmlFor="tel">
          <Input type="number" id="tel" name="tel" placeholder="유선전화 (선택)" /></label>
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
          <Input type="number" id="phone" name="phone" placeholder="휴대폰 번호" /></label>
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
        <div>
          <LogoWrap>
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
            <SignUpButton>회원가입</SignUpButton>
          </>
        )}
      </StyledContainer>
    </div>
  );
}

export default SignUp;