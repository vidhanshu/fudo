import { FC } from 'react';
interface BadgeTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

const BadgeText: FC<BadgeTextProps> = ({ children, className, ...props }) => {
    return (
        <span className={`
                bg-primary-light text-primary-main font-medium rounded-full px-4 py-3 w-fit
        `}>
            {children}
        </span>
    )
}

export default BadgeText