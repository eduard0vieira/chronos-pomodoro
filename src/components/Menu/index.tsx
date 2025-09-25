import styles from './styles.module.css';

import { useState, useEffect } from 'react';
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
    light: <MoonIcon />
  }

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
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
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para Histórico'
        title='Ir para Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='/'
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Trocar para Modo Claro'
        title='Trocar para Modo Claro'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
