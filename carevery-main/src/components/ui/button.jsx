import React from "react";

const Button = ({ children, className = "", variant = "default", size = "default", asChild, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // if asChild is passed, render children as-is (clone with merged props)
  if (asChild) {
    return React.cloneElement(children, { ...props, className: classes });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export { Button };