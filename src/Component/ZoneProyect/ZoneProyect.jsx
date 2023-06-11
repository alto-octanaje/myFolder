import React from "react";
import style from "./ZoneProyect.module.css";

export const ZoneProyect = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const myProyects = [
    {
      tittle: "hola1",
      description: "muy buneos dias 1",
      image: [
        "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
        "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
        "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
      ],
    },
    {
      tittle: "hola2",
      description: "muy buneos dias 2",
      image: [
        "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
        "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
        "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
      ],
    },
    {
      tittle: "hola3",
      description: "muy buneos dias 3",
      image: [
        "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
        "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
        "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
      ],
    },
    {
      tittle: "hola4",
      description: "muy buneos dias 4",
      image: [
        "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
        "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
        "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
      ],
    },
    {
      tittle: "hola5",
      description: "muy buneos dias 5",
      image: [
        "https://i.pinimg.com/564x/ae/63/ce/ae63ce200255d866afb01d881b9769fb.jpg",
        "https://i.pinimg.com/564x/09/5c/8f/095c8f53b69cea5fefbbf27249fed453.jpg",
        "https://i.pinimg.com/564x/a3/6c/2c/a36c2c3926e10a91a684e1562ac1f1c8.jpg",
      ],
    },
  ];

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
                    <img
                      src={e.image[randomNumber]}
                      alt="no fond"
                      className={style.imgProyect}
                    />
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
                    <img
                      src={e.image[randomNumber]}
                      alt="no fond"
                      className={style.imgProyect}
                    />
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
          }
          else{ return null}
        })
        }
    </div>
  );
};
