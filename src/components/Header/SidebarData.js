import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Tasks",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "My day",
    path: "/dashboard/today",
    icon: <BiIcons.BiSun />,
    cName: "nav-text",
  },
  {
    title: "Important",
    path: "/dashboard/important",
    icon: <AiIcons.AiOutlineStar />,
    cName: "nav-text",
  },
  {
    title: "Planned",
    path: "/dashboard/planned",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
];
