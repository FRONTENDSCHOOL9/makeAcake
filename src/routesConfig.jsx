import RootLayout from './RootLayout';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Main from '@pages/Main/Main'
import Browse from "@pages/Browse/Browse";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Reservation from "@pages/Reservation/Reservation";

import Detail from "@pages/Detail/Detail";
 

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
        element: <MyPage />,
        children: [
          /* mypage 임시로 만든 탭 수정 */
          /* {index: true, element: </>},
          {path: "wishlist", element: < />} */
        ]
      },
      // {path: "/login", element: <Login />},
    ]
  }
];

export default routes;