/* eslint-disable react/prop-types */
export default function Input({
  id,
  name,
  htmlFor,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-neutral-dark bg-neutral-light 
                   border border-neutral rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-primary 
                   focus:border-transparent transition duration-200 placeholder:font-light"
        required={required}
      />
    </div>
  );
}
