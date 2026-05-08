import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'
import { ComponentSize, SemanticVariant, SurfaceAppearance } from '../../../types/shared'
import './Button.css'

export type ButtonVariant = SemanticVariant
export type ButtonAppearance = SurfaceAppearance
export type ButtonSize = ComponentSize

/**
 * D14: Auto-documentacao
 * Interface documentada no proprio codigo para descrever a finalidade de cada prop.
 *
 * D02: Tipagem como Contrato
 * A API publica evita `any` e restringe valores validos com unions semanticas.
 *
 * D01: API Previsivel
 * Props com nomes estaveis (`variant`, `appearance`, `size`) e defaults deixam o consumo previsivel.
 *
 * D03: Fluxo Unidirecional
 * O componente recebe configuracao por props e expoe eventos pelo contrato nativo de `button`.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** D09: Inversao de Controle. O conteudo visivel do botao e delegado ao consumidor. */
  children: ReactNode
  /** Variante semantica aplicada ao botao. */
  variant?: ButtonVariant
  /** Aparencia visual independente da variante. */
  appearance?: ButtonAppearance
  /** Escala visual do componente. */
  size?: ButtonSize
  /** Elemento opcional renderizado antes do conteudo principal. */
  leadingIcon?: ReactNode
  /** Elemento opcional renderizado depois do conteudo principal. */
  trailingIcon?: ReactNode
  /** Exibe estado de carregamento sem alterar a semantica da variante. */
  loading?: boolean
  /** Alias retrocompativel para `variant`. */
  color?: ButtonVariant
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  appearance = 'solid',
  size = 'md',
  type = 'button',
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  loading = false,
  color = undefined,
  ...props
}: ButtonProps) => {
  // D04: Ortogonalidade
  // `appearance` e `variant` sao aplicadas por classes independentes para nao se anularem.
  const resolvedVariant = color ?? variant
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      className={classNames(
        'ui-button',
        `ui-button--appearance-${appearance}`,
        `ui-button--variant-${resolvedVariant}`,
        `ui-button--${size}`,
        loading && 'ui-button--loading',
        className
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {/* D13: Semantica Estrutural
          O componente usa `<button>` nativo para preservar semantica, foco e teclado por padrao. */}
      {/* D08: Desacoplamento Visual
          A logica define apenas classes; o estilo fica concentrado no CSS do componente. */}
      {/* D12: Interatividade Teclado
          Enter e Space sao suportados nativamente pelo elemento `button`. */}
      {loading && <span className="ui-button__spinner" aria-hidden="true" />}
      {leadingIcon && <span className="ui-button__icon" aria-hidden="true">{leadingIcon}</span>}
      <span className="ui-button__content">{loading ? 'Carregando...' : children}</span>
      {trailingIcon && <span className="ui-button__icon" aria-hidden="true">{trailingIcon}</span>}
    </button>
  )
}
