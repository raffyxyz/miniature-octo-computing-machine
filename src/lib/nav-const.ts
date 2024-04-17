import {
  IconDashboard,
  IconLayoutRows,
  IconUsers,
  IconReport,
  IconSettings,
} from "@tabler/icons-react";

export const headerConfig = { height: 60 };

export const navbarConfig = {
  width: 250,
  breakpoint: "sm",
};

export const clientNav = [
  { link: "/", label: "Dashboard", icon: IconDashboard },
  { link: "/services", label: "Services", icon: IconLayoutRows },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export const adminNav = [
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/services", label: "Services", icon: IconLayoutRows },
  { link: "/clients", label: "Clients", icon: IconUsers },
  { link: "/reports", label: "Reports", icon: IconReport },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export const providerNav = [
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/services", label: "Services", icon: IconLayoutRows },
  { link: "/clients", label: "Clients", icon: IconUsers },
  { link: "/reports", label: "Reports", icon: IconReport },
  { link: "/settings", label: "Settings", icon: IconSettings },
];
