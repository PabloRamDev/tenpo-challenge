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
  default: 'bg-blue-600 hover:bg-blue-700 text-white',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
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
