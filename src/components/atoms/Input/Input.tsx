import { InputHTMLAttributes, ReactNode, useId } from 'react'
import { classNames } from '../../../utils/classNames'
import { ComponentSize, FieldAppearance, SemanticVariant } from '../../../types/shared'
import './Input.css'

export type InputSize = ComponentSize
export type InputVariant = SemanticVariant
export type InputAppearance = FieldAppearance

/**
 * D14: Auto-documentacao
 * As props sao documentadas no proprio contrato para facilitar leitura e manutencao.
 *
 * D02: Tipagem como Contrato
 * As props modelam estados validos do campo e evitam contratos ambiguos.
 *
 * D01: API Previsivel
 * O campo reaproveita nomes semanticos da biblioteca (`size`, `variant`, `appearance`).
 *
 * D03: Fluxo Unidirecional
 * Valor, configuracao e mensagens entram por props; mudancas saem pelo `onChange` nativo.
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Rotulo visivel do campo. */
  label?: ReactNode
  /** Texto de apoio exibido quando nao ha erro. */
  helperText?: ReactNode
  /** Mensagem de erro apresentada quando o campo esta invalido. */
  errorMessage?: ReactNode
  /** Escala visual do campo. */
  size?: InputSize
  /** Variante semantica do estado do campo. */
  variant?: InputVariant
  /** Aparencia estrutural do campo. */
  appearance?: InputAppearance
  /** Conteudo opcional antes do input. */
  startAdornment?: ReactNode
  /** Conteudo opcional depois do input. */
  endAdornment?: ReactNode
  /** Forca visual e semanticamente o estado invalido. */
  invalid?: boolean
}

export const Input = ({
  label = null,
  helperText = null,
  errorMessage = null,
  size = 'md',
  variant = 'neutral',
  appearance = 'outline',
  id = undefined,
  className = '',
  disabled = false,
  startAdornment = null,
  endAdornment = null,
  invalid = false,
  ...props
}: InputProps) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  // D04: Ortogonalidade
  // `appearance`, `variant` e `invalid` coexistem por classes separadas em vez de regras mutuamente exclusivas.
  const hasError = Boolean(invalid || errorMessage)
  const helperId = helperText && !hasError ? `${inputId}-helper` : undefined
  const errorId = hasError && errorMessage ? `${inputId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div
      className={classNames(
        'ui-input',
        `ui-input--${size}`,
        `ui-input--variant-${variant}`,
        `ui-input--appearance-${appearance}`,
        hasError && 'ui-input--invalid',
        disabled && 'ui-input--disabled',
        className
      )}
    >
      {label && (
        // D13: Semantica Estrutural
        // `label` associado com `htmlFor` melhora clique, leitura por tecnologia assistiva e formulario.
        <label className="ui-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="ui-input__control">
        {startAdornment && <span className="ui-input__adornment" aria-hidden="true">{startAdornment}</span>}
        <input
          id={inputId}
          className="ui-input__field"
          disabled={disabled}
          // D12: Interatividade Teclado
          // O elemento nativo `input` oferece foco por Tab e navegacao textual pelo teclado.
          // D08: Desacoplamento Visual
          // O comportamento fica no componente; a aparencia e resolvida por classes CSS externas.
          aria-invalid={hasError ? true : undefined}
          // D03: Fluxo Unidirecional
          // O valor entra por props controladas e sai por callbacks nativos como `onChange`.
          aria-describedby={describedBy}
          {...props}
        />
        {endAdornment && <span className="ui-input__adornment" aria-hidden="true">{endAdornment}</span>}
      </div>
      {helperText && !hasError && (
        <p className="ui-input__helper" id={helperId}>
          {helperText}
        </p>
      )}
      {hasError && errorMessage && (
        // D15: Estados Visuais
        // O estado de erro possui representacao explicita na UI e na documentacao.
        <p className="ui-input__error" id={errorId}>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
