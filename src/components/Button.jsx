import PropTypes from "prop-types";

function Button({ text, onClick, className, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-md bg-black bg-opacity-10 dark:bg-white/10 dark:text-title-dark text-title-light transition-all duration-300 ease-in-out border-2 border-transparent dark:hover:border-title-dark hover:border-title-light ${className}`}
      aria-label={ariaLabel}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

export default Button;
