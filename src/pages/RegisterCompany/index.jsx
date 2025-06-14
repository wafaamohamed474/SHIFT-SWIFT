import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { RegisterCompany as Register } from "../../services/api/account";
import { useState } from "react";

const RegisterCompany = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const emailFromQuery = query.get("email") || "";

  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: emailFromQuery,
      userName: "",
      password: "",
      phoneNumber: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      userName: Yup.string().required("required"),
      email: Yup.string().email("Invalid email").required("required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(/[a-z]/, "Password must have at least one lowercase letter")
        .matches(/[A-Z]/, "Password must have at least one uppercase letter")
        .matches(/\W/, "Password must have at least one special character")
        .required("required"),
      phoneNumber: Yup.string()
        .matches(/^(\+20)?(10|11|12|15)[0-9]{8}$/, "Invalid phone number")
        .required("required"),
    }),
    onSubmit: async (values) => {
      setError("");
      try {
        await Register(values);
        navigate("/login");
      } catch (error) {
        setError(error?.data);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-20rem)] md:h-[calc(100vh-22rem)] lg:min-h-screen bg-bg-color">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-main-text mb-4">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center w-full px-2 py-2 border text-md font-medium rounded-md">
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                id="userName"
                name="userName"
                className="focus:outline-none ml-3 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                placeholder="Company Name"
              />
            </div>
            {formik.touched.userName && formik.errors.userName && (
              <p className="text-red-500 text-sm">{formik.errors.userName}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center w-full px-2 py-2 border text-md font-medium rounded-md">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="email"
                id="email"
                name="email"
                className="focus:outline-none ml-3 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center w-full px-2 py-2 border text-md font-medium rounded-md">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full ml-3 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center w-full px-2 py-2 border text-md font-medium rounded-md">
              <FontAwesomeIcon icon={faPhone} />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full ml-3 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                placeholder="Phone"
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-md bg-blue-500 hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm text-dark-text">Already have an account?</p>
          <Link to="/login" className="text-blue-500 hover:underline ml-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
