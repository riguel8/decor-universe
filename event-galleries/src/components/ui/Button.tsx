import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'gold' | 'glass' | 'dark' | 'minimal' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  magnetic?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  gold: `
    bg-gradient-to-r from-champagne-gold via-gold to-champagne-gold
    text-white font-medium
    shadow-[0_4px_20px_-4px_rgba(212,175,55,0.5)]
    hover:shadow-[0_8px_30px_-4px_rgba(212,175,55,0.6)]
    hover:from-gold hover:via-champagne-gold hover:to-gold
    active:shadow-[0_2px_10px_-2px_rgba(212,175,55,0.4)]
  `,
  glass: `
    bg-white/10 backdrop-blur-xl
    border border-white/20
    text-white font-medium
    hover:bg-white/20 hover:border-white/30
    shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]
  `,
  dark: `
    bg-matte-black text-pearl font-medium
    hover:bg-charcoal
    shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
    hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)]
  `,
  minimal: `
    bg-transparent text-charcoal font-medium
    hover:text-champagne-gold
    relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
    after:bg-champagne-gold after:transition-all after:duration-500
    hover:after:w-full
  `,
  outline: `
    bg-transparent border border-champagne-gold/40
    text-champagne-gold font-medium
    hover:bg-champagne-gold hover:text-white hover:border-champagne-gold
    shadow-[0_0_0_0_rgba(212,175,55,0)]
    hover:shadow-[0_4px_20px_-4px_rgba(212,175,55,0.4)]
  `,
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.15em]',
  md: 'px-8 py-3.5 text-[11px] tracking-[0.2em]',
  lg: 'px-10 py-4.5 text-[12px] tracking-[0.25em]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'gold',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      loading = false,
      magnetic = false,
      glow = false,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center gap-2.5
      rounded-full uppercase
      transition-all duration-500 ease-out
      disabled:opacity-50 disabled:cursor-not-allowed
      overflow-hidden
    `;

    const glowStyles = glow
      ? 'before:absolute before:inset-0 before:rounded-full before:bg-champagne-gold/20 before:blur-xl before:scale-150 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500'
      : '';

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { scale: 1.02, y: -2 } : undefined}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${glowStyles}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                {icon}
              </span>
            )}
            <span className="relative z-10">{children}</span>
            {icon && iconPosition === 'right' && (
              <motion.span
                className="transition-transform duration-300"
                whileHover={{ x: 3 }}
              >
                {icon}
              </motion.span>
            )}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
