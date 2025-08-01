import React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

function Container(props: IContainer) {
  const { children, className = "" } = props;
  return (
    <div
      className={`container mx-auto px-4 lg:px-10 max-w-[1368px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
