import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

const Tabs = ({ children, value, onValueChange, className = "" }) => {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={`grid w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "" }) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
  >
    {children}
  </div>
);

const TabsTrigger = ({ children, value, className = "" }) => {
  const { value: selected, onValueChange } = useContext(TabsContext);
  const active = selected === value;
  return (
    <button
      onClick={() => onValueChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        active
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-background hover:text-foreground"
      } ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value, className = "" }) => {
  const { value: selected } = useContext(TabsContext);
  return selected === value ? (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  ) : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };