import React from "react";
import { clearMenu, openMenu } from "../../Context/Action/Actions";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes, FaBars } from "react-icons/fa";
import style from "./Menu.module.css";
import { social, links } from "./data";
import { Outlet} from "react-router-dom";
import { IconSocial } from "../IconSocial/IconSocial";

export const Menu = () => {
  const handleMenu = () => {
    dispatch(openMenu());
  };
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const handelMenuOff = () => {
    dispatch(clearMenu());
  };
  return (
    <>
     <article>
        <Outlet />
      </article>
      {!menu ? (
        <button onClick={handleMenu} className={style.bottonMenu}>
          <FaBars />{" "}
        </button>
      ) : (
        <aside
          className={`${
            menu ? `${style.menuBar} ${style.showSidebar}` : style.menuBar
          }`}
        >
          <div>
            <img src={"logo"} className={""} alt="jeisson" />
            <button className={style.closeMenu} onClick={handelMenuOff}>
              <FaTimes />
            </button>
          </div>

          <ul className={style.accessIcons}>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {icon}
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <ul className={style.socialIcons}>
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url} target="noreferer">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul> */}
          <IconSocial/>
        </aside>
      )}

     
    </>
  );
};
