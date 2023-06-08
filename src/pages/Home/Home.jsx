import React from "react";
import style from "./Home.module.css";
import BackButton from "../../Component/tools/BackButton/BackButton"
import { About1 } from "../About1/About1";
import { Footer } from "../../Component/Footer/Footer";
import { Menu } from "../../Component/Menu/Menu";



export const Home = () => {

  return (
    <main className={style.mainC} >
      <div>estoy en home fliz como lombris</div>
      <Menu/>
      <About1/>
      <BackButton/>

      <Footer/> 
    </main>
  );
};
