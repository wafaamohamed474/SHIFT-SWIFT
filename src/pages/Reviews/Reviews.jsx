
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import { useState } from 'react';
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  { 
    id: 1, 
    name: "Mahmoud Eidhan",
    date: "10:00 AM, 20 Oct 2021",
    rating: 5, 
    text: "Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process",
    img: employer 
  },
  { 
    id: 2, 
    name: "Mahmoud Eidhan",
    date: "10:00 AM, 20 Oct 2021",
    rating: 3, 
    text: "Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process",
    img: employer 
  },
  { 
    id: 3, 
    name: "Mahmoud Eidhan",
    date: "10:00 AM, 20 Oct 2021",
    rating: 1, 
    text: "Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process",
    img: employer 
  },
  { 
    id: 4, 
    name: "Mahmoud Eidhan",
    date: "10:00 AM, 20 Oct 2021",
    rating: 5, 
    text: "Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process Hade pisan mang urang meuli jacket asalna nu orange ktu hade warna na mengkilap like very good beautifullly process",
    img: employer 
  },
   ];

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  const filteredReviews = 
  activeTab === "all" ? reviews : reviews.filter(review => review.rating === parseInt(activeTab)); //paseInt convert from string "1" to number 1

  return (
    <div className='w-full'>
      <div className='md:px-10 w-full'>
        <h1 className='font-bold text-4xl'>My Reviews</h1>
        <div className='mt-7'>
          <div className='mt-10 flex gap-4'>
            <Button type="button" label="All" variant={activeTab === 'all' ? `primary` : `disable`} onClick={() => handleToggle('all')} className="py-2"/>
            {[1, 2, 3, 4, 5].map(num => (
              <Button 
                key={num} 
                type="button" 
                label={<>{num} <FontAwesomeIcon icon={faStar} className={activeTab === String(num) ? `text-yellow-400` : ''}/></>} 
                variant={activeTab === String(num) ? `primary` : `disable`} 
                onClick={() => handleToggle(String(num))} 
                className="py-2"
              />
            ))}
          </div>
          <div className='my-6'>
            {filteredReviews.map(review => (
              <div key={review.id} className='w-full pb-3 border-b border-border-color mb-5'>
                <div className="flex items-center gap-5 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={review.img} alt={review.name} />
                  </div>
                  <div>
                    <h4>{review.name}</h4>
                    <p className="text-xs">{review.date}</p>
                  </div>
                  <span>{review.rating} <FontAwesomeIcon icon={faStar} className="text-yellow-400"/></span>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

