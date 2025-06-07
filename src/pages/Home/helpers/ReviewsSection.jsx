import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const reviews = [
  {
    name: "Jenny Wilson",
    role: "Web Designer",
    rating: 1,
    title: "Provide us with a very large",
    content:
      "We are thrilled that can quickly provide us with a very large number of students for our fundraising hotline, both flexibly and on a long-term basis, who exactly meet our requirements.",
  },
  {
    name: "Jenny Wilson",
    role: "Web Designer",
    rating: 4,
    title: "Provide us with a very large",
    content:
      "We are thrilled that can quickly provide us with a very large number of students for our fundraising hotline, both flexibly and on a long-term basis, who exactly meet our requirements.",
  },
  {
    name: "Jenny Wilson",
    role: "Web Designer",
    rating: 5,
    title: "Provide us with a very large",
    content:
      "We are thrilled that can quickly provide us with a very large number of students for our fundraising hotline, both flexibly and on a long-term basis, who exactly meet our requirements.",
  },
  {
    name: "Jenny Wilson",
    role: "Web Designer",
    rating: 2,
    title: "Provide us with a very large",
    content:
      "We are thrilled that can quickly provide us with a very large number of students for our fundraising hotline, both flexibly and on a long-term basis, who exactly meet our requirements.",
  },
];

function ReviewsSection() {
  return (
    <div className="container py-10">
      <h6 className="font-semibold text-center text-2xl lg:text-3xl py-10">
        What our clients say about us
      </h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-fill-bg-color rounded-xl h-auto shadow-sm">
            <h6 className="font-semibold text-lg pb-2">{review.title}</h6>
            <p className="text-dark-text pb-4 capitalize text-sm font-medium leading-relaxed">
              "{review.content}"
            </p>
            <div className="flex items-center">
              <div>
                <span className="text-main-color text-base font-semibold">{review.name}</span>
                <p className="text-sm">{review.role}</p>
              </div>
              <div className="ml-auto flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`ml-1 ${i < review.rating ? "text-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;
