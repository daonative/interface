import React from "react";

interface PropTypes {
  label: string;
  name: string;
  type: string;
}

export const Input = React.forwardRef<HTMLInputElement, PropTypes>(
  (props, ref) => {
    const { label = "", type = "", ...rest } = props;
    const { name } = rest;
    return (
      <>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-600 "
        >
          {label}
        </label>
        <div className="mt-1 flex rounded-md shadow-sm mb-3">
          <input
            ref={ref}
            className="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-prologe-primary focus:border-prologe-primary sm:text-sm border-prologe-light"
            type={type}
            {...rest}
          />
        </div>
      </>
    );
  }
);
