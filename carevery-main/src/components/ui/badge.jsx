import React from "react";

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-transparent bg-blue-100 text-blue-800 ${className}`}
  >
    {children}
  </span>
);

export { Badge };