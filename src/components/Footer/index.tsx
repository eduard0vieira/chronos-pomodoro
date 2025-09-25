import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <a className={styles.link} href='/'>
          Entenda como funciona a técnica pomodoro
        </a>
        <span className={styles.github}>
          <span>Chronos Pomodoro ©{new Date().getFullYear()} - feito por</span>
          <a
            className={styles.link}
            href='https://github.com/eduard0vieira'
            target='_blank'
          >
            @eduard0vieira
          </a>
        </span>
      </div>
    </footer>
  );
}
