import { ReactNode } from 'react';

export interface ModalProps {
    open: boolean;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    onClose: () => void;
    closeLabel?: string;
    className?: string;
}
export declare const Modal: ({ open, title, description, children, footer, onClose, closeLabel, className }: ModalProps) => import('react').ReactPortal | null;
//# sourceMappingURL=Modal.d.ts.map