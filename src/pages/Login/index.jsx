import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { login } from "../../services/authService";

const Login = () => {
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email = query.get("email") || "";

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: async (values) => {
      setError("");
      try {
        const userData = await login(values, userType);
        if (userData) {
          if (userType === "user") {
            navigate("/home");
            setTimeout(() => window.location.reload(), 2000);
          } else if (userType === "company") {
            navigate("/home/companyHome");
          }
        }
      } catch (error) {
        console.error("Login failed:", error);

        // ✅ تحسين عرض الأخطاء:
        if (error?.response?.data?.Errors) {
          const backendErrors = Object.values(error.response.data.Errors).flat();
          setError(backendErrors.join(" - "));
        } else if (typeof error?.response?.data === "string") {
          setError(error.response.data);
        } else {
          setError("An unexpected error occurred");
        }
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-[calc(100vh-20rem)] md:h-[calc(100vh-22rem)] lg:min-h-screen bg-bg-color">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-main-text mb-4">Login</h2>
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
                placeholder="User Name"
              />
            </div>
            {formik.touched.userName && formik.errors.userName && (
              <p className="text-red-500 text-sm">{formik.errors.userName}</p>
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
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="user"
                checked={userType === "user"}
                onChange={() => setUserType("user")}
                className="mr-2"
              />
              User
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="company"
                checked={userType === "company"}
                onChange={() => setUserType("company")}
                className="mr-2"
              />
              Company
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* ✅ عرض خطأ الـ API تحت الزر */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-dark-text">Don't have an account?</p>
          <p className="text-dark-text text-sm">
            Are you a User?
            <Link
              to={`/register-user?email=${encodeURIComponent(email)}`}
              className="text-blue-500 hover:underline ml-2"
            >
              Click here
            </Link>
          </p>
          <p className="text-dark-text text-sm">
            Are you a Company?
            <Link
              to={`/register-company?email=${encodeURIComponent(email)}`}
              className="text-blue-500 hover:underline ml-2"
            >
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
