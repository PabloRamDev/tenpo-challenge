// components/IconButton.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  size?: number;
  variant?: 'default';
  className?: string;
}

const variantClasses = {
  default: 'bg-neutral-900 hover:bg-neutral-800 transition-duration-2 text-text-0',
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
        'inline-flex items-center justify-center rounded-md p-2 transition-colors ',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
};
