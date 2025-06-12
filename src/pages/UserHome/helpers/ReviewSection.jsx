import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ReviewSection = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h4 className="font-semibold">Reviews</h4>

      {reviews && reviews.length > 0 ? (
        <Swiper
         spaceBetween={20}
         loop={reviews.length > 3}
         autoplay={{
         delay: 4000,
         disableOnInteraction: false,
         }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-fill-bg-color border border-gray-300 rounded-lg p-4 h-32 box-border shadow-sm flex flex-col gap-2 w-full max-w-full">
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <span className="font-semibold text-main-text">{review.score}</span>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="text-sm text-dark-text line-clamp-2">
                  {review.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500">No reviews available for this job.</p>
      )}
    </div>
  );
};

export default ReviewSection;
