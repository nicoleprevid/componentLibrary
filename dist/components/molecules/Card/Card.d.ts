import { HTMLAttributes, ReactNode } from 'react';
import { ComponentSize, SemanticVariant } from '../../../types/shared';

export type CardVariant = SemanticVariant;
export type CardSize = Extract<ComponentSize, 'md' | 'lg'>;
/**
 * D14: Auto-documentacao
 * O contrato do card descreve quando usar props simples e quando optar por composicao.
 *
 * D01: API Previsivel
 * O card reutiliza a mesma linguagem de variantes da biblioteca inteira.
 *
 * D10: Composicao Modular
 * O componente oferece tanto props simples quanto subcomponentes para cenarios mais complexos.
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    /** Titulo curto do card para casos simples. */
    title?: ReactNode;
    /** Descricao complementar do card. */
    description?: ReactNode;
    /** Conteudo principal do card. */
    children?: ReactNode;
    /** Area opcional de acoes ou resumo final. */
    footer?: ReactNode;
    /** Variante semantica usada no destaque visual. */
    variant?: CardVariant;
    /** Escala do container. */
    size?: CardSize;
    /** Ativa affordance visual de interacao. */
    interactive?: boolean;
}
export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
}
declare const CardHeader: ({ children, className, ...props }: CardSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const CardBody: ({ children, className, ...props }: CardSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const CardFooter: ({ children, className, ...props }: CardSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const CardTitle: ({ children, className, ...props }: CardTitleProps) => import("react/jsx-runtime").JSX.Element;
declare const CardDescription: ({ children, className, ...props }: CardSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const CardRoot: ({ title, description, children, footer, className, variant, size, interactive, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
type CardComponent = typeof CardRoot & {
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
    Title: typeof CardTitle;
    Description: typeof CardDescription;
};
export declare const Card: CardComponent;
export {};
//# sourceMappingURL=Card.d.ts.map