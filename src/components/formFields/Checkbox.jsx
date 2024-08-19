/* eslint-disable react/prop-types */
export default function Checkbox({
  label,
  checked,
  onChange,
  required = false,
}) {
  return (
    <div className="flex items-center mb-6">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-primary 
                   rounded border-neutral focus:ring-primary"
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
