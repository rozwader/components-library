import type { ReactNode } from "react";

export interface ToastContainerProps{
    $position?: ToastPos;
    toasts: ToastProps[];
    deleteToast: (toastId: string) => void;
    id: string;
}

export interface ToastProps{
    id: string;
    title?: string;
    children?: ReactNode;
    $variant?: ToastVariant;
    toastExpirationTimeMs?: number;
    DELETE_TOAST?: (toastId: string) => void;
}

export type ToastVariant = "success" | "danger" | "info" | "default";
export type ToastPos = "right-top" | "right-bottom" | "center-bottom" | "center-top";