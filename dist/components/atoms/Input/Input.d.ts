import { InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize, FieldAppearance, SemanticVariant } from '../../../types/shared';

export type InputSize = ComponentSize;
export type InputVariant = SemanticVariant;
export type InputAppearance = FieldAppearance;
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
    label?: ReactNode;
    /** Texto de apoio exibido quando nao ha erro. */
    helperText?: ReactNode;
    /** Mensagem de erro apresentada quando o campo esta invalido. */
    errorMessage?: ReactNode;
    /** Escala visual do campo. */
    size?: InputSize;
    /** Variante semantica do estado do campo. */
    variant?: InputVariant;
    /** Aparencia estrutural do campo. */
    appearance?: InputAppearance;
    /** Conteudo opcional antes do input. */
    startAdornment?: ReactNode;
    /** Conteudo opcional depois do input. */
    endAdornment?: ReactNode;
    /** Forca visual e semanticamente o estado invalido. */
    invalid?: boolean;
}
export declare const Input: ({ label, helperText, errorMessage, size, variant, appearance, id, className, disabled, startAdornment, endAdornment, invalid, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Input.d.ts.map