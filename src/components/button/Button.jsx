const Button = ({ type, label, variant, onClick , className ,disabled }) => {
  const baseClasses = "w-24 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out";
    const variants = {
      primary: "bg-main-color border border-main-color text-white",
      secondary:  "border border-dark-text",
      active : "border border-main-color bg-active-btn ",
      disable : "bg-disable-btn text-white",
    };
  
    return (
      <button
        type={type}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };
export default Button;  