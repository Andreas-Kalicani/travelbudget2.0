import React, {useState} from "react"; 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io"; 
import * as MdIcons from "react-icons/md"; 

export const Sidebar = [
    {
        title: "Home", 
        path: "/", 
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    }, 
    {
        title: "DashBoard", 
        path: "/dashboard", 
        icon: <MdIcons.MdDashboard />,
        cName: "nav-text"
    }, 
    {
        title: "Reports", 
        path: "/reports", 
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    }, 
    {
        title: "Team", 
        path: "/team", 
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    }, 
]
