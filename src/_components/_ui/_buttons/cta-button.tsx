import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  variant?: 'default' | 'secondary';
  className?: string;
  children: ReactNode
}

const variantClasses = {
  default: 'bg-neutral-900 hover:bg-neutral-800 transition-duration-2 text-text-0',
  secondary: "bg-neutral-0 hover:bg-neutral-800 transition-duration-2 text-text-900"
};

export const CtaButton = ({

  size = 20,
  variant = 'default',
  className,
  children,
  ...props
} : CtaButtonProps ) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md p-2 transition-colors ',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
