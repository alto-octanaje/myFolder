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
import {ZoneProyect} from "../../Component/ZoneProyect/ZoneProyect"


export const About1 = () => {

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
            <ZoneProyect />
          </div>
        </div>
      </section>

  );
};
