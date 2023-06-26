import React, { FC } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`
                px-4 xl:px-0 py-10 max-w-screen-xl w-full mx-auto
                ${className ? className : ""}
            `}
    >
      {children}
    </div>
  );
};

export default Container;
