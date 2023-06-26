import { FC } from "react";
import { IconType, IconBaseProps } from "react-icons";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  StartIcon?: IconType;
  StartIconProps?: IconBaseProps;
  EndIcon?: IconType;
  EndIconProps?: IconBaseProps;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  size = "lg",
  className = "",
  StartIcon,
  StartIconProps = {},
  EndIcon,
  EndIconProps = {},
  ...props
}) => {
  const sizeClass =
    size === "sm"
      ? "py-2 px-4 rounded-full text-sm"
      : size === "md"
        ? "py-[.7rem] px-6 rounded-full text-[1rem]"
        : size === "lg"
          ? "py-3 px-6 rounded-full"
          : "";
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  const ifIcon_class = StartIcon || EndIcon ? "flex gap-2 items-center" : "";

  return (
    <button
      className={`
                bg-primary-main text-white font-medium hover:bg-primary-dark
                ${sizeClass}
                ${className}
                ${disabledClass}
                ${ifIcon_class}
            `}
      {...props}
    >
      {StartIcon ? <StartIcon {...StartIconProps} /> : null} 
      {children} 
      {EndIcon ? <EndIcon {...EndIconProps} /> : null}
    </button>
  );
};

export default CustomButton;
