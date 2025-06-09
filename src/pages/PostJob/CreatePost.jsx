import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createJobPost } from "../../services/api/company";
import { useNavigate } from "react-router";

function CreatePost() {
  const navigate = useNavigate();
  const jobTypeMap = {
  "Full Time": 1,
  "Part Time": 2,
  "Freelance": 3,
};

const workModeMap = {
  "On Site": 1,
  "Remotely": 2,
  "Hybrid": 3,
};
const salaryType ={
  "Per Month" :1,
  "Per Hour":2,
  "Contract":3
}
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
              jobType: jobTypeMap[values.JobType] || 0,
              workMode: workModeMap[values.JobLocation] || 0,
              salary: parseFloat(values.Salary),
              salaryType: salaryType[values.salaryType] || 0,
              requirements: values.JobRequirements,
            };
      await createJobPost(payload);
      //console.log("Job post created successfully!");
      navigate("/home");
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
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-8">
            {/* Job Title */}
            <label className="font-semibold text-2xl text-main-color ">
              Job Title <span className="text-red-500 text-md">*</span>
            </label>
            <Field
              name="JobTitle"
              placeholder="Enter Here"
              className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
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
<div className="flex gap-4">
  {["Full Time", "Part Time", "Freelance"].map((type) => (
    <Field name="JobType" key={type}>
      {({ field, form }) => (
        <button
          type="button"
          onClick={() => form.setFieldValue("JobType", type)}
          className={`border rounded-xl px-4 py-1 text-sm ${
            field.value === type
              ? "bg-secondary-color text-main-color border-main-color"
              : "text-main-color border-main-color"
          }`}
        >
          {type}
        </button>
      )}
    </Field>
  ))}
</div>
<ErrorMessage name="JobType" component="div" className="text-red-500 text-sm" />
<label className="font-semibold text-2xl text-main-color">
  Job Location <span className="text-red-500 text-md">*</span>
</label>
<div className="flex gap-4 ">
  {["On Site", "Remotely", "Hybrid"].map((mode) => (
    <Field name="JobLocation" key={mode}>
      {({ field, form }) => (
        <button
          type="button"
          onClick={() => form.setFieldValue("JobLocation", mode)}
          className={`border rounded-xl px-4 py-1 text-sm ${
            field.value === mode
              ? "bg-secondary-color text-main-color border-main-color"
              : "text-main-color border-main-color"
          }`}
        >
          {mode}
        </button>
      )}
    </Field>
  ))}
</div>
<ErrorMessage name="JobLocation" component="div" className="text-red-500 text-sm" />

            {/* Salary */}
            <label className="font-semibold text-2xl text-main-color ">
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
            <label className="font-semibold text-2xl text-main-color ">
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
            <label className="font-semibold text-2xl text-main-color ">
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

            

            {/* post */}
            <div className="">
              
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
