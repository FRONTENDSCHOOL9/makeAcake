import Button from "@components/Button";
import { StyledList, StyledMain } from "@pages/Main/styles/MainStyles";


function Main() {
  return (
    <>
      <StyledMain>
        <h1 className="title">당신만의<br/>케이크를<br/>찾아보세요</h1>
      </StyledMain>
      <div>
        <StyledList>
          <h3>신규 케이크</h3>
          <ul className="card-container">
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
          </ul>
        </StyledList>
        <StyledList>
          <h3>인기 케이크</h3>
          <ul className="card-container">
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
            <li className="card">케이크이미지</li>
          </ul>
        </StyledList>
        <Button>더 알아보기</Button>
      </div>


    </>

  )
}

export default Main;