import { HTMLMotionProps } from "framer-motion";
import { ThemeTypes } from "../../core/types";

interface ButtonProps extends HTMLMotionProps<"button"> {
  theme: ThemeTypes;
  variant?: "solid";
  size?: "sm" | "md" | "lg";
  label: string;
  loading: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default ButtonProps;
