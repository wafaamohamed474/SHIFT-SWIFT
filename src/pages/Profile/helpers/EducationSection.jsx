import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../components/button/Button";
import { getUserData } from "../../../services/authService";
import { useAlert } from "../../../context/AlertContext";
import { addEducation } from "../../../services/api/member";

const EducationSection = () => {
  const userId = getUserData()?.memberId;
  const { showAlert } = useAlert();

  const validationSchema = Yup.object({
    level: Yup.string().required("Level of Education is required"),
    faculty: Yup.string().required("Faculty is required"),
    universityName: Yup.string().required("University Name is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await addEducation(userId, values);
      showAlert("Education added successfully", "success");
      window.location.reload();
    } catch (error) {
      console.error("Failed to add education. Please try again.", error);

      const errors = error?.data || {};

      if (errors.Level && Array.isArray(errors.Level)) {
        setFieldError("level", errors.Level[0]);
      }
      if (errors.Faculty && Array.isArray(errors.Faculty)) {
        setFieldError("faculty", errors.Faculty[0]);
      }
      if (errors.UniversityName && Array.isArray(errors.UniversityName)) {
        setFieldError("universityName", errors.UniversityName[0]);
      }

      if (
        !errors.Level &&
        !errors.Faculty &&
        !errors.UniversityName
      ) {
        showAlert("Failed to add education. Please try again.", "error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4 pb-6">
      <label className="font-semibold text-2xl text-main-color">Add Education</label>
      <Formik
        initialValues={{ level: "", faculty: "", universityName: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-5">
            <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
              {/* Level */}
              <div className="mt-2">
                <label htmlFor="level" className="block font-medium text-main-text text-sm">
                  Level of Education
                </label>
                <Field
                  id="level"
                  name="level"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage name="level" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Faculty */}
              <div className="mt-2">
                <label htmlFor="faculty" className="block font-medium text-main-text text-sm">
                  Faculty
                </label>
                <Field
                  id="faculty"
                  name="faculty"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage name="faculty" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* University Name */}
              <div className="mt-2">
                <label htmlFor="universityName" className="block font-medium text-main-text text-sm">
                  University Name
                </label>
                <Field
                  id="universityName"
                  name="universityName"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                />
                <ErrorMessage name="universityName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mt-10 flex gap-4">
                <Button type="reset" label="Cancel" variant="secondary" />
                <Button type="submit" label="Save" variant="primary" disabled={isSubmitting} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationSection;
