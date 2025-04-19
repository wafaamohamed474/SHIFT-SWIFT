import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom'
function CreatePost() {
    const navigat = useNavigate()
  return (
    <div className="w-full">
    <div className="md:pl-10  lg:w-2/3">
      <h1 className="font-bold text-4xl pb-10">Create New Post</h1>
         <Formik>
        <Form className="flex  flex-col">
          {/* Title */}
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
          {/* Type */}
            <label className="font-semibold text-2xl text-main-color">
              Job Type <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-2 my-5">
         <button className="border border-main-color rounded-xl text-main-color px-2 w-24 h-7 justify-center items-center text-sm">Full Time</button>
         <button className="border border-main-color rounded-xl text-main-color px-2 w-24 h-7 justify-center items-center text-sm">Part Time</button>
         <button className="border border-main-color rounded-xl text-main-color px-2  w-24 h-7 justify-center items-center text-sm">Freelance</button>
         </div>
          {/* Location */}
            <label className="font-semibold text-2xl text-main-color">
              Job Location <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-8 mt-2">
            <div className="flex gap-2 my-5">
         <button className="border border-main-color rounded-xl text-md text-main-color px-2  w-24 h-7 justify-center items-center text-sm">On Site</button>
         <button className="border border-main-color rounded-xl text-main-color px-2  w-24 h-7 justify-center items-center text-sm">Remotly</button>
         <button className="border border-main-color rounded-xl text-main-color px-2  w-24 h-7 justify-center items-center text-sm">Hybrid</button>
         </div>
              {/* City */}
              <div className="w-1/4 flex items-center">
                <Field
                  as="select"
                  name="city"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="so">Sohag</option>
                  <option value="ca">Cairo</option>
                  <option value="al">Alex</option>
                </Field>
              </div>
              </div>
{/* Salary */}
<label className="font-semibold text-2xl text-main-color mt-20">
              Salary <span className="text-red-500 text-md">*</span>
            </label>
            <div className="flex gap-8">
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
              <div className="w-1/4 flex items-center">
                <Field
                  as="select"
                  name="city"
                  className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                >
                  <option value="">Choose</option>
                  <option value="pr">Per Month</option>
                  <option value="po">Per Our</option>
                  <option value="co">Contract</option>
                </Field>
              </div>
           </div>
        {/* Job Description */}
<label className="font-semibold text-2xl text-main-color mt-20 mb-5">
              Job Description <span className="text-red-500 text-md">*</span>
            </label>
            <Field
           className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color h-28 text-sm"
           >

            </Field>
            {/* Job Recuirements */}
<label className="font-semibold text-2xl text-main-color my-5">
              Job Recuirements <span className="text-red-500 text-md">*</span>
            </label>
            <Field
           className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color h-28 text-sm"
           >

            </Field>
             {/* Key Words */}
             <label className=" text-xl text-main-color mt-10 mb-2">
              Key Words 
            </label>
            <Field
           className="border rounded p-2 w-full focus:outline-none bg-inherit border-dark-text  text-sm"
           >

            </Field>
            {/* Save & Cancel */}
            <div className="mt-10 flex gap-4">
             <button className="text-main-color border border-main-color py-2  rounded-2xl w-40 text-sm">Save And Post Later</button>
             <button className="text-white border border-main-color bg-main-color py-2 rounded-2xl w-40 text-sm" onClick={()=>{navigat('../continue-createpost')}} >Continue</button>
            </div>
        </Form>
      </Formik>
      </div>
      </div>
  )
}

export default CreatePost