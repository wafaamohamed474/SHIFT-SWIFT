import { Swiper, SwiperSlide } from "swiper/react";
import  {Autoplay}  from "swiper/modules"; 
import "swiper/css"; 
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewSlider = () => {
  const cards = Array.from({ length: 2 }, (_, i) => `Card ${i + 1}`);
  return (
    <div className="space-y-4 p-4">
       <div className='flex'><h4>Reviews</h4><span className='text-main-color border-b border-main-color ml-auto'>View All</span></div>

      {/* Swiper Component */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3} 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]} 
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
           {/*Box*/}
                <div className='p-2 flex flex-col  bg-fill-bg-color rounded-lg h-28 border-[0.5px] border-gray-300'>
                <div className="w-fit bg-amber-100 rounded-md px-1">
                    {index + 1}
                    <FontAwesomeIcon 
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <p className='text-md'>Informing customers about offers Logging customer complaints Informing customers</p>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
