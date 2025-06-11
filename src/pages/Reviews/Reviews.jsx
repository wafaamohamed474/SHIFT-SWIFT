
import userLogo from "../../assets/userLogo.jpg"
import { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GetRating } from "../../services/api/company";
 

const Reviews = ({ companyId }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await GetRating(companyId);
        
        const enrichedData = data.ratings.map((review) => ({
          ...review,
          // img: userLogo,
        }));
        setReviews(enrichedData);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [companyId]);

  const filteredReviews =
    activeTab === "all"
      ? reviews
      : reviews.filter((review) => review.score === parseInt(activeTab));

  return (
    <div className="w-full">
      <div className="md:px-10 w-full">
        <h1 className="font-bold text-4xl">My Reviews</h1>
        <div className="mt-7">
          <div className="mt-10 flex gap-4">
            <Button
              type="button"
              label="All"
              variant={activeTab === "all" ? `primary` : `disable`}
              onClick={() => handleToggle("all")}
              className="py-2"
            />
            {[1, 2, 3, 4, 5].map((num) => (
              <Button
                key={num}
                type="button"
                label={
                  <>
                    {num}{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className={activeTab === String(num) ? `text-yellow-400` : ""}
                    />
                  </>
                }
                variant={activeTab === String(num) ? `primary` : `disable`}
                onClick={() => handleToggle(String(num))}
                className="py-2"
              />
            ))}
          </div>

          <div className="my-6">
            {loading ? (
              <p className="text-gray-500 mt-4">Loading reviews...</p>
            ) : filteredReviews.length === 0 ? (
              <p className="text-gray-500 mt-4">No reviews to display.</p>
            ) : (
              filteredReviews.map((review, index) => (
                <div key={index} className="w-full pb-3 border-b border-border-color mb-5">
                  <div className="flex items-center gap-5 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={review.ratedByImageUrl ? review.ratedByImageUrl : userLogo} alt={review.ratedByUserName} />
                    </div>
                    <div>
                      <h4>{review.ratedByUserName}</h4>
                      <p className="text-xs">{review.createdAt}</p>
                    </div>
                    <span>
                      {review.score} <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    </span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))

            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
