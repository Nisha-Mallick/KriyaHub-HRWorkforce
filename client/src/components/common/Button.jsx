import { cn } from '../../utils/cn.js';

const VARIANT_CLASSES = {
  primary: 'bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary-400',
  secondary: 'bg-white text-text-primary border border-border hover:bg-gray-50 focus-visible:ring-primary-300',
  ghost: 'bg-transparent text-text-secondary hover:bg-gray-100 focus-visible:ring-primary-300',
  danger: 'bg-danger text-white hover:bg-red-600 focus-visible:ring-red-300',
  success: 'bg-success text-white hover:bg-green-600 focus-visible:ring-green-300',
};

const SIZE_CLASSES = {
  sm: 'text-xs px-3 py-1.5 gap-1.5',
  md: 'text-sm px-4 py-2 gap-2',
  lg: 'text-base px-5 py-2.5 gap-2',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-150',
        'disabled:opacity-50 disabled:cursor-not-allowed focus-ring',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        fullWidth && 'w-full',
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="h-4 w-4" aria-hidden="true" />
      )}
      {children && <span>{children}</span>}
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
