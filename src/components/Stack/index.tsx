import type React from "react";
import type { ReactNode } from "react";

interface StackProps {
    direction?: "row" | "column"; // direção do flex
    justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
    align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    gap?: number | string;
    children: ReactNode;
    className?: string;
}

export const Stack: React.FC<StackProps> = ({
    direction = "column",
    justify = "flex-start",
    align = "stretch",
    gap = 0,
    children,
    className = "",
}) => {
    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                gap: gap,
            }}
        >
            {children}
        </div>
    );
};
