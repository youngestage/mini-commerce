'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ErrorDisplayProps {
  title?: string;
  message: string;
  retry?: () => void;
}

export function ErrorDisplay({ 
  title = 'Something went wrong', 
  message, 
  retry 
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 max-w-md">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export function ProductNotFound() {
  return (
    <ErrorDisplay
      title="Product not found"
      message="The product you're looking for doesn't exist or may have been removed."
    />
  );
}

export function EmptyState({ 
  title, 
  message 
}: { 
  title: string; 
  message: string; 
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="text-gray-400 mb-4">
        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{message}</p>
    </div>
  );
} 