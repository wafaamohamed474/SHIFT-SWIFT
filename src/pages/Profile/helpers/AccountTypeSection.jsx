import { Field, Form, Formik } from 'formik'
import Button from '../../../components/button/Button'
const AccountTypeSection = () => {
  return (
   <div className="mt-4 border-b border-border-color pb-6">
    <label className="font-semibold text-2xl text-main-color">Change Account Type</label>
    <Formik>
    <Form className="flex  mt-5 flex-col w-full">
       <div className='flex gap-4 w-full md:w-2/3'>
        <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-1/2">
          <Field type="radio" name="accountType" value="job_seeker" className="hidden peer" />
          <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
          <span className="text-sm">Job seeker (looking for a job)</span>
          </label>

          <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-1/2">
          <Field type="radio" name="accountType" value="job_seeker" className="hidden peer" />
          <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
          <span className="text-sm">Employer (hiring)</span>
          </label>
       </div>
       <div className="mt-10 flex gap-4">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button type="submit" label="Save" variant="primary" />
            </div>
        
    </Form>
    </Formik>
    
    </div>
  )
}

export default AccountTypeSection
