import React from 'react'
import { Link } from 'react-router'
import type { LinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps & { as?: 'button' }
type ButtonAsLinkProps = LinkProps & BaseButtonProps & { as: 'link' }

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', size = 'md', className, isLoading } = props

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'

  const variants = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-black focus:ring-[var(--color-primary)]',
    secondary: 'bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-black/5 focus:ring-[var(--color-primary)]'
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5 h-8',
    md: 'text-sm px-4 py-2 h-10',
    lg: 'text-base px-6 py-3 h-12'
  }

  const classes = twMerge(baseStyles, variants[variant], sizes[size], className)

  if (props.as === 'link') {
    const { as: _as, ...linkProps } = props
    return (
      <Link ref={ref as React.ForwardedRef<HTMLAnchorElement>} className={classes} {...linkProps}>
        {props.children}
      </Link>
    )
  }

  const { as: _as, ...buttonProps } = props
  return (
    <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={classes} {...buttonProps}>
      {isLoading ? <span className="mr-2 animate-spin"><i className="ri-loader-4-line"></i></span> : null}
      {props.children}
    </button>
  )
})

Button.displayName = 'Button'
