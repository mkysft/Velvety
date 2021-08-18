import React from "react";
import { HTMLMotionProps } from "framer-motion";
import { ThemeTypes } from "../../core/types";

interface ButtonProps extends HTMLMotionProps<"button"> {
  scheme?: ThemeTypes;
  variant?: "solid" | "outline" | "icon" | "text";
  size?: "sm" | "md" | "lg";
  label?: string;
  loading?: boolean;
  loadingText?: string;
  fullwidth?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default ButtonProps;
