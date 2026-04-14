import { InputHTMLAttributes, ReactNode, useId } from 'react'
import { classNames } from '../../../utils/classNames'
import './Input.css'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputVariant = 'outline' | 'filled'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode
  helperText?: ReactNode
  errorMessage?: ReactNode
  size?: InputSize
  variant?: InputVariant
}

export const Input = ({
  label,
  helperText,
  errorMessage,
  size = 'md',
  variant = 'outline',
  id,
  className,
  disabled,
  ...props
}: InputProps) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const helperId = helperText && !errorMessage ? `${inputId}-helper` : undefined
  const errorId = errorMessage ? `${inputId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={classNames('ui-input', `ui-input--${size}`, className)}>
      {label && (
        <label className="ui-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={classNames(
          'ui-input__field',
          `ui-input__field--${variant}`,
          Boolean(errorMessage) && 'ui-input__field--error'
        )}
        disabled={disabled}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      {helperText && !errorMessage && (
        <p className="ui-input__helper" id={helperId}>
          {helperText}
        </p>
      )}
      {errorMessage && (
        <p className="ui-input__error" id={errorId}>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
