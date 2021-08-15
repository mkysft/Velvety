import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid";
    size?: "sm" | "md" | "lg";
    label: string;
    loading: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ variant = "solid", size = "md", label, loading = false, onClick, ...props }: ButtonProps) => {
    return (
        <button type="button" onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export default Button;
