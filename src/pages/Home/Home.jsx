import React from "react";
import style from "./Home.module.css";
import { About1 } from "../About1/About1";
import { Footer } from "../../Component/Footer/Footer";
import { Menu } from "../../Component/Menu/Menu";




const Home = () => {

  return (
    <main className={style.mainC} >
      <Menu/>
      <About1/>
      <Footer/> 
    </main>
  );
};
export default Home;