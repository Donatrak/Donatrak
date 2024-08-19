/* eslint-disable react/prop-types */
export default function SubmitButton({ label, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full bg-primary text-white py-3 px-4 rounded-lg 
                 shadow-lg font-bold uppercase tracking-wide 
                 hover:bg-primary-dark focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-primary 
                 transition duration-200"
    >
      {label}
    </button>
  );
}
