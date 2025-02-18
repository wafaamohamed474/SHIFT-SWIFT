import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/button/Button";

const PersonalInfoSection = () => {
  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <Formik>
        <Form className="flex  flex-col">
          {/* Name */}

          <div className="mt-6 w-full md:w-2/3">
            <label className="font-semibold text-2xl text-main-color">
              Your Name <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-4 mt-5">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-main-text"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm text-main-text"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Gender */}

          <div className="mt-6 w-full md:w-2/3">
            <label className="font-semibold text-2xl text-main-color">
              Gender <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-4 w-full mt-5">
              <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full">
                <Field
                  type="radio"
                  name="accountType"
                  value="job_seeker"
                  className="hidden peer"
                />
                <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full">
                <Field
                  type="radio"
                  name="accountType"
                  value="job_seeker"
                  className="hidden peer"
                />
                <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                <span className="text-sm">Female</span>
              </label>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Mobile Number */}
          <div className="mt-6 w-full md:w-2/3">
            <label className="font-semibold text-2xl text-main-color">
              Mobile Number <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-4 mt-5">
              <div className="w-1/2">
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm text-main-text"
                >
                  Mobile Number
                </label>
                <Field
                  name="mobileNumber"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="altMobileNumber"
                  className="block text-sm text-main-text"
                >
                  Alternative Number
                </label>
                <Field
                  name="altMobileNumber"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage
                  name="altMobileNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Location */}

          <div className="mt-6 w-full">
            <label className="font-semibold text-2xl text-main-color">
              Location <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-8 mt-2">
              {/* Nationality */}
              <div className="w-1/3 flex items-center">
                <label
                  htmlFor="nationality"
                  className="block text-sm text-main-text mr-2"
                >
                  Nationality
                </label>
                <Field
                  as="select"
                  name="nationality"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </Field>
              </div>

              {/* City */}
              <div className="w-1/3 flex items-center">
                <label
                  htmlFor="city"
                  className="block text-sm text-main-text mr-2"
                >
                  City
                </label>
                <Field
                  as="select"
                  name="city"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                </Field>
              </div>

              {/* Area */}
              <div className="w-1/3 flex items-center">
                <label
                  htmlFor="area"
                  className="block text-sm text-main-text mr-2"
                >
                  Area
                </label>
                <Field
                  as="select"
                  name="area"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  {/* Additional options for Area */}
                </Field>
              </div>
            </div>
          </div>
            {/* Save & Cancel */}
            <div className="mt-10 flex gap-4">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button type="submit" label="Save" variant="primary" />
            </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfoSection;
