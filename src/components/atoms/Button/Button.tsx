import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'
import './Button.css'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonColor = 'primary' | 'neutral' | 'success' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

export const Button = ({
  children,
  className,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames('ui-button', `ui-button--${variant}`, `ui-button--${color}`, `ui-button--${size}`, className)}
      disabled={disabled}
      {...props}
    >
      <span className="ui-button__content">{children}</span>
    </button>
  )
}
