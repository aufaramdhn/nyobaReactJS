import React from "react";

export const Button = ({ Children, type }) => {
  return (
    <button
      type={type}
      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      {Children}
    </button>
  );
};
