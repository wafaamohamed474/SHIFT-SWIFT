import FindJobSection from './helpers/FindJobSection'
import PersonalJobsSection from './helpers/PersonalJobsSection'
import ExploreJobsSection from './helpers/ExploreJobsSection'
import SideJobsSection from './helpers/SideJobsSection'
import BrandsSection from './helpers/BrandsSection'
import ReviewsSection from './helpers/ReviewsSection'
import StepsJobSection from './helpers/StepsJobSection'
import DownloadAppSection from './helpers/DownloadAppSection'
const Home = () => {
  return (
    <div className='w-full'>
    {/*FindJob*/}
     <FindJobSection />
     {/*PersonalJobs */}
     <PersonalJobsSection />
     {/*ExploreJobs */}
     <ExploreJobsSection companyId={123} />
     {/*SideJobs */}
     <SideJobsSection />
     {/*Brands*/}
     <BrandsSection />
     {/*Reviews */}
     <ReviewsSection />
     {/*Steps Of Job */}
     <StepsJobSection />
     {/*Download App*/}
     <DownloadAppSection />
    </div>
  )
}

export default Home
