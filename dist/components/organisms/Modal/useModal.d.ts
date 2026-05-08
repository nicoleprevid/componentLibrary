import { RefObject } from 'react';

interface UseModalOptions {
    dialogRef: RefObject<HTMLDivElement>;
    open: boolean;
    onClose: () => void;
}
export declare const useModal: ({ dialogRef, open, onClose }: UseModalOptions) => void;
export {};
//# sourceMappingURL=useModal.d.ts.map