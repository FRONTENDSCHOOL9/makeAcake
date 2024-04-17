import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";


import routes from "./routesConfig"


const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
