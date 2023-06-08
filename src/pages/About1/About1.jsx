import React from "react";
import style from "./About1.module.css";
import image from "../About/jeisson.jpg";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { DiNodejsSmall } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudio } from "react-icons/si";


export const About1 = () => {
  const arrayImg = [
    "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
    "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
    "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
  ];
  const randomNumber = Math.floor(Math.random() * 4);

  return (
      <section className={style.inMain}>
        <div className={style.container}>
          <div className={style.myHeader} >hoy
          <div className={style.userImgC} >
          <img src={image} alt="not Font" className={style.userImg} />
          </div>
          
          </div>
         
          <div className={style.presentationC}>
            <p className={style.presentation}>
              Hola..! <br /> Soy Jeisson P, <br />
              Full stack develoment{" "}
            </p>
            <p className={style.presentation1}>frond end / back end</p>
            <div className={style.containerL}>
              <div className={style.tittleContainerL}>
                <h2 className={style.tittleL}>sobre me!</h2>
              </div>
              <div className={style.textoContainerL}>
                <p>
                  Soy un desarrollador Full Stack con habilidades en el
                  desarrollo de Front-End utilizando React, Redux, JavaScript,
                  CSS y HTML. Además, cuento con experiencia en el Back-End
                  utilizando Node.js, Express, PostgreSQL y Sequelize. He
                  trabajado en diversos proyectos web utilizando estas
                  herramientas y tecnologías.
                </p>
              </div>
            </div>
            <div className={style.containerCenter}>
              <div className={style.tittleContainerC}>
                <h2 className={style.tittleContainer}>skills</h2>
              </div>
              {/* container div r-l */}
              <div className={style.backfrondC}>
                {/* container l */}
                <div className={style.skillFrond}>
                  <div className={style.tittleContainerL}>
                    <h3 className={style.supTittle}>front-end</h3>
                  </div>
                  <div className={style.skillContainerL}>
                    <p>
                      <FaReact className={style.sizeIcons} />
                      <TbBrandJavascript className={style.sizeIcons} />
                      <TbBrandTypescript className={style.sizeIcons} />
                      <br />
                      <BsFillBootstrapFill className={style.sizeIcons2} />
                      <SiRedux className={style.sizeIcons2} />
                      <BsFiletypeHtml className={style.sizeIcons2} />
                      <DiCss3 className={style.sizeIcons2} />
                    </p>
                  </div>
                </div>
                <div className={style.skillBack}>
                  <div className={style.tittle_ContainerR}>
                    <h3 className={style.supTittle}>Back-end</h3>
                  </div>
                  <div className={style.skill_ContainerR}>
                    <p>
                      <DiNodejsSmall className={style.sizeIcons} />
                      <SiMongodb className={style.sizeIcons} />
                      <GrMysql className={style.sizeIcons} />
                      <br />
                      <AiFillGithub className={style.sizeIcons2} />
                      <SiVisualstudio className={style.sizeIcons2} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*------zone proyectos ------*/}
            <div className={style.containerCenter}>
              <div className={style.tittleContainerC}>
                <h2 className={style.tittleContainer}>Proyectos personales</h2>
              </div>
              {/*  container of left/right   */}
              <div className={style.left_right_containerR}>

                {/*     container-Right tittle  text img   */}
                <div className={style.sideLeft}>
                  <div className={style.tittleContainerL}>
                    <h3 className={style.supTittle}>Reack and Morty</h3>
                  </div>
                  <div className={style.side_ContainerL}>
                    <p>
                      este es mi primer proyecto haciendo la peticion a una api
                    </p>
                  </div>
                </div>
                {/* container right side */}
                <div className={style.sideRight}>
                  <div className={style.side_ContainerR}>
                    <img
                      src={arrayImg[randomNumber]}
                      alt="no fond"
                      className={style.imgProyect}
                    />
                  </div>
                </div>
              </div>

              {/*     container-Right tittle  text img   */}
              <div className={style.left_right_containerL}>
                {/* container right side */}
                <div className={style.sideLeft}>
                  <div className={style.side_ContainerL}>
                    <img
                      src={arrayImg[randomNumber]}
                      alt="no fond"
                      className={style.imgProyect}
                    />
                  </div>
                </div>
                {/* container right side */}
                <div className={style.sideRight}>
                  <div className={style.tittleContainerR}>
                    <h3 className={style.supTittle}>Reack and Morty</h3>
                  </div>
                  <div className={style.side_ContainerR}>
                    <p>
                      este es mi primer proyecto haciendo la peticion a una api
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*     container tittle y text left  */}
            <div className={style.containerR}>
              <div className={style.tittleContainerR}>
                <h2 className={style.tittleR}>titulo</h2>
              </div>
              <div className={style.textoContainerR}>
                <p>
                  texto mas palabras a cen todo esto que ponede hacer para r
                  precentar el curso un poco de sudor{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};
