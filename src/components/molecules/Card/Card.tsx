import { ReactNode, useId } from 'react'
import { classNames } from '../../../utils/classNames'
import './Card.css'

export interface CardProps {
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export const Card = ({ title, description, children, footer, className }: CardProps) => {
  const titleId = useId()

  return (
    <section
      className={classNames('ui-card', className)}
      aria-labelledby={title ? titleId : undefined}
    >
      {(title || description) && (
        <header className="ui-card__header">
          {title && (
            <h3 className="ui-card__title" id={titleId}>
              {title}
            </h3>
          )}
          {description && <p className="ui-card__description">{description}</p>}
        </header>
      )}
      {children && <div className="ui-card__body">{children}</div>}
      {footer && <footer className="ui-card__footer">{footer}</footer>}
    </section>
  )
}
