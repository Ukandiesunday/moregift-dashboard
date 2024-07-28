import { FaEye, FaEyeSlash } from "react-icons/fa6";
import styles from "./input.module.scss";

export interface InputProps {
  label?: string;
  type: string;

  iconButton?: any;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  register?: any;
}

const Input = ({
  register,
  label,
  type,

  iconButton,
  placeholder,
  errorMessage,
  isError,
}: InputProps) => {
  return (
    <div className={styles.item}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.inputContainer}>
        <input id={label} type={type} placeholder={placeholder} {...register} />
        <div className={styles.eyeIcon}>{iconButton}</div>
      </div>
      {isError && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
