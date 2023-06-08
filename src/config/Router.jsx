import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// import { Modal } from "../Component/Modal/Modal";
import { Home } from "../pages/Home/Home";
import { MyTools } from "../pages/myTools/myTools";
import { Menu } from "../Component/Menu/Menu";
import {NotFound} from "../pages/NotFount/NotFound"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/modal" element={<Modal />}/> */}
      <Route path="jeissonMaterial/" element={<Home />}>
        {/* <Route path="/tools" element={<MyTools />} /> */}
        <Route path="jeissonMaterial/" element={<Menu />} />
        <Route path="jeissonMaterial/" element={<Menu />} />
      </Route>
      **<Route path='*' element={<NotFound />}></Route>**
    </>
  )
);

export default router;
