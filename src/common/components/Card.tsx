import React, { FC } from "react";

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`
                    bg-white border-[2px] border-gray-100 rounded-lg p-4
                    ${className}
             `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
