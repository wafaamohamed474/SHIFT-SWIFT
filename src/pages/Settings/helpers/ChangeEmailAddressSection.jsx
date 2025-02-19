import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../../components/button/Button';

const validationSchema = Yup.object({
  emailAddress: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
});

const ChangeEmailAddressSection = () => {
  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <label className="font-semibold text-2xl text-main-color">Change Email Address</label>
      <Formik
        initialValues={{ emailAddress: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Submitted values:', values);
          
        }}
      >
        {({ handleReset }) => (
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
                {/* ✅ Error Message for email */}
                <ErrorMessage name="emailAddress" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            <div className="mt-7 flex gap-4">
              <Button type="button" label="Cancel" variant="secondary" onClick={handleReset} />
              <Button type="submit" label="Save" variant="primary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmailAddressSection;
