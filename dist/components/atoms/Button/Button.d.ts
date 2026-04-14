import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'neutral' | 'success' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}
export declare const Button: ({ children, className, variant, color, size, type, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map