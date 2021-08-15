import React from "react";
import ButtonProps from "./Button.types";

const Button = React.forwardRef(
  ({ variant = "solid", size = "md", label, loading = false, onClick, ...props }: ButtonProps, ref) => {
    return (
      <button data-testid="button" type="button" onClick={onClick} {...props}>
        {label}
      </button>
    );
  },
);

export default Button;
