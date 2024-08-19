/* eslint-disable react/prop-types */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon = null,
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary-light to-primary text-white hover:from-primary hover:to-primary-dark",
    secondary:
      "bg-gradient-to-r from-secondary-light to-secondary text-white hover:from-secondary hover:to-secondary-dark",
    // More variants can be added here
  };

  return (
    <button
      type={type}
      className={`relative inline-flex items-center justify-center 
                  px-6 py-3 border border-transparent 
                  text-sm font-bold uppercase tracking-wide 
                  rounded-xl shadow-lg transition duration-300 ease-in-out 
                  transform hover:-translate-y-1 hover:shadow-xl 
                  ${variants[variant]}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
