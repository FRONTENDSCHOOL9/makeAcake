import { MyInfoContainer } from "./styles/MyInfoStyles.js";



function MyInfo () {
  return (
    <MyInfoContainer>
      <h1 className="title">계정 정보</h1>
      <div className="control">
        <div className="control-row"><label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" placeholder ="abc111@naver.com" disabled/></div>
        <div className="control-row"><label htmlFor="email">비밀번호 변경</label>
        <input type="email" id="email" name="email" placeholder ="********" /></div>
        <div className="control-row"><label htmlFor="email">비밀번호 재확인</label>
        <input type="email" id="email" name="email" placeholder ="********" /></div>
        <div className="control-row"><label htmlFor="email">닉네임</label>
        <input type="email" id="email" name="email" placeholder ="" /></div>
      
      <div className="control-row">
        <label htmlFor="email">지역</label>
        <input type="email" id="email" name="email" placeholder ="" />
        <button type="button">주소 찾기</button>
      </div>
      <div className="control-row">
        <label htmlFor="email">연락처</label>
        <input type="email" id="email" name="email" placeholder ="" />
        <button type="button">인증</button>
      </div>
      </div>
      <button className="button" type="button">확인</button>
    </MyInfoContainer>
  )
}


export default MyInfo;