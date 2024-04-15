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
          <Input type="email" id="email" placeholder="이메일" required />
          <Input type="password" id="password" placeholder="비밀번호"/>
          <Input type="password" id="passwordcheck" placeholder="비밀번호 확인" />
          <Input type="text" id="name" placeholder="이름" />
          <Input type="text" id="shopname" placeholder="상호명" />
          <Input type="text" id="openinghours" placeholder="영업시간" />
          <Input type="text" id="address" placeholder="주소" />
          <Input type="text" id="addressDetail" placeholder="상세 주소" />
          <Input type="number" id="phone" placeholder="휴대폰 번호" />
          <Input type="number" id="tel" placeholder="유선전화 (선택)" />
        </>
      );
    } else if (currentSignUpType === "user") {
      return (
        <>
          <Input type="email" id="email" placeholder="이메일" required />
          <Input type="password" id="password" placeholder="비밀번호"/>
          <Input type="password" id="passwordcheck" placeholder="비밀번호 확인" />
          <Input type="text" id="name" placeholder="이름" />
          <Input type="text" id="nickname" placeholder="닉네임" />
          <Input type="number" id="phone" placeholder="휴대폰 번호" />
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
          <form>
            <div>
              {renderForm()}
            </div>
            <SignUpButton>회원가입</SignUpButton>
          </form>
        )}
      </StyledContainer>
    </div>
  );
}

export default SignUp;