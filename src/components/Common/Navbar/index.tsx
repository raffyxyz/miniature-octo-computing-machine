import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLink } from "@mantine/core";

import classes from "./index.module.css";
import { NavTypes } from "@/types";

type NavProps = {
  data: NavTypes[];
};

export function NavbarSimple({ data }: NavProps) {
  const pathname = usePathname();

  const links = data.map((item: NavTypes) => (
    <NavLink
      key={item.link}
      className={classes.navLink}
      component={Link}
      href={item.link}
      label={item.label}
      leftSection={<item.icon stroke={1.5} />}
      active={item.link === pathname}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
