/* eslint-disable react/prop-types */
export default function Radio({
  name,
  label,
  value,
  checked,
  onChange,
  required = false,
}) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-5 w-5 text-primary 
                   focus:ring-primary border-neutral"
        required={required}
      />
      {label && (
        <label className="ml-2 text-sm font-medium text-neutral-dark">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
    </div>
  );
}
