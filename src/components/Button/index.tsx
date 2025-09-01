import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "medium" | "large";
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
};

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    iconLeft,
    iconRight,
    className = "",
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`btn btn-${variant} btn-${size} ${className}`}
            {...props}
        >
            {iconLeft && <span className="btn-icon-left">{iconLeft}</span>}
            <span>{children}</span>
            {iconRight && <span className="btn-icon-right">{iconRight}</span>}
        </button>
    );
};
