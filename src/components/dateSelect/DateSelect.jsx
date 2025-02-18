import { Field } from "formik";

const DateSelect = ({ name, type }) => {
    const startYear = 2000;
    let options = [];
  
    if (type === "month") {
      options = [
        { value: "01", label: "January" },
        { value: "02", label: "February" },
        { value: "03", label: "March" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
      ];
    } else if (type === "year") {
      const currentYear = new Date().getFullYear();
      options = Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
        value: (currentYear - i).toString(),
        label: (currentYear - i).toString(),
      }));
    }
    return (
      <Field as="select" name={name} className="border border-dark-text rounded px-2 py-2 text-sm bg-transparent focus:outline-none text-dark-text w-1/2">
        <option value="">{type === "month" ? "Month" : "Year"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    );
  };
  
export default DateSelect;