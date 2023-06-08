import React, { useState } from "react";
import style from "./Footer.module.css"
import { IconSocial } from "../IconSocial/IconSocial";
import { Contacto } from "../Contacto/Contacto";

export const Footer = () => {
  const [showInf,setShowInfo ] =useState(true);

  const handleShowInf=()=>{
    setShowInfo(!showInf)
  }
  return (
    <footer className={style.footer} >
      <div className={style.brand}>
        <h2 >jeisson pinzon</h2>
        <div className={style.buttonSeeInf}><button onClick={handleShowInf} >ver</button></div>
        <div className={style.theInf1}>soy desarrollador wed formandome en elmundo de la tecnologia, capacitándome continuamente para brindar una mejor calidad.</div>
        {showInf &&
            <div className={style.theInf2} >soy desarrollador wed formandome en elmundo de la tecnologia, capacitándome continuamente para brindar una mejor calidad </div>
        }

        <IconSocial/>
      </div>
      <div className={style.summary} >
        <h2 className={style.tittleSummery} >Servicios</h2>
        <ul>
          <li>Desarrollo de aplicaciones wed con React</li>
          <li>Diseñar y aplicar estilos para la interfaz de usuario</li>
          <li>Mantenimiento, corrección de errores agregar nuevas funcionalidades</li>
          <li>Integración con base de datos </li>
          <li>Colaboración estrecha con otros desarrolladores </li>
        </ul>
      </div>
      <Contacto/>
    </footer> 
  );
};
