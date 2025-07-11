'use client';

import { useEffect, useState } from 'react';
import { CheckCircleIcon, XMarkIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const isSuccess = toast.type === 'success';

  return (
    <div className={`flex items-center p-4 rounded-lg shadow-lg max-w-sm w-full border transition-all duration-300 hover:scale-105 ${
      isSuccess 
        ? 'bg-white dark:bg-gray-800 border-green-200 dark:border-green-700' 
        : 'bg-white dark:bg-gray-800 border-red-200 dark:border-red-700'
    }`}>
      {isSuccess ? (
        <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0" />
      ) : (
        <ExclamationCircleIcon className="h-6 w-6 text-red-500 dark:text-red-400 flex-shrink-0" />
      )}
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{toast.message}</p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="ml-3 flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        aria-label="Close notification"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-in slide-in-from-right-full duration-300"
        >
          <ToastItem toast={toast} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
}
