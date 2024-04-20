import RootLayout from '@components/Layout/RootLayout';
import MyPageLayout from '@components/Layout/MyPageLayout';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Main from '@pages/Main/Main'
import Browse from "@pages/Browse/Browse";
import Reservation from "@pages/Reservation/Reservation";
import Login from "@pages/Login/Login"
import MyReserve from "@pages/MyPage/MyReserve";
import MyWish from "@pages/MyPage/MyWish";
import MyReview from "@pages/MyPage/MyReview";
import MyInfo from "@pages/MyPage/MyInfo";

import Detail from "@pages/Detail/Detail";
import SignUp from '@pages/SignUp/SignUp';

import { Navigate } from 'react-router';

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Main />},
      {path: "/products", element: <Browse />}, 
      {path: "/products/:productId", element: <Detail />},
      {path: "/products/:productId/reservation", element: <Reservation />},
      {
        path: "/mypage", 
        element: <MyPageLayout />,
        children: [
          {index: true, element: <Navigate to="/mypage/reserve" replace/>},
          {path: "/mypage/reserve", element: <MyReserve/>},
          {path: "/mypage/wish", element: <MyWish/>},
          {path: "/mypage/review", element: <MyReview/>},
          {path: "/mypage/info", element: <MyInfo/>},
        ]
      },
    ]
  }, 
  {path: "/login", element: <Login />},
  {path: "/register", element: <SignUp />}
];

export default routes;