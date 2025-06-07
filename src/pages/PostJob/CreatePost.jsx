import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createJobPost } from "../../services/api/company";
import { getUserData } from "../../services/authService";
import { useNavigate } from "react-router";

function CreatePost() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    JobTitle: Yup.string().required("Job Title is required"),
    JobType: Yup.string().required("Job Type is required"),
    JobLocation: Yup.string().required("Job Location is required"),
    city: Yup.string().required("City is required"),
    Salary: Yup.number().required("Salary is required"),
    SalaryType: Yup.string().required("Salary Type is required"),
    JobDescription: Yup.string().required("Job Description is required"),
    JobRequirements: Yup.string().required("Job Requirements is required"),
  });
  const handleSubmit = async (values) => {
    try {
      const payload = {
              title: values.JobTitle,
              description: values.JobDescription,
              location: values.city,
              jobType: parseInt(values.JobType),
              workMode: parseInt(values.JobLocation),
              salary: parseFloat(values.Salary),
              salaryType: parseInt(values.SalaryType),
              requirements: values.JobRequirements,
              keywords: values.Keywords || "",
            };
      await createJobPost(payload);
      //console.log("Job post created successfully!");
      navigate("");
    } catch (error) {
      console.error("Error creating job post:", error);
    }
  };
  
  return (
    <div className="w-full">
      <div className="md:pl-10 w-fit lg:w-2/3">
        <h1 className="font-bold text-4xl pb-10">Create New Post</h1>
        <Formik
          initialValues={{
            JobTitle: "",
            JobType: "",
            JobLocation: "",
            city: "",
            Salary: "",
            SalaryType: "",
            JobDescription: "",
            JobRequirements: "",
            Keywords: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col">
            {/* Job Title */}
            <label className="font-semibold text-2xl text-main-color">
              Job Title <span className="text-red-500 text-md">*</span>
            </label>
            <Field
              name="JobTitle"
              placeholder="Enter Here"
              className="border border-dark-text rounded px-2 py-2 my-5 text-sm w-full bg-transparent focus:outline-none text-dark-text"
            />
            <ErrorMessage
              name="JobTitle"
              component="div"
              className="text-red-500 text-sm"
            />
           {/* Job Type */}
<label className="font-semibold text-2xl text-main-color">
  Job Type <span className="text-red-500 text-md">*</span>
</label>
<div className="flex gap-8 mt-2">
  <div className="flex gap-4 my-5">
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobType"
        value="1"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        Full Time
      </label>
    </div>
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobType"
        value="2"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        Part Time
      </label>
    </div>
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobType"
        value="3"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        Freelance
      </label>
    </div>
  </div>
</div>
<ErrorMessage
              name="JobType"
              component="div"
              className="text-red-500 text-sm"
            />
{/* Job Location */}
<label className="font-semibold text-2xl text-main-color">
  Job Location <span className="text-red-500 text-md">*</span>
</label>
<div className="flex gap-8 mt-2">
  <div className="flex gap-2 my-5">
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobLocation"
        value="1"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        On Site
      </label>
    </div>
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobLocation"
        value="2"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        Remotly
      </label>
    </div>
    <div className="flex items-center gap-2">
      <Field
        type="radio"
        name="JobLocation"
        value="3"
        className="border border-main-color rounded-full"
      />
      <label className="border border-main-color rounded-xl text-main-color p-1 w-24 flex justify-center items-center text-sm">
        Hybrid
      </label>
    </div>
  </div>
              <div className="w-1/4 flex items-center">
                <Field
                  as="select"
                  name="city"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="Sohag">Sohag</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Alex">Alex</option>
                </Field>
              </div>
            </div>
            <ErrorMessage
              name="JobLocation"
              component="div"
              className="text-red-500 text-sm"
            />
            {/* Salary */}
            <label className="font-semibold text-2xl text-main-color mt-20">
              Salary <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-8">
              <Field
                name="Salary"
                placeholder="Enter Here"
                className="border border-dark-text rounded px-2 py-2 my-5 text-sm w-full bg-transparent focus:outline-none text-dark-text"
              />
              <ErrorMessage
                name="Salary"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="w-1/4 flex items-center">
                <Field
                  as="select"
                  name="SalaryType"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="1">Per Month</option>
                  <option value="2">Per Hour</option>
                  <option value="3">Contract</option>
                </Field>
              </div>
            </div>

            {/* Job Description */}
            <label className="font-semibold text-2xl text-main-color mt-20 mb-5">
              Job Description <span className="text-red-500 text-md">*</span>
            </label>
            <Field
              as="textarea"
              name="JobDescription"
              className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color h-28 text-sm"
            />
            <ErrorMessage
              name="JobDescription"
              component="div"
              className="text-red-500 text-sm"
            />

            {/* Job Requirements */}
            <label className="font-semibold text-2xl text-main-color my-5">
              Job Requirements <span className="text-red-500 text-md">*</span>
            </label>
            <Field
              as="textarea"
              name="JobRequirements"
              className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color h-28 text-sm"
            />
            <ErrorMessage
              name="JobRequirements"
              component="div"
              className="text-red-500 text-sm"
            />

            {/* Key Words */}
            <label className="text-xl text-main-color mt-10 mb-2">
              Key Words
            </label>
            <Field
              name="Keywords"
              className="border rounded p-2 w-full focus:outline-none bg-inherit border-dark-text text-sm"
            />
            <ErrorMessage
              name="Keywords"
              component="div"
              className="text-red-500 text-sm"
            />

            {/* Save & Continue */}
            <div className="mt-10 ">
              
              <button
                type="submit"
                className="text-white border border-main-color bg-main-color py-2 rounded-2xl w-40 text-sm"
              >
                post
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreatePost;
