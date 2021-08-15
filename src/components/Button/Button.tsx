import React from "react";
import ButtonProps from "./Button.types";
import StyledButton from "./Button.styled";
import ButtonAnimation from "./Button.anim";

const Button = React.forwardRef(
  ({ variant = "solid", size = "md", label, loading = false, onClick, ...props }: ButtonProps, ref) => {
    return (
      <StyledButton
        data-testid="button"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={ButtonAnimation}
        type="button"
        onClick={onClick}
        {...props}>
        {label}
      </StyledButton>
    );
  },
);

export default Button;
