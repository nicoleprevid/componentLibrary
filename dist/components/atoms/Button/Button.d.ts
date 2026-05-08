import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ComponentSize, SemanticVariant, SurfaceAppearance } from '../../../types/shared';

export type ButtonVariant = SemanticVariant;
export type ButtonAppearance = SurfaceAppearance;
export type ButtonSize = ComponentSize;
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
    children: ReactNode;
    /** Variante semantica aplicada ao botao. */
    variant?: ButtonVariant;
    /** Aparencia visual independente da variante. */
    appearance?: ButtonAppearance;
    /** Escala visual do componente. */
    size?: ButtonSize;
    /** Elemento opcional renderizado antes do conteudo principal. */
    leadingIcon?: ReactNode;
    /** Elemento opcional renderizado depois do conteudo principal. */
    trailingIcon?: ReactNode;
    /** Exibe estado de carregamento sem alterar a semantica da variante. */
    loading?: boolean;
    /** Alias retrocompativel para `variant`. */
    color?: ButtonVariant;
}
export declare const Button: ({ children, className, variant, appearance, size, type, disabled, leadingIcon, trailingIcon, loading, color, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map