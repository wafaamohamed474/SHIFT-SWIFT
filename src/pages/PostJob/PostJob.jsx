import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createJobPost } from "../../services/api/company";
import { useNavigate } from "react-router";
import { useAlert } from "../../context/AlertContext";

function CreatePost() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  /* ---------------------------------- helpers --------------------------------- */
  const jobTypeMap = { "Full Time": 1, "Part Time": 2, Freelance: 3 };
  const workModeMap = { "On Site": 1, Remotely: 2, Hybrid: 3 };
  const salaryTypeMap = { "Per Month": 1, "Per Hour": 2, Contract: 3 };

  /* --------------------------- validation schema ------------------------------ */
  const validationSchema = Yup.object({
    JobTitle: Yup.string().required("Job Title is required"),
    JobType: Yup.string().required("Job Type is required"),
    JobLocation: Yup.string().required("Job Location is required"),
    city: Yup.string().required("City is required"),
    Salary: Yup.number().typeError("Salary must be a number").required(),
    SalaryType: Yup.string().required("Salary Type is required"),
    JobDescription: Yup.string().required("Job Description is required"),
    JobRequirements: Yup.string().required("Job Requirements is required"),
  });

  /* -------------------------------- onSubmit ---------------------------------- */
  const handleSubmit = async (values) => {
    const payload = {
      title: values.JobTitle,
      description: values.JobDescription,
      location: values.city,
      jobType: jobTypeMap[values.JobType] || 0,
      workMode: workModeMap[values.JobLocation] || 0,
      salary: Number(values.Salary),
      salaryType: salaryTypeMap[values.SalaryType] || 0,
      requirements: values.JobRequirements,
      keywords: "constant, constant, constant",
    };

    try {
      await createJobPost(payload);
      showAlert("Job Posted", "success");
      navigate("/home/companyHome");
    } catch (error) {
      showAlert("Failed to post job", "error");
      console.error("Error details:", error.response?.data || error.message);
    }
  };

  /* ---------------------------------- JSX ------------------------------------ */
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
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-8">
              {/* ------------------------------ Job Title ------------------------------ */}
              <label className="font-semibold text-2xl text-main-color ">
                Job Title <span className="text-red-500">*</span>
              </label>
              <Field
                name="JobTitle"
                placeholder="Enter title"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none"
              />
              <ErrorMessage name="JobTitle" component="div" className="text-red-500 text-sm" />

              {/* ------------------------------ Job Type ------------------------------- */}
              <label className="font-semibold text-2xl text-main-color">
                Job Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["Full Time", "Part Time", "Freelance"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFieldValue("JobType", type)}
                    className={`border rounded-xl px-4 py-1 text-sm transition
                      ${
                        values.JobType === type
                          ? "bg-secondary-color text-main-color border-main-color"
                          : "text-main-color border-main-color"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <ErrorMessage name="JobType" component="div" className="text-red-500 text-sm" />

              {/* ---------------------------- Job Location ----------------------------- */}
              <label className="font-semibold text-2xl text-main-color">
                Job Location <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["On Site", "Remotely", "Hybrid"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setFieldValue("JobLocation", mode)}
                    className={`border rounded-xl px-4 py-1 text-sm transition
                      ${
                        values.JobLocation === mode
                          ? "bg-secondary-color text-main-color border-main-color"
                          : "text-main-color border-main-color"
                      }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <ErrorMessage name="JobLocation" component="div" className="text-red-500 text-sm" />

              {/* -------------------------------- City --------------------------------- */}
              <label className="font-semibold text-2xl text-main-color">
                City <span className="text-red-500">*</span>
              </label>
              <Field
                name="city"
                placeholder="Enter city"
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none"
              />
              <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />

              {/* ------------------------------ Salary --------------------------------- */}
              <label className="font-semibold text-2xl text-main-color ">
                Salary <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-8 items-center">
                <Field
                  name="Salary"
                  type="number"
                  placeholder="Enter salary"
                  className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none"
                />
                 <ErrorMessage name="Salary" component="div" className="text-red-500 text-sm" />
                <Field
                  as="select"
                  name="SalaryType"
                  className="border rounded p-2 w-40 focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="Per Month">Per Month</option>
                  <option value="Per Hour">Per Hour</option>
                  <option value="Contract">Contract</option>
                </Field>
              </div>
              <ErrorMessage name="SalaryType" component="div" className="text-red-500 text-sm" />

              {/* --------------------------- Job Description --------------------------- */}
              <label className="font-semibold text-2xl text-main-color ">
                Job Description <span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                name="JobDescription"
                className="border rounded p-2 w-full h-28 bg-fill-bg-color text-sm focus:outline-none"
              />
              <ErrorMessage name="JobDescription" component="div" className="text-red-500 text-sm" />

              {/* --------------------------- Job Requirements -------------------------- */}
              <label className="font-semibold text-2xl text-main-color ">
                Job Requirements <span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                name="JobRequirements"
                className="border rounded p-2 w-full h-28 bg-fill-bg-color text-sm focus:outline-none"
              />
              <ErrorMessage name="JobRequirements" component="div" className="text-red-500 text-sm" />

              
              {/* ------------------------------- Submit -------------------------------- */}
              <div>
                <button
                  type="submit"
                  className="bg-main-color border border-main-color text-white py-2 rounded-2xl w-40 text-sm hover:opacity-90 transition"
                >
                  Post
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreatePost;
