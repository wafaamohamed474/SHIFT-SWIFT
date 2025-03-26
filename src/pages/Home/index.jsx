import SearchSection from './helpers/SearchSection'
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
    {/*Search*/}
     <SearchSection />
     {/*PersonalJobs */}
     <PersonalJobsSection />
     {/*ExploreJobs */}
     <ExploreJobsSection />
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
