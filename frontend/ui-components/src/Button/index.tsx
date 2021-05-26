import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    size: "small" | "medium" | "large";
};

function Button({ children, className, size = "small" }: Props) {
    return (
        <button type="button" className={`${className} ${size}`}>
            {children}
        </button>
    );
}

export default Button;
