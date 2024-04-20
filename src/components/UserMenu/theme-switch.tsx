import { Menu, useMantineColorScheme, rem } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

const ThemeSwitch = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const isLightMode = colorScheme === "light";

  return (
    <Menu.Item
      leftSection={
        isLightMode ? (
          <IconMoonStars style={{ width: rem(15), height: rem(15) }} />
        ) : (
          <IconSun style={{ width: rem(15), height: rem(15) }} />
        )
      }
      onClick={() => setColorScheme(isLightMode ? "dark" : "light")}
    >
      {isLightMode ? "Dark" : "Light"} Theme
    </Menu.Item>
  );
};

export default ThemeSwitch;
