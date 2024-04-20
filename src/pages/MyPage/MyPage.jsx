import noneRequest from "../../assets/images/noneRequest2.png";
import passwordcheck from "../../assets/images/passwordcheck.svg";
import { useState, useEffect, Fragment } from "react";

import { StyledLayout, StyledContainer } from "@styles/LayoutStyled";

import Card from "@components/Card/Card.jsx";
import ReviewForm from "@components/Review/ReviewForm.jsx";

import fakeData from "../../fakeData.js"
import {InfoWrap, Input, FormWrap, Form, } from "./styles/MyPageStyles.js";
import OkButton from "@components/Buttons/OkButton";
import axios from 'axios';


export default function MyPage() {    
    const [cakes, setCakes] = useState([]);
    const [toggleStates, setToggleStates] = useState({});
    const [lastClickedId, setLastClickedId] = useState(null);

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);

    /* 가라데이터 */
    /* 예약 데이터 */
    useEffect(() => {
        setCakes(fakeData);

        const initialToggleStates = fakeData.reduce((acc, cake) => {
          acc[cake.id] = false;
          return acc;
        }, {});
        setToggleStates(initialToggleStates);
    }, [])

    function handleCardClick(id, category) {
      if(category === "review") {
        setToggleStates(prev => {
          const newStates = {...prev};

          if(lastClickedId !== null && lastClickedId !== id) {
            newStates[lastClickedId] = false;
          }

          newStates[id] = !prev[id];
          return newStates;
        });

        setLastClickedId(id);
      }
    }

    function handlePasswordInput(e) {
      setPassword(e.target.value);
  }
const handlePasswordCheck = async () => {
  try {
    const response = await axios.post('https://market-lion.koyeb.app/api/users/login', {password});
    if (password===response.data.item.password){
      setPasswordCheck(true)
    } else {
      setPasswordCheck(false)
      alert("비밀번호가 일치하지 않습니다.")
    }
   } catch (error) {
    console.error(error)
  }
};

    function renderContent(category){
      return (
        <StyledContainer>
        {cakes.length === 0 ? (
            <img src={noneRequest} alt="None Request" />
            ) : cakes.map(cake => (
              <Fragment key = {cake.id}>
                <Card cake={cake} location={category} onClick={() => handleCardClick(cake.id, category)}/>
                {category === "review" && toggleStates[cake.id] && <ReviewForm cake={cake} />}
              </Fragment> 
            )
         )}
         {category === "info" && (     
          <>
           { !passwordCheck ?( 
          <InfoWrap>
            <div>
              <img src={passwordcheck} alt="None Request" />
              <h3>비밀번호 확인이 필요한 서비스입니다.</h3>
              <p>정보 보호를 위해 비밀번호를 입력해 주세요.</p>
              <input type="password" id="password" className="password" placeholder="비밀번호를 입력하세요." onChange={handlePasswordInput}/>
              <OkButton onClick={handlePasswordCheck}>확인</OkButton>
            </div>
          </InfoWrap>
        ):(
          <FormWrap>
            <h3>계정 정보</h3>
            <Form>
              <label htmlFor="type">유저 타입</label>
              <Input type="text" id="type" name="type" placeholder="" disabled />
              <label htmlFor="email">이메일</label>
              <Input type="email" id="email" name="email" placeholder="" disabled />
              <label htmlFor="pwdchange">비밀번호 변경</label>
              <Input type="password" id="pwdchange" name="pwdchange" placeholder="" />
              <label htmlFor="pwdcheck">비밀번호 재확인</label>
              <Input type="password" id="pwdcheck" name="pwdcheck" placeholder="" />
              <label htmlFor="nickname">닉네임</label>
              <Input type="text" id="nickname" name="nickname" placeholder="" />
              <label htmlFor="location">지역</label>
              <Input type="text" id="location" name="location" placeholder="" /><OkButton>주소 찾기</OkButton>
              <label htmlFor="phone">연락처</label>
              <Input type="number" id="phone" name="phone" placeholder="" />
              <OkButton>확인</OkButton>
            </Form>
          </FormWrap>
        )} 
          </> 
        
        )}
        </StyledContainer>
      )
    }

    return (
        <StyledLayout>
            {renderContent(selectedCategory)}
        </StyledLayout>
    )
}