import React, { FC } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div className={`max-w-screen-xl w-full mx-auto ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default Container