import React, { FC } from "react";

interface NotificationBadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    count: number;
    children: React.ReactNode;
}
const NotificationBadge: FC<NotificationBadgeProps> = ({
    count,
    children,
    className='',
    ...props
}) => {
    return (
        <button className={`relative ${className}`} {...props}>
            {children}
            <span className="w-[20px] h-[20px] -top-2 -right-2 flex justify-center items-center rounded-full absolute bg-primary-main text-white text-[10px]">{count}</span>
        </button>
    )
}

export default NotificationBadge