/* eslint-disable react/prop-types */
export default function Select({
  label,
  options,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-medium text-neutral-dark mb-2">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-neutral-dark bg-neutral-light 
                   border border-neutral rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-primary 
                   focus:border-transparent transition duration-200"
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
