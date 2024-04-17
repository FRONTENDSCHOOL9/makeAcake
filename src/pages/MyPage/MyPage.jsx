import noneRequest from "../../assets/images/noneRequest2.png";
import passwordcheck from "../../assets/images/passwordcheck.svg";
import { useState, useEffect, Fragment } from "react";

import { StyledLayout, StyledContainer } from "@styles/LayoutStyled";

import Gnb from "../../components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";
import ReviewForm from "@components/Review/ReviewForm.jsx";

import {InfoWrap, Input, FormWrap, Form, } from "./styles/MyPageStyles.js";
import OkButton from "@components/Buttons/OkButton";
import axios from 'axios';


export default function MyPage() {
    const categories = [
        {name: "예약 내역", type: "reserve", },
        {name: "찜한 상품", type: "wish",  },
        {name: "리뷰 관리", type: "review", },
        {name: "정보 수정", type: "info", },
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0].type);
    const [cakes, setCakes] = useState([]);
    const [toggleStates, setToggleStates] = useState({});

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);

    /* 가라데이터 */
    /* 예약 데이터 */
    useEffect(() => {
        const fakeReservationData = [
            {
              id: 1,
              name: "녹차케이크",
              price: "48000",
              address:"서울특별시 강남구 역삼동",
              enrollDate: "2024-04-12 17:48",
            },
            {
              id: 2,
              name: "딸기케이크",
              price: "50000",
              address:"경기도 수원시 영통구 망포동",
              enrollDate: "2024-04-10 12:35",
            },
            {
              id: 3,
              name: "초코케이크",
              price: "52000",
              address:"부산광역시 해운대구 우동",
              enrollDate: "2024-04-08 08:55",
            },
        ];
        setCakes(fakeReservationData);

        const initialToggleStates = fakeReservationData.reduce((acc, cake) => {
          acc[cake.id] = false;
          return acc;
        }, {});
        setToggleStates(initialToggleStates);
    }, [])

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    function handleCardClick(id, category) {
      if(category === "review") {
        setToggleStates(prev => ({
          ...prev,
          [id]: !prev[id]
        }));
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
            <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
            {renderContent(selectedCategory)}
        </StyledLayout>
    )
}