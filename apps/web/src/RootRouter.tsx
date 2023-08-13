import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Home} from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function RootRouter() {
  return <RouterProvider router={router}/>
}