
import Search from '../../../assets/Search.png'
import User from '../../../assets/User.png'
import Check from '../../../assets/Check-all.png'
import ArrowLeft from '../../../assets/Vector-arrow-left.png'
import ArrowRight from '../../../assets/Vector-arrow-right.png'
function StepsJobSection() {
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-secondary-color items-center border-t border-border-color py-40 relative">
        {/*Find jobs*/}
      <div className="text-center lg:ml-28">
        <h6 className='font-bold text-3xl pb-2'>Simple steps to get your job</h6>
        <p className='text-lg lg:w-[500px]'>Track your job application status whether it is viewed shortlisted</p>
        <button className='bg-main-color rounded-lg w-40 h-8 text-white my-5'>Find Jobs</button>
      </div>
      {/*Steps*/}
      <div className='flex flex-col gap-2 lg:gap-4 lg:ml-auto lg:mr-32 text-center'>
        <div className="flex gap-2"><span className="rounded-3xl  bg-main-color lg:w-8 p-2"><img className='w-4 h-4' src={User}/></span><h6 className='lg:text-2xl'>Create An account</h6></div>
        <div className="flex gap-2"><span className="rounded-3xl bg-main-color lg:w-8 p-2"><img className='w-4 h-4' src={Search}/></span><h6 className='lg:text-2xl'>Search Your Dream Job</h6></div>
        <div className="flex gap-2"><span className="rounded-3xl bg-main-color lg:w-8 p-2"><img className='w-4 h-4' src={Check}/></span><h6 className='lg:text-2xl'>Make A deal</h6></div>
      </div>
      {/*Arrows */}
        <div className='bg-fill-bg-color h-12 flex items-center justify-center w-8 left-0 absolute'><img className='h-3 w-2' src={ArrowLeft} /></div>
        <div className='bg-fill-bg-color h-12 flex items-center justify-center w-8 absolute right-0'><img className='h-3 w-2' src={ArrowRight} /></div>
    </div>
    </>
  )
}

export default StepsJobSection