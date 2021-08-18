import React from "react";
import ButtonProps from "./Button.types";
import StyledButton from "./Button.styled";
import ButtonAnimation from "./Button.anim";

import { generatePalette } from "../../core/colors";

const Button = React.forwardRef(
  (
    {
      variant = "solid",
      size = "md",
      fullwidth = false,
      label,
      loading = false,
      leftIcon,
      rightIcon,
      onClick,
      children,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const palette = generatePalette("rgb(171,20,56)");
    // console.log(palette);

    return (
      <StyledButton
        ref={ref}
        className="btn"
        // Testing
        data-testid="button"
        // Animation
        initial="initial"
        animate="animate"
        exit="exit"
        variants={ButtonAnimation}
        // Styled
        size={size}
        variant={variant}
        // Props
        type="button"
        onClick={onClick}
        {...props}>
        {/* Left Icon */}
        {leftIcon !== null && leftIcon}

        {/* Content || Loader */}
        {loading !== true ? children || label : "Loading"}

        {/* Right Icon */}
        {rightIcon !== null && rightIcon}
      </StyledButton>
    );
  },
);

export default Button;
