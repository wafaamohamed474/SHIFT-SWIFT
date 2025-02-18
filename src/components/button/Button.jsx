const Button = ({ type, label, variant = "primary", onClick }) => {
    const baseClasses = "w-24 py-1 rounded-lg text-sm";
    const variants = {
      primary: "bg-main-color text-white",
      secondary:  "border border-dark-text w-24 py-1 rounded-lg text-sm",
    };
  
    return (
      <button
        type={type}
        className={`${baseClasses} ${variants[variant]}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
export default Button;  