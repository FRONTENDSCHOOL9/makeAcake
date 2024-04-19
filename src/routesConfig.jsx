import RootLayout from '@components/Layout/RootLayout';
import MyPageLayout from "@components/Layout/MyPageLayout";
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Main from '@pages/Main/Main'
import Browse from "@pages/Browse/Browse";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Reservation from "@pages/Reservation/Reservation";
import Login from "@pages/Login/Login"

import Detail from "@pages/Detail/Detail";
import SignUp from '@pages/SignUp/SignUp';
 

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Main />},
      {path: "/products", element: <Browse />}, 
      // Browse 페이지의 탭을 누르면 탭의 id에 따라서 url이 바뀐다. 아마도 /:tabId
      // 컴포넌트 따로 만들지 않을 예정이다. 탭은 단순히 필터링.
      // 그러므로 Detail의 path는 /:tabId가 빠진 /:productId로.
      // Browse 페이지에선 탭을 뜯어서 고쳐야한다.

      {path: "/products/:productId", element: <Detail />},
      {path: "/products/:productId/reservation", element: <Reservation />},
      {
        path: "/mypage", 
        element: <MyPageLayout />, // 마이페이지 레이아웃
        children: [
         /*  
          {index: true, element: < />}, // 예약 내역 (최초 마이페이지)
          {path: "", element: }, // 찜한 상품
          {path: ""...} // 리뷰 관리
          {path: ""...} // 정보 수정
          */

          // 탭에 따라서 MyPage에서 분해된 컴포넌트로 라우팅되어야한다.
        ]
      },
    ]
  }, 
  {path: "/login", element: <Login />},
  {path: "/register", element: <SignUp />}
];

export default routes;