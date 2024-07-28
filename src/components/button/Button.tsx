import styles from "./button.module.scss";
interface ButtonProps {
  image?: any;
  label?: string;
  className?: string;
  onClick?: () => void;
  disabled?: any;
  chevronRight?: any;
  type?: any;
  spinner?: any;
  btnRowReverse?: string;
  image2?: any;
}

const Button = ({
  image,
  label,
  className,
  onClick,
  disabled,
  chevronRight,
  type,
  spinner,
  image2,
  btnRowReverse,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${btnRowReverse} ${styles.button_primary} ${className} `}
      disabled={disabled}
      type={type}
    >
      {image2}
      {label}
      {image}

      {disabled && chevronRight}
      {spinner}
    </button>
  );
};

export default Button;
