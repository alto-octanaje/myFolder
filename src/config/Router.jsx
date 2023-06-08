import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";

import { Menu } from "../Component/Menu/Menu";
import { NotFound } from "../pages/NotFount/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="jeissonPinzon/" element={<Home />} />
      <Route path="myFolder/" element={<Menu />} />
      <Route path="/" element={<Menu />} />
      **<Route path="*" element={<NotFound />}></Route>**
    </>
  )
);

export default router;
