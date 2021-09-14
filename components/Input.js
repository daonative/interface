export const Input = ({ name, placeholder = "", label = "", ...rest }) => (
  <>
    <label htmlFor={name} className="block text-sm font-medium text-gray-600 ">
      {label}
    </label>
    <div className="mt-1 flex rounded-md shadow-sm mb-3">
      <input
        placeholder={placeholder}
        name={name}
        className="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-prologe-primary focus:border-prologe-primary sm:text-sm border-prologe-light"
        {...rest}
      />
    </div>
  </>
);
