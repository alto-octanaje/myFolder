import React from "react";
import {
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/tools",
    text: "tools",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 2,
    url: "http://wa.me/+573004387218?text=Hello jeisson",
    icon: <AiOutlineWhatsApp />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/jeisson-pinzon-viquez-a45972261/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/alto-octanaje",
    icon: <AiOutlineGithub />,
  },
  {
    id: 5,
    url: "mailto:jeissonolwen@gmail.com",
    icon: <MdOutgoingMail />,
  },
];
