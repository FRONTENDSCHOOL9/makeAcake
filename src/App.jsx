import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RecoilRoot} from "recoil";
import "./App.css";

import routes from "./routesConfig.jsx";

const router = createBrowserRouter(routes);

function App() {
  return (
    <RecoilRoot >
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App;
