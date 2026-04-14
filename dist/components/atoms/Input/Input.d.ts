import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'outline' | 'filled';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: ReactNode;
    helperText?: ReactNode;
    errorMessage?: ReactNode;
    size?: InputSize;
    variant?: InputVariant;
}
export declare const Input: ({ label, helperText, errorMessage, size, variant, id, className, disabled, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Input.d.ts.map