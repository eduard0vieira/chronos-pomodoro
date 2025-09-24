import styles from './styles.module.css';

interface DefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    color?: 'green' | 'red';
}

export default function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
