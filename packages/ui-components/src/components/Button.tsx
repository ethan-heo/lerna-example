import React from "react";

type Props = {
    className?: string;
    children: React.ReactNode;
};
function Button({ className, children }: Props) {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}

export default Button;
