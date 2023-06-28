import React, { FC } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  as,
  ...props
}) => {
  const Component = as ? as : "div";
  return (
    <Component
      className={`
                px-4 xl:px-0 py-10 max-w-screen-xl w-full mx-auto
                ${className ? className : ""}
            `}
    >
      {children}
    </Component>
  );
};

export default Container;
