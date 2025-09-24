import styles from './styles.module.css';

interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  labelText: string;
}

export default function DefaultInput({
  type,
  labelText,
  id,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
