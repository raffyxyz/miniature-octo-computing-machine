import { Icon, IconProps } from "@tabler/icons-react";
import React from "react";

export interface NavTypes {
  link: string;
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<Icon>
  >;
}
