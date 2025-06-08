import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../components/button/Button";
import { getUserData, getUserType } from "../../../services/authService";
import { changeCompanyEmail } from "../../../services/api/company";
import { useAlert } from "../../../context/AlertContext";
import { changeMemberEmail } from "../../../services/api/Member";

const validationSchema = Yup.object({
  emailAddress: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ChangeEmail = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const userType = getUserType();
  const { showAlert } = useAlert();
   const [initialEmail, setInitialEmail] = useState('');

  useEffect(() => {
    const userData = getUserData();

    if (userType === "user") {
      setUserId(userData?.memberId);
      setInitialEmail(userData?.email);
    } else if (userType === "company") {
      setUserId(userData?.companyId);
       setInitialEmail(userData?.email);
    }

    setLoading(false);
  }, [userType]);

  useEffect(() => {
    if (!loading && userId === undefined) {
      navigate("/login");
    }
  }, [loading, userId, navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!userId) return;
      if (userType === "user") {
        await changeMemberEmail(userId, values.emailAddress);
      } else {
        await changeCompanyEmail(userId, values.emailAddress);
      }
      showAlert("Email changed successfully!", "success");
    } catch (error) {
      console.error("Error updating email:", error);
      showAlert("Failed to update email.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || userId === null) return null;

  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <h2 className="font-semibold text-2xl text-main-color">
        Change Email Address
      </h2>

      <Formik
        initialValues={{ emailAddress: initialEmail }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleReset }) => (
          <Form>
            <div className="flex gap-4">
              <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
                <label
                  htmlFor="emailAddress"
                  className="block font-medium text-main-text text-sm"
                >
                  New Email Address
                </label>
                <Field
                  name="emailAddress"
                  type="email"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage
                  name="emailAddress"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="mt-7 flex gap-4">
              <Button
                type="button"
                label="Cancel"
                variant="secondary"
                onClick={handleReset}
              />
              <Button
                type="submit"
                label="Save"
                variant="primary"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmail;
