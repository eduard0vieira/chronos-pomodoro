import styles from './styles.module.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

type Theme = 'dark' | 'light';

export default function Menu() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    return storedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </Link>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label='Ir para Histórico'
        title='Ir para Histórico'
      >
        <HistoryIcon />
      </Link>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </Link>
      <button
        type="button"
        className={styles.menuLink}
        aria-label='Trocar tema'
        title='Trocar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </button>
    </nav>
  );
}
