import { HomeIcon, Layers2Icon } from "lucide-react";
import React from "react";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
];

const DesktopSidebar = () => {
  return (
    <div>
      <h1>Hwllo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique
        deleniti veritatis illo nisi cupiditate quis nostrum esse rem libero?
      </p>
    </div>
  );
};

export default DesktopSidebar;
