import React, { useState, createContext, useContext } from "react";

const SelectContext = createContext();

export const Select = ({ children, value, onValueChange }) => (
  <SelectContext.Provider value={{ value, onValueChange }}>
    <div className="relative">{children}</div>
  </SelectContext.Provider>
);

export const SelectTrigger = ({ children, className = "" }) => {
  const { value } = useContext(SelectContext);
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {value || children}
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export const SelectContent = ({ children, className = "" }) => (
  <div className={`absolute top-full left-0 z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg ${className}`}>
    {children}
  </div>
);

export const SelectItem = ({ children, value, className = "" }) => {
  const { value: selected, onValueChange } = useContext(SelectContext);
  return (
    <div
      onClick={() => onValueChange(value)}
      className={`cursor-pointer px-3 py-2 text-sm hover:bg-blue-50 ${selected === value ? "bg-blue-100 font-semibold" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext);
  return value || placeholder;
};