{/*
function PostJob() {
  return (
    <div className="w-full">
      <div className="md:pl-10  lg:w-2/3">
        <h1 className="font-bold text-4xl pb-10">Create New Post</h1>
        <h4 className="text-3xl text-main-color">Are you looking for a specific job?</h4>
        <input
          type="text"
          placeholder="Enter Here"
          className="bg-transparent border border-border-color px-1 py-2 rounded-md w-full my-5"
        />
        {/* Buttons 
        <div className="flex gap-4 items-center">
          <button
            className="border border-main-color w-28 h-6 text-center rounded-lg flex items-center justify-center text-main-color"
          >
            Skip
          </button>
          <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-lg flex items-center justify-center">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
export default PostJob;
*/}
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { useNavigate } from 'react-router-dom'
const validationSchema = Yup.object({
  jobPreference: Yup.string().nullable(), // No required validation
});
const LookingForJobSection = () => {
    const navigat = useNavigate()
  return (
    <div className="mt-4 md:pl-10  pb-6">
       <h1 className="font-bold text-4xl pb-10">Create New Post</h1>
      <label className="font-semibold text-2xl text-main-color">
        Are you looking for a specific job?
      </label>

      <Formik
        initialValues={{ jobPreference: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("job preference:", values);
        }}
      >
        <Form>
          <div className="flex gap-4">
            <div className="mt-4 w-full md:w-2/3 lg:w-1/2">
              <Field
                name="jobPreference"
                placeholder="Enter Here"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Button type="reset" label="Skip" variant="secondary" />
            <Button type="submit" label="Continue" variant="primary" onClick={()=>{navigat('../createpost')}} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default LookingForJobSection;
