import React from 'react';

function Button({ children, className, size = "small" }) {
    return (React.createElement("button", { type: "button", className: `${className} ${size}` }, children));
}

export { Button };
//# sourceMappingURL=index.esm.js.map
