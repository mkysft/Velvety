import React from "react";
import ButtonProps from "./Button.types";
import StyledButton from "./Button.styled";
import ButtonAnimation from "./Button.anim";

const Button = React.forwardRef(
  (
    {
      scheme = "primary",
      variant = "solid",
      size = "md",
      fullwidth = false,
      label = "Button",
      loading = false,
      loadingText = "Loading",
      leftIcon,
      rightIcon,
      onClick,
      children,
      disabled,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
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
        disabled={disabled || loading}
        {...props}>
        {/* Left Icon */}
        {leftIcon !== null && leftIcon}

        {/* Content || Loader */}
        {loading !== true ? children || label : <span>LOADER Placeholder</span>}
        {loading === true && loadingText !== null && loadingText}

        {/* Right Icon */}
        {rightIcon !== null && rightIcon}
      </StyledButton>
    );
  },
);

export default Button;
