/* eslint-disable react/prop-types */
export default function TextArea({
  label,
  placeholder,
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
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-32 px-4 py-2 text-neutral-dark bg-neutral-light 
                   border border-neutral rounded-lg shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-primary 
                   focus:border-transparent transition duration-200 resize-none"
        required={required}
      />
    </div>
  );
}
