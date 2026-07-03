import { useState } from 'react';
import type { ToastProps } from './types.js';
import React from 'react';

export const useToastManager = (
  toastContainerId: string,
  toastExpirationTimeMs: number,
) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const createToast = (newToastInfo: ToastProps) => {
    const container = document.body.querySelector(`#${toastContainerId}`);
    if (container === null)
      throw new Error(
        `ToastContainer with ID ${toastContainerId} doesn't exist`,
      );

    setToasts((prev) => [...prev, newToastInfo]);

    setTimeout(() => {
      deleteToast(newToastInfo.id);
    }, toastExpirationTimeMs);
  };

  const deleteToast = (toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  return { createToast, toasts, deleteToast };
};
