import React from "react";
declare type Props = {
    children: React.ReactNode;
    className?: string;
    size: "small" | "medium" | "large";
};
declare function Button({ children, className, size }: Props): JSX.Element;
export default Button;
