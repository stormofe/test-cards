'use client';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, disabled = false, loading = false, children, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded flex items-center justify-center ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 text-white'
      } ${className}`}
    >
      {loading && (
        <svg
          className="inline-block w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"
          role="status"
        />
      )}
      {children}
    </button>
  );
}