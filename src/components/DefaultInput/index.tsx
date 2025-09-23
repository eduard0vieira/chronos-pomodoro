interface DefaultInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export default function DefaultInput({ type, ...props }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='input'>task</label>
      <input id='input' type={type} {...props} />
    </>
  );
}
