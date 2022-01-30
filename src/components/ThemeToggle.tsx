import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { css } from '../../stitches.config';
import IconToggle from '../assets/sol.svg'


const Button = css({
  background: 'transparent',
  border: 0,
  cursor: 'pointer',

  '& img': {
    width: 20,
  }
});

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  return (
    <button onClick={toggleTheme} className={Button()}>
      <img
        src={IconToggle}
        alt="Theme Mode"
      />
    </button>
  );
};
