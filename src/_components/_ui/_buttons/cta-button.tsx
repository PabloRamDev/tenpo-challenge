import clsx from "clsx";
import { ReactNode } from "react";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "primary";
  className?: string;
  children: ReactNode;
}

const variantClasses = {
  default:
    "bg-neutral-900 hover:bg-neutral-800 transition-duration-2 text-text-0",
  secondary:
    "bg-neutral-100 hover:bg-neutral-50 transition-duration-2 text-text-900",
  primary: "bg-primary-400 hover:bg-primary-300 text-text-0 "
};

export const CtaButton = ({
  variant = "default",
  className,
  children,
  ...props
}: CtaButtonProps) => {
  return (
    <button
      className={clsx(
        "font-graphie inline-flex items-center justify-center rounded-md 2xl:p-2 transition-colors text-sm px-1 py-2 min-w-[120px] md:min-w-[200px]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
