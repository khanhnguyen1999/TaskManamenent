import React, { InputHTMLAttributes } from 'react';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input
    className={`shadow-sm px-2 py-3 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${className}`}
    {...props}
  />
);
