import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faMoneyBillWave, faStar } from '@fortawesome/free-solid-svg-icons';
import { GetRating } from '../../../services/api/company';
import VectorImage from "../../../assets/Vector_tech.png"
import BookMark from "../../../assets/Bookmark.png"
import Image from "../../../assets/userLogo.jpg";

const JobCard = ({ job, onView, onSave, isSelected }) => {
  const [ratingData, setRatingData] = useState(null);

  const jobTypeReverseMap = {
    1: "Full Time",
    2: "Part Time",
    3: "Freelance",
  };

  useEffect(() => {
    if (!job.companyId) return;

    GetRating(job.companyId)
      .then((data) => setRatingData(data))
      .catch((err) => console.error("Error loading company rating:", err));
  }, [job.companyId]);

  const handleSaveClick = (e) => {
    e.stopPropagation();
    onSave?.();
  };

  return (
    <div
      className={`bg-fill-bg-color border border-border-color rounded-xl p-4 hover:shadow-md transition cursor-pointer`}
      onClick={onView}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col gap-1 sm:w-3/4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl truncate max-w-[500px] font-semibold">{job.title}</h1>
            <img src={VectorImage} alt="vector" className="w-5 h-5 mt-1" />
          </div>
          <p className="text-sm text-gray-600 font-semibold">{job.companyFirstName + " " + job.companyLastName}</p>
        </div>

        <span className="bg-white h-20 w-20 rounded-xl ml-auto overflow-hidden flex items-center justify-center">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={job.companyPictureUrl || Image}
            alt="Company Logo"
          />
        </span>
      </div>

      <div className="flex flex-wrap gap-4 py-4 text-sm text-dark-text">
        <span className="flex items-center text-sm font-semibold gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-dark-text" />
          {job.location}
        </span>
        <span className="flex text-sm font-semibold items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-dark-text" />
          {jobTypeReverseMap[job.jobTypeTd]}
        </span>
        <span className="flex items-center text-sm font-semibold gap-2">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text" />
          {job.salary}
        </span>
        {ratingData !== null ? (
          <span className="flex items-center text-sm font-semibold gap-2 text-main-color">
            <span className="flex items-center gap-1">
              {ratingData.averageScore}
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </span>
            ({ratingData.ratings.length} Reviews)
          </span>
        ) : (
          <span className="text-gray-500 italic">No rating available</span>
        )}
      </div>

      <div className="flex gap-3 mt-2">
        <button
          className="border border-main-color text-main-color w-36 h-8 rounded-xl flex items-center justify-center gap-2"
          onClick={handleSaveClick}
        >
          <img src={BookMark} alt="bookmark" className="w-4 h-4" />
          Save
        </button>

        <button
          className="border border-main-color bg-main-color text-white w-36 rounded-xl flex items-center justify-center"
          onClick={onView}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default JobCard;
