import {useState, useRef} from "react";
import styled from "styled-components";

const ReviewFormContainer = styled.form`
  background-color: #D9D9D9;
  padding: 14px 20px;
  border-radius: 5px;
  max-width: 360px;

  & .title {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }

  & .control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;

    & .control-row {
      display: flex;
      justify-content: flex-start;

      & label {
        width: 70px;
        font-weight: 600;
        margin-top: 2px;
      }

      & input {
        border-radius: 8px;
        border: 1px solid #BDBDBD;
        width: 170px; 
        height: 20px;
        padding: 0 5px;
        box-sizing: border-box;
      }

      & input::placeholder {
        font-size: 12px;
      }

      & button {
        width: 60px;
        background-color: #FFF;
        border: 2px solid #000;
        border-radius: 10px;
        font-size: 10px;
        margin-left: 5px;
        padding: 2px;
      }

      & textarea {
        width: 170px;
        height: 39px;
        resize: none;
        border: 1px solid #BDBDBD;
        border-radius: 8px;
        padding: 5px;
        box-sizing: border-box;
      }
    }

    & button {
      width: 80px;
      align-self: center;
      background-color: #FFF;
      border: 2px solid #000;
      border-radius: 10px;
      font-size: 10px;
      margin-left: 5px;
      padding: 2px;
    }
  }
`

function ReviewForm() {

  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  }

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleTextArea = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  const handleSubmit = event => {
    event.preventDefault();

    /* 파일 처리 로직은 아래에 */
  }

  return (
    <ReviewFormContainer onSubmit={handleSubmit}>
      <div className="title">리뷰 작성</div>
      <div className="control">
        <div className="control-row">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" placeholder ="제목을 입력해주세요."/>
        </div>
        <div className="control-row">
          <label>사진 첨부</label>
          <input type="text" placeholder={file ? file.name : "이미지 파일을 첨부해주세요."} readOnly/>
          <input type="file" id="file-upload" onChange={handleFileChange} style={{display: "none"}} ref={fileInputRef} readOnly />
          <button type="button" onClick={handleFileButtonClick}>
            파일 첨부
          </button>
        </div>
        <div className="control-row">
          <label htmlFor="title">리뷰</label>
          <textarea placeholder="리뷰를 작성해주세요." onInput={handleTextArea} style={{ overflowY: 'hidden' }} />
        </div>
        <button type="button">확인</button>
      </div>
    </ReviewFormContainer>
  )
}

export default ReviewForm;