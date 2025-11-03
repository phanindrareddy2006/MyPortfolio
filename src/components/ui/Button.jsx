export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`bg-[#8A6FD1] text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
