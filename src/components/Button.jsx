import PropTypes from "prop-types";

function Button({ size, text, onClick, className, ariaLabel }) {
  const sizeClasses = {
    xs: "px-2 py-1 text-[16px]",
    md: "px-4 py-2 text-[18px]",
    lg: "px-5 py-3 text-[20px]",
    xl: "px-6 py-4 text-[22px]",
  };

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-md bg-black bg-opacity-10 dark:bg-white/10 dark:text-title-dark text-title-light transition-all duration-300 ease-in-out border-2 border-transparent dark:hover:border-title-dark hover:border-title-light ${sizeClasses[size]} ${className}`}


      aria-label={ariaLabel}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

export default Button;
