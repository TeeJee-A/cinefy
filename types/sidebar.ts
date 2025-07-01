import {
  IconHome,
  IconUserCircle,
  IconMovie,
  IconDeviceTv,
} from "@tabler/icons-react";

export type MenuItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{
    className?: string;
    stroke?: number;
  }>;
};

export const logedOut: string[] = ["login", "register"];

export const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
    icon: IconHome,
  },
  { name: "Profile", path: "/profile", icon: IconUserCircle },
  { name: "Movies", path: "/movies", icon: IconMovie },
  { name: "TV Shows", path: "/tvshows", icon: IconDeviceTv },
];
