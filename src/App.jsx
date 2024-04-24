import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RecoilRoot} from "recoil";
import "./App.css";

import routes from "./routesConfig.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

function App() {
  return (
    < QueryClientProvider client={ queryClient } >
      <RecoilRoot >
        <RouterProvider router={router} />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen = {false} />
    </QueryClientProvider>

  )
}

export default App;