import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <Link to="/about" className={styles.link}>
          Entenda como funciona a técnica pomodoro
        </Link>
        <span className={styles.github}>
          <span>Chronos Pomodoro ©{new Date().getFullYear()} - feito por</span>
          <a
            className={styles.link}
            href='https://github.com/eduard0vieira'
            target='_blank'
            rel='noopener noreferrer'
          >
            @eduard0vieira
          </a>
        </span>
      </div>
    </footer>
  );
}
