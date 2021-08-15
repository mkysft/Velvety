interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: string | "brand";
  variant?: "solid";
  size?: "sm" | "md" | "lg";
  label: string;
  loading: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default ButtonProps;
