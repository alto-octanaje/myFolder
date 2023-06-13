import React from "react";
import style from "./ZoneProyect.module.css";
import { myProyects } from "../../DataProyects";
import { ButtonImg } from "./ButtonImg";

export const ZoneProyect = () => {
  return (
    //  ------zone proyectos ------
    <div className={style.containerCenter}>
      <div className={style.tittleContainerC}>
        <h2 className={style.tittleContainer}>Proyectos personales</h2>
      </div>
      {myProyects.length > 0 &&
        myProyects.map((e, i) => {
          if (i % 2 === 0) {
            return (
              // /*  container of left/right   */

              <div key={i} className={style.left_right_containerR}>
                {/*     container-Right tittle  text img   */}
                <div className={style.sideLeft}>
                  <div className={style.tittleContainerL}>
                    <h3 className={style.supTittle}>{e.tittle}</h3>
                  </div>
                  <div className={style.side_ContainerL}>
                    <p>{e.description}</p>
                  </div>
                </div>
                {/* container right side */}
                <div className={style.sideRight}>
                  <div className={style.side_ContainerR}>
                    <ButtonImg image={e.image} />
                  </div>
                </div>
              </div>
            );
          }
          if (i % 2 !== 0) {
            return (
              // /*     container-Right tittle  text img   */
              <div key={i} className={style.left_right_containerL}>
                {/* container right side */}
                <div className={style.sideLeft}>
                  <div className={style.side_ContainerL}>
                    <ButtonImg image={e.image} />
                  </div> 
                </div>
                {/* container right side */}
                <div className={style.sideRight}>
                  <div className={style.tittleContainerR}>
                    <h3 className={style.supTittle}>{e.tittle}</h3>
                  </div>
                  <div className={style.side_ContainerR}>
                    <p>{e.description}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};
