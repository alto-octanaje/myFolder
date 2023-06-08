import React from "react";
import style from "./IconSocial.module.css"
import { social } from "../Menu/data";

export const IconSocial = () => {
  return (
    <>
    <ul className={style.socialIcons}>
      {social.length > 0 &&
        social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} target="noreferer">
                {icon}
              </a>
            </li>
          );
        })}
    </ul>
    </>
  );
};
