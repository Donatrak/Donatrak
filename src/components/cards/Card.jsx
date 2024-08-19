/* eslint-disable react/prop-types */
export default function Card({ title, children, footer, image = null }) {
  return (
    <div
      className="max-w-sm mx-auto bg-background rounded-lg shadow-lg overflow-hidden 
                 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      {image && (
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
        )}
        <div className="text-base text-neutral-dark">{children}</div>
      </div>
      {footer && (
        <div className="p-4 bg-neutral-light border-t border-neutral">
          {footer}
        </div>
      )}
    </div>
  );
}
