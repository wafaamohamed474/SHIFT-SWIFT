import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/button/Button";
 
import { getUserData } from "../../../services/authService";
import { useAlert } from "../../../context/AlertContext";
import { AddOrUpdateMemberProfileData } from "../../../services/api/member";

const PersonalInfoSection = () => {
  const {showAlert}=useAlert()
   
  const data = getUserData()
console.log(getUserData());

  const initialValues = {
    memberId: data.memberId || '',
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    location: data.location || '',
    phoneNumber: data.phoneNumber || '',
    alternativeNumber: data.alternativeNumber || "",
    // genderId: data.genderId || 0,
    genderId: data.genderId?.toString() || '',
    dateOfBirth: data.dateOfBirth || "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    location: Yup.string().required("Location is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    alternativeNumber: Yup.string(),
    genderId: Yup.number()
      .required("Gender is required")
      .oneOf(["1", "2"], "Invalid gender"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await AddOrUpdateMemberProfileData(values);
      showAlert("Profile updated successfully!" , "success");
    } catch (error) {
       console.error("Failed to update profile: " + (error.message || error));
       showAlert("Failed to update profile" , "error")
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            {/* First Name & Last Name */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Your Name <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block text-sm text-main-text">
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block text-sm text-main-text">
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                </div>
              </div>
            </div>

            {/* Gender */}
            
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Gender <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 w-full mt-5">
                <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full cursor-pointer">
                  <Field
                    type="radio"
                    name="genderId"
                    value="1"
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full cursor-pointer">
                  <Field
                    type="radio"
                    name="genderId"
                    value="2"
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                  <span className="text-sm">Female</span>
                </label>
              </div>
              <ErrorMessage
                name="genderId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone Numbers */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Mobile Number <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <label htmlFor="phoneNumber" className="block text-sm text-main-text">
                    Mobile Number
                  </label>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="alternativeNumber" className="block text-sm text-main-text">
                    Alternative Number
                  </label>
                  <Field
                    id="alternativeNumber"
                    name="alternativeNumber"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="alternativeNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mt-4 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Date of Birth <span className="text-red-500 text-md">*</span>
              </label>
              <Field
                type="date"
                name="dateOfBirth"
                max={new Date().toISOString().split("T")[0]}
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text mt-2"
              />
              <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Location */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Location <span className="text-red-500 text-md">*</span>
              </label>
              <Field
                name="location"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text mt-2"
              />
              <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4 w-full md:w-2/3">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button type="submit" label={isSubmitting ? "Saving..." : "Save"} variant="primary" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoSection;
