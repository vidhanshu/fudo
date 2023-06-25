import { FC } from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const CustomButton: FC<CustomButtonProps> = ({ children, size = "lg", className, ...props }) => {

    const sizeClass =
        (size === 'sm') ?
            'py-2 px-4 rounded-full text-sm' :
            (size === 'md') ?
                'py-[.7rem] px-6 rounded-full text-[1rem]' :
                (size === 'lg') ?
                    'py-3 px-6 rounded-full' : '';
    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            className={`
                bg-primary-main text-white font-medium hover:bg-primary-dark
                ${sizeClass}
                ${className ? className : ''}
                ${disabledClass}
            `}
            {...props}
        >
            {children}
        </button>
    )
}

export default CustomButton