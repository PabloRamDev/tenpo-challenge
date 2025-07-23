// components/IconButton.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  size?: number;
  variant?: 'default' | 'ghost' | 'outline' | 'danger';
  className?: string;
}

const variantClasses = {
  default: 'bg-primary-900 hover:bg-blue-700 text-text-0',
};

export const IconButton = ({
  icon: Icon,
  size = 20,
  variant = 'default',
  className,
  ...props
} : IconButtonProps ) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
};
