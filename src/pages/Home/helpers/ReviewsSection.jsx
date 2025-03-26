import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ReviewsSection() {
  return (
    <div className=" container  py-10 ">
      <h6 className="font-semibold text-center text-2xl lg:text-3xl py-10">
        What our clients say about us
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-3 gap-y-3 ">
        {/*Start Card*/}
        <div className="p-2 bg-fill-bg-color rounded-xl h-58">
          <h6 className="font-semibold text-lg pb-2">Provide us with a very large</h6>
          <p className="text-dark-text pb-2 capitalize text-md font-medium">
            &quot;We are thrilled that can quickly provide us with a very large
            number of students for our fundraising hotline, both flexibly and on
            a long-term basis, who exactly meet our requirements.&quot;
          </p>
          <div className="flex items-center ">
            <div>
              <span className="text-main-color text-lg">Jenny Wilson</span>
              <p className="text-sm">Web Designer</p>
            </div>
            <span className="ml-auto">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
            </span>
          </div>
        </div>
         {/*End Card*/}
         {/*Start Card*/}
         <div className="p-2 bg-fill-bg-color rounded-xl h-58">
          <h6 className="font-semibold text-lg pb-2">Provide us with a very large</h6>
          <p className="text-dark-text pb-2 capitalize text-md font-medium">
            &quot;We are thrilled that can quickly provide us with a very large
            number of students for our fundraising hotline, both flexibly and on
            a long-term basis, who exactly meet our requirements.&quot;
          </p>
          <div className="flex items-center ">
            <div>
              <span className="text-main-color text-lg">Jenny Wilson</span>
              <p className="text-sm">Web Designer</p>
            </div>
            <span className="ml-auto">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-gray-600 ml-1" />
            </span>
          </div>
        </div>
         {/*End Card*/}
          {/*Start Card*/}
        <div className="p-2 bg-fill-bg-color rounded-xl h-58">
          <h6 className="font-semibold text-lg pb-2">Provide us with a very large</h6>
          <p className="text-dark-text pb-2 capitalize text-md font-medium">
            &quot;We are thrilled that can quickly provide us with a very large
            number of students for our fundraising hotline, both flexibly and on
            a long-term basis, who exactly meet our requirements.&quot;
          </p>
          <div className="flex items-center ">
            <div>
              <span className="text-main-color text-lg">Jenny Wilson</span>
              <p className="text-sm">Web Designer</p>
            </div>
            <span className="ml-auto">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
            </span>
          </div>
        </div>
         {/*End Card*/}
          {/*Start Card*/}
        <div className="p-2 bg-fill-bg-color rounded-xl h-58">
          <h6 className="font-semibold text-lg pb-2">Provide us with a very large</h6>
          <p className="text-dark-text pb-2 capitalize text-md font-medium">
            &quot;We are thrilled that can quickly provide us with a very large
            number of students for our fundraising hotline, both flexibly and on
            a long-term basis, who exactly meet our requirements.&quot;
          </p>
          <div className="flex items-center ">
            <div>
              <span className="text-main-color text-lg">Jenny Wilson</span>
              <p className="text-sm">Web Designer</p>
            </div>
            <span className="ml-auto">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              <FontAwesomeIcon icon={faStar} className="text-gray-600 ml-1" />
            </span>
          </div>
        </div>
         {/*End Card*/}
      </div>
    </div>
  );
}

export default ReviewsSection;
