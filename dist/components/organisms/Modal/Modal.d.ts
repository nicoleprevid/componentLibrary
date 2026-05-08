import { HTMLAttributes, ReactNode } from 'react';

/**
 * D14: Auto-documentacao
 * O contrato descreve entradas, areas de composicao e a saida principal do componente.
 *
 * D03: Fluxo Unidirecional
 * O modal recebe seu estado por props e sinaliza fechamento pelo callback `onClose`.
 *
 * D11: Independencia de Store
 * Nenhuma dependencia implicita de store ou contexto global e exigida para renderizar o componente.
 */
export interface ModalProps {
    /** Controla a abertura do dialogo. */
    open: boolean;
    /** Titulo associado semanticamente ao dialogo. */
    title?: ReactNode;
    /** Nome acessivel alternativo para dialogos sem titulo visivel. */
    ariaLabel?: string;
    /** Texto descritivo do contexto do dialogo. */
    description?: ReactNode;
    /** Conteudo principal do modal. */
    children?: ReactNode;
    /** Area opcional de acoes. */
    footer?: ReactNode;
    /** Callback externo invocado ao solicitar fechamento. */
    onClose: () => void;
    /** Rotulo acessivel do botao de fechar. */
    closeLabel?: string;
    /** Classe adicional para customizacao externa. */
    className?: string;
    /** Define se o clique no backdrop dispara fechamento. */
    closeOnBackdrop?: boolean;
}
interface ModalSectionProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
declare const ModalHeader: ({ children, className, ...props }: ModalSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalBody: ({ children, className, ...props }: ModalSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalFooter: ({ children, className, ...props }: ModalSectionProps) => import("react/jsx-runtime").JSX.Element;
declare const ModalRoot: ({ open, title, ariaLabel, description, children, footer, onClose, closeLabel, className, closeOnBackdrop }: ModalProps) => import('react').ReactPortal | null;
type ModalComponent = typeof ModalRoot & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export declare const Modal: ModalComponent;
export {};
//# sourceMappingURL=Modal.d.ts.map