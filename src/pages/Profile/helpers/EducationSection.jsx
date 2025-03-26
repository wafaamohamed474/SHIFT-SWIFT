import { Field, Form, Formik } from "formik";
import * as Yup from "yup"
import DateSelect from "../../../components/dateSelect/DateSelect";
import Button from "../../../components/button/Button";
import { addEducation } from "../../../services/api/Member";

const EducationSection = () => {
  const validationSchema = Yup.object({
    institution: Yup.string().required("School Name is required"),
    degree: Yup.string().required("Level of Education is required"),
  });

  const handleSubmit =async(values)=>{
    try{
      await addEducation(values , "7dcaf1e4-4570-4d52-9c51-1bfe3ab8c3a0")

    }catch(error){
      console.error("Failed to add education. Please try again." , error)
    }

  }

  return (
    <div className="mt-4  pb-6">
      <label className="font-semibold text-2xl text-main-color">
        Add Education
      </label>
      <Formik
      initialValues={{institution : "" , degree : ""}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}

      >

        <Form className="mt-5">
          <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
            {/* Education Level */}
            <div className="mt-2">
              <label
                htmlFor="educationLevel"
                className="block font-medium text-main-text text-sm"
              >
                Level of Education
              </label>
              <Field
                id="degree"
                name="degree"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
            </div>

            {/* Field of Study */}
            <div className="mt-2">
              <label
                htmlFor="fieldOfStudy"
                className="block font-medium text-main-text text-sm"
              >
                Field of Study
              </label>
              <Field
                id="fieldOfStudy"
                name="fieldOfStudy"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
            </div>

            {/* School Name */}
            <div className="mt-2">
              <label
                htmlFor="schoolName"
                className="block font-medium text-main-text text-sm"
              >
                School Name
              </label>
              <Field
                id="institution"
                name="institution"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
            </div>

            <div className="mt-6">
              {/* Time Period */}
              <label className="font-semibold text-md text-main-text">
                Time Period
              </label>
              <div className="flex items-center mt-2">
                <Field
                  type="checkbox"
                  name="currentlyEnrolled"
                  id="currentlyEnrolled"
                  className="mr-2"
                />
                <label
                  htmlFor="currentlyEnrolled"
                  className="text-main-text text-sm"
                >
                  Currently Enrolled
                </label>
              </div>

              {/* From */}
              <div className="mt-4">
                <label className="font-semibold text-md text-main-text">
                  From
                </label>
                <div className="flex gap-4 mt-2">
                  <DateSelect name="fromMonth" type="month" />
                  <DateSelect name="fromYear" type="year" />
                </div>
              </div>

              {/* To */}
              <div className="mt-4">
                <label className="font-semibold text-md text-main-text">
                  To
                </label>
                <div className="flex gap-4 mt-2">
                  <DateSelect name="fromMonth" type="month" />
                  <DateSelect name="fromYear" type="year" />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mt-4">
                <label className="font-semibold text-md text-main-text">
                  Date of Birth
                </label>
                <div className="flex gap-4 mt-2">
                  <DateSelect name="fromMonth" type="month" />
                  <DateSelect name="fromYear" type="year" />
                </div>
              </div>
            </div>

            {/* country */}

            <div className="flex justify-between items-center mt-5">
              <label
                htmlFor="nationality"
                className="block text-md font-semibold text-main-text"
              >
                Country
              </label>
              <Field
                as="select"
                name="nationality"
                className="border rounded p-2  focus:outline-none bg-fill-bg-color text-sm"
              >
                <option value="">Choose</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
              </Field>
            </div>

            {/* Save & Cancel */}
            <div className="mt-10 flex gap-4">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button type="submit" label="Save" variant="primary" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EducationSection;
// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Button from "../../../components/button/Button";
// import { addEducation } from "../../../services/api/Member";

// const EducationSection = () => {
//   // Validation Schema
//   const validationSchema = Yup.object({
//     institution: Yup.string().required("School Name is required"),
//     degree: Yup.string().required("Level of Education is required"),
//   });

//   // Form Submit Handler
//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     console.log(values);
    
//     try {
//       await addEducation(values, "7dcaf1e4-4570-4d52-9c51-1bfe3ab8c3a0");

//       resetForm(); // Clear form
//     } catch (error) {
//       console.error("Failed to add education:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="mt-4 pb-6">
//       <label className="font-semibold text-2xl text-main-color">
//         Add Education
//       </label>
//       <Formik
//         initialValues={{ institution: "", degree: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="mt-5">
//             <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
//               {/* Level of Education */}
//               <div className="mt-2">
//                 <label className="block font-medium text-main-text text-sm">
//                   Level of Education
//                 </label>
//                 <Field
//                   id="degree"
//                   name="degree"
//                   className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
//                 />
//                 <ErrorMessage
//                   name="degree"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 />
//               </div>

//               {/* School Name */}
//               <div className="mt-2">
//                 <label className="block font-medium text-main-text text-sm">
//                   School Name
//                 </label>
//                 <Field
//                   id="institution"
//                   name="institution"
//                   className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
//                 />
//                 <ErrorMessage
//                   name="institution"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 />
//               </div>

//               {/* Save & Cancel */}
//               <div className="mt-10 flex gap-4">
//                 <Button type="reset" label="Cancel" variant="secondary" />
//                 <Button
//                   type="submit"
//                   label="Save"
//                   variant="primary"
//                   disabled={isSubmitting}
//                 />
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default EducationSection;
