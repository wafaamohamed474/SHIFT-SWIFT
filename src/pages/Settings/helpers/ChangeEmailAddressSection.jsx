// ChangeEmail.js

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../../components/button/Button'; // Assume you have a Button component
import { getUserData, getUserType } from '../../../services/authService';
import { changeMemberEmail } from '../../../services/api/Member'; // Assuming similar api for company
import { changeCompanyEmail } from '../../../services/api/company';

// Validation Schema
const validationSchema = Yup.object({
  emailAddress: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const ChangeEmail = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const userType = getUserType(); // 'member' or 'company'

  useEffect(() => {
    const userData = getUserData(); // Retrieve data from cookies
    if (userType === 'member') {
      setUserId(userData?.memberId);
    } else if (userType === 'company') {
      setUserId(userData?.companyId);
    }

    // Redirect to login if no userId is found
    if (!userId) {
      navigate('/login');
    }
  }, [userType, navigate]);

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!userId) {
      console.error("No userId found!");
      return;
    }

    try {
      if (userType === 'member') {
        await changeMemberEmail(userId, values.emailAddress);  // Member-specific email change
      } else if (userType === 'company') {
        await changeCompanyEmail(userId, values.emailAddress);  // Company-specific email change
      }

      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error updating email:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // If userId is not available, prevent the form rendering
  if (!userId) return null;

  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <h2 className="font-semibold text-2xl text-main-color">Change Email Address</h2>

      <Formik
        initialValues={{ emailAddress: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleReset }) => (
          <Form>
            <div className="flex gap-4">
              <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
                <label htmlFor="emailAddress" className="block font-medium text-main-text text-sm">
                  New Email Address
                </label>
                <Field
                  name="emailAddress"
                  type="email"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage name="emailAddress" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div className="mt-7 flex gap-4">
              <Button type="button" label="Cancel" variant="secondary" onClick={handleReset} />
              <Button type="submit" label="Save" variant="primary" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmail;
