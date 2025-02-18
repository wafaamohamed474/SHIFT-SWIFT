import { Field, Form, Formik } from "formik";
import Button from "../../../components/button/Button";
 

const LookingForJobSection = () => {
  return (
    <div className="mt-4 border-b border-border-color pb-6">
        <label className="font-semibold text-2xl text-main-color">Are you looking for a specific job?</label>
      <Formik>
        <Form>
          <div className="flex gap-4">
            <div className="mt-4 w-full md:w-1/2">
              
              <Field
                name="jobPreference"
                placeholder="Enter Here"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
              </div>
          </div>


          <div className="mt-10 flex gap-4">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button type="submit" label="Save" variant="primary" />
            </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LookingForJobSection;
