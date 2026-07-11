import {
    House,
    FolderOpen,
    MessageSquare,
    Settings,
    User,
}
from "lucide-react";
import { title } from "node:process";
import { NavLink } from "react-router-dom";
const menu = [
 {
    title: "Home",
    icon:House,
    path: "/workspace",
},

 {
    title: "workspace",
    icon:FolderOpen,
    path: "/workspace",
},

 {
    title: "projects",
    icon:FolderOpen,
    path: "/projects",
},

 {
    title: "Chat",
    icon:MessageSquare,
    path: "/chat",
},

 {
    title: "Settings",
    icon:Settings,
    path: "/settings",
},
];
