import { faCheck, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik, Form  } from "formik";

function ContinueCreatePost() {
  return (
   
        <div className="mt-4 md:pl-10  pb-6">
       <h1 className="font-bold text-4xl pb-10">Create New Post</h1>
        <Formik>
         <Form className="flex  flex-col w-2/3">
      <label className="font-semibold text-3xl text-main-color mb-5">
       Screen Quistions
      </label>
       <Field
     className="border border-border-color rounded p-2 w-full focus:outline-none bg-fill-bg-color h-28 text-sm"
      ></Field>
      <button
     className="border border-border-color rounded-xl p-2 text-white text-2xl w-full focus:outline-none bg-main-color my-10 h-18 "
      >+ Add Questions</button>
      <label className="font-semibold text-3xl text-main-color mb-5">
       Suggested Quistions
      </label>
      <div className="flex w-2/3 gap-2 my-5">
         <button className="border border-main-color rounded-xl text-md text-main-color px-2  w-1/3 h-7 justify-center items-center text-sm">All</button>
         <button className="border border-main-color rounded-xl text-main-color px-2  w-1/3 h-7 justify-center items-center text-sm"> <FontAwesomeIcon
                icon={faList}
                className="text-sm text-main-color pr-2 "
              />Free Text</button>
         <button className="border border-main-color rounded-xl text-main-color px-2  w-1/3 h-7 justify-center items-center text-sm"> <FontAwesomeIcon
                icon={faCheck}
                className="text-sm text-main-color pr-2"
              />Yes Or No</button>
         </div>
        
         <div className="w-2/3 bg-fill-bg-color px-4 py-2 text-xl rounded mb-3"><FontAwesomeIcon
                icon={faCheck}
                className="text-xl text-main-color pr-3"></FontAwesomeIcon>Do You Have A Car ?</div>
                <div className="w-2/3 bg-fill-bg-color px-4 py-2 text-xl rounded mb-3"><FontAwesomeIcon
                icon={faList}
                className="text-xl text-main-color pr-3"></FontAwesomeIcon>Talk About Your Self</div>
                <div className="w-2/3 bg-fill-bg-color px-4 py-2 text-xl rounded mb-3"><FontAwesomeIcon
                icon={faCheck}
                className="text-xl text-main-color pr-3"></FontAwesomeIcon>Your Gender ?</div>
                <div className="w-2/3 bg-fill-bg-color px-4 py-2 text-xl rounded mb-3"><FontAwesomeIcon
                icon={faList}
                className="text-xl text-main-color pr-3"></FontAwesomeIcon>Talk About Your Self</div>
                 {/* Save & Cancel */}
            <div className="mt-10 flex gap-4 w-2/3">
             <button className="text-main-color border border-main-color p-2  rounded-2xl w-40 text-sm">Save And Post Later</button>
             <button className="text-white border border-main-color bg-main-color p-2 rounded-2xl w-60 text-sm">Post</button>
            </div>
      </Form>
      </Formik>
    </div>
  )
}

export default ContinueCreatePost