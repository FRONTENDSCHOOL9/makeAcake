# 🍰 메이크어케이크 | makeAcake 🍰

<div>
    <img src=""/>
</div>

<div align="center">

<b>[메이크어케이크 바로가기](https://makemycake.netlify.app/)🔗</b> <br>

</div>

<br>

## \*️⃣목차

1. [프로젝트 소개](#project)
2. [팀원 소개 및 역할](#team)
3. [기술 스택 및 개발 환경](#technology-stack)
4. [기능 및 구조](#function-and-structure)
5. [핵심 코드](#important-code)
6. [협업 방식](#cooperation)
7. [프로젝트 소감](#opinion)

<br>

## <span id="project">1. 📝프로젝트 소개</span>

> 🍰 **About 메이크어케이크**

<br>
<b>'메이크어케이크'</b>는 복잡했던 주문제작 케이크 탐색을 쉽게 할 수 있는 서비스입니다. 사용자들이 기존에 여러 사이트에 흩어져 있던 주문제작 케이크 관련 정보를 한눈에 모아볼 수 있고, 주문까지 이어질 수 있도록 도와주는 플랫폼입니다.<br>

### 주요기능

- 탐색 페이지에서 여러 가게의 주문제작 케이크를 찾아보고, 필터를 통해 편리하게 탐색할 수 있습니다.
- 해당 업체의 공지사항, 가격정보, 리뷰 등을 한눈에 모아 볼 수 있습니다.
- 마음에 드는 케이크의 예약 주문서를 제출할 수 있습니다.

<br>

## <span id="team">2. 😀팀원 소개</span>

<div align="center">

| 이미지 | 이미지 | 이미지 |
| :----: | :----: | :----: |

| ![👩🏻‍💻박가희](https://github.com/
godheezzang) | ![👩🏻‍💻신재훈](https://github.com/happinessPooh) | ![👩🏻‍💻서지원](https://https://github.com/strdxtq) |

</div>
<br />

## <span id="technology-stack">3. ⛏️기술 스택</span>

### 기술 스택

<table>
	<tr>
		<td align="center" width="120px">사용 기술</td>
		<td width="800px">
		<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp
		<img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp
		<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/React_query-FF4154?style=for-the-badge&logo=React-query&logoColor=white"/>&nbsp
		<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=#5A29E4"/>&nbsp
		</td>
	</tr>
  <tr>
		<td align="center" width="120px">패키지</td>
		<td width="800px">
		<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">배포</td>
		<td>
			<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>&nbsp
      <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">컨벤션</td>
		<td>
			<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"/>&nbsp
      <img src="https://img.shields.io/badge/prettier-2D333B?style=for-the-badge&logo=prettier&logoColor=#F7B93E"/>&nbsp
		</td>
	</tr>
	<tr>
		<td align="center">협업</td>
		<td>
			<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp
			<img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
			<img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp
		</td>
	<tr> 
		<td align="center">디자인</td>
		<td>
			<img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp
		</td> 
	</tr> 
</table>

<br>
여기다가
<br>

<br>

## <span id="function-and-structure">4. 🔍기능 및 구조</span>

### 디자인 시스템

#### 전체 UI

#### 디자인 컴포넌트

<br>

### 구현 기능

- 메인 페이지
- 로그인 / 로그아웃
- 회원가입
- 검색
- 에러 페이지

- 케이크 찾기 페이지
- 상품 상세 페이지

  - 예약 페이지

- 마이페이지
  - 예약 내역
  - 찜한 상품
  - 리뷰 관리
  - 정보 수정

#### 메인 페이지

사용자에게 최신 케이크와 인기 케이크를 보여줍니다. 사용자는 더 알아보기를 통해 케이크 찾기 페이지로 이동할 수 있습니다.

#### 케이크 찾기 페이지

주문 가능한 케이크 목록을 보여줍니다. 사용자는 탭을 클릭하여 카테고리별로 케이크를 볼 수 있고, 맛 필터링을 통하여 원하는 맛의 케이크만을 분류할 수 있습니다. 상품을 클릭하면 상품 상세 페이지로 이동합니다.

#### 상품 상세 페이지

해당 가게의 위치와 SNS를 보여줍니다. 케이크 설명 및 가게 공지사항, 맛, 사이즈 표시 등을 모아 볼 수 있습니다. 사용자는 해당 상품을 찜할 수 있습니다. 예약하기 클릭시 예약 폼으로 이동합니다.

#### 예약 페이지

예약하려는 상품의 정보를 상단에 표시합니다. 사용자는 픽업 날짜 및 시간을 선택할 수 있고, 폼에서 사이즈를 선택하고 기타 요청사항을 작성하여 제출할 수 있습니다.

#### 마이 페이지

예약 내역/찜한 상품/리뷰 관리/정보 수정으로 이루어져 있습니다. 예약 내역과 찜한 상품 탭에서는 사용자의 상품 예약 내역 및 찜한 상품 리스트를 보여줍니다. 리뷰 관리 탭에서는 사용자가 구매한 상품의 리스트가 표시되고 리뷰 작성 기능이 활성화됩니다. 정보 수정 탭에서는 사용자의 개인정보 수정이 가능합니다.

|       main        |       회원가입        |       로그인        |
| :---------------: | :-------------------: | :-----------------: |
| ![main](https://) | ![회원가입](https://) | ![로그인](https://) |

|       search        |        browse         |   상세보기 페이지   |
| :-----------------: | :-------------------: | :-----------------: |
| ![search](https://) | ![상세보기](https://) | ![browse](https://) |

|       예약 페이지        |       마이페이지-예약내역        |       마이페이지-찜한 상품        |
| :----------------------: | :------------------------------: | :-------------------------------: |
| ![예약 페이지](https://) | ![마이페이지-예약내역](https://) | ![마이페이지-찜한 상품](https://) |

|       마이페이지-리뷰 관리        |       마이페이지-정보 수정        |     Error page     |
| :-------------------------------: | :-------------------------------: | :----------------: |
| ![마이페이지-리뷰 관리](https://) | ![마이페이지-정보 수정](https://) | ![Error](https://) |

<br>

### 📁폴더 구조

<details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">

```

🍰makeAcake
├─ .env
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc.js
├─ api
│ └─ dbinit
├─ index.html
├─ jsconfig.json
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│ ├─ App.css
│ ├─ App.jsx
│ ├─ assets
│ │ ├─ fonts
│ │ └─ images
│ ├─ components
│ │ ├─ Buttons
│ │ │ ├─ Button.jsx
│ │ │ ├─ LikeButton.jsx
│ │ │ └─ OkButton.jsx
│ │ ├─ Calendar
│ │ │ ├─ AppCalendar.jsx
│ │ │ └─ styles
│ │ │ └─ StyledAppCalendar.js
│ │ ├─ Card
│ │ │ ├─ Card.jsx
│ │ │ └─ styles
│ │ │ └─ CardStyles.js
│ │ ├─ Checkbox
│ │ │ ├─ Checkbox.jsx
│ │ │ └─ styles
│ │ │ └─ StyledCheckbox.js
│ │ ├─ Footer
│ │ │ ├─ Footer.jsx
│ │ │ └─ styles
│ │ │ └─ FooterStyles.js
│ │ ├─ Gnb
│ │ │ ├─ Gnb.jsx
│ │ │ └─ styles
│ │ │ └─ GnbStyled.js
│ │ ├─ Header
│ │ │ ├─ Header.jsx
│ │ │ ├─ Home.jsx
│ │ │ ├─ Menu.jsx
│ │ │ └─ styles
│ │ │ └─ HeaderStyles.js
│ │ ├─ Layout
│ │ │ ├─ MyPageLayout.jsx
│ │ │ └─ RootLayout.jsx
│ │ ├─ LocationSetter
│ │ │ └─ LocationSetter.jsx
│ │ ├─ Review
│ │ │ └─ ReviewForm.jsx
│ │ └─ SearchBox
│ │ ├─ SearchBox.jsx
│ │ └─ style
│ │ └─ SearchBoxStyles.js
│ ├─ fakeData.js
│ ├─ hooks
│ │ ├─ useHandleMenu.js
│ │ ├─ useHandleSearch.js
│ │ └─ useSelection.js
│ ├─ index.css
│ ├─ main.jsx
│ ├─ pages
│ │ ├─ Browse
│ │ │ ├─ Browse.jsx
│ │ │ ├─ components
│ │ │ │ └─ .gitkeep
│ │ │ └─ styles
│ │ │ └─ BrowseStyles.js
│ │ ├─ Detail
│ │ │ ├─ Detail.jsx
│ │ │ └─ styles
│ │ │ └─ DetailStyles.js
│ │ ├─ ErrorPage
│ │ │ └─ ErrorPage.jsx
│ │ ├─ Login
│ │ │ ├─ Login.jsx
│ │ │ └─ styles
│ │ │ └─ LoginStyles.js
│ │ ├─ Main
│ │ │ ├─ Main.jsx
│ │ │ ├─ MainSection.jsx
│ │ │ └─ styles
│ │ │ └─ MainStyles.js
│ │ ├─ MyPage
│ │ │ ├─ MyInfo.jsx
│ │ │ ├─ MyPage.jsx
│ │ │ ├─ MyReserve.jsx
│ │ │ ├─ MyReview.jsx
│ │ │ ├─ MyWish.jsx
│ │ │ └─ styles
│ │ │ └─ MyPageStyles.js
│ │ ├─ Reservation
│ │ │ ├─ GenerateTimeTable.jsx
│ │ │ ├─ Reservation.jsx
│ │ │ └─ styles
│ │ │ ├─ GenerateTimeTableStyles.js
│ │ │ └─ ReservationStyles.js
│ │ ├─ Search
│ │ │ └─ styles
│ │ └─ SignUp
│ │ ├─ SignUp.jsx
│ │ └─ styles
│ │ └─ SignUpStyles.js
│ ├─ query
│ │ ├─ .gitkeep
│ │ └─ useCustomAxios.mjs
│ ├─ recoil
│ │ └─ atoms.js
│ ├─ routesConfig.jsx
│ ├─ styles
│ │ ├─ GlobalFont.js
│ │ ├─ GlobalStyle.js
│ │ └─ LayoutStyled.js
│ └─ utils
│ ├─ .gitkeep
│ └─ cardLocation.js
└─ vite.config.js


```

</div>
</details>

<br>

<br>

## <span id="important-code">5. ❗핵심 코드</span>

<br>

## <span id="cooperation">6. 👫협업 방식</span>

### notion

![image](https://)

[_노션 링크_](https://www.notion.so/6d19640cf057417f9b1bffe1e2cf22e5)

<br>

### GitHub

**브랜치 관리**

- 각 팀원은 dev 브랜치에서 feature/세부기능으로 브랜치명을 지정하여 기능별로 개별 브랜치를 생성하여 코드를 작성
- 테스트 후 해당 브랜치를 dev로 merge
- dev 브랜치에서 기능 개발이 완료된 feature 브랜치를 병합
- merge가 완료되면 해당 feature 브랜치를 삭제하여 브랜치를 깔끔하게 관리
- 메인 브랜치(main)를 최종 배포 branch로 사용

<br>

### Discord

![image](https://)

- commit 등을 실시간으로 알림 받도록 디스코드를 이용하여 소통

<br>

### 컨벤션

**커밋 메시지: Gitmoji 사용**

🎉 프로젝트 시작<br>
📝 문서 추가/수정<br>
✨ 기능 추가, 삭제, 변경<br>
🐛 버그, 에러 수정<br>
💄 UI/스타일 파일 추가/수정<br>
🚧 진행중인 작업<br>
👔 로직 수정<br>
⚰️ 코드 정리<br>
🔧 설정파일 추가/수정<br>

<br>

## <span id="opinion">7. 💭프로젝트 소감</span>

#### 박가희

ㅇ

#### 신재훈

ㅇ

#### 서지원

ㅇ
