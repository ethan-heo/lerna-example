import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

function Button({ children, className }: Props) {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}

export default Button;
