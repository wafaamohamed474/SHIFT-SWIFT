import { faStar,faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {  Button, Typography ,Box} from '@mui/material';
import BookMark from "../../assets/Bookmark.png";
import Clock from "../../assets/Clock.png";
import Image from "../../assets/image 4.png";
import Location from "../../assets/Location-Vector.png";
import Cash from "../../assets/mdi_cash-100.png";
import VectorTech from "../../assets/Vector_tech.png";
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/Search_Magnifying_Glass.png'
function Home() {
 
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent(!showContent);
  };
  return (
    <div className='py-10 container'>
      {/*heading*/}
      <div className='flex flex-col items-center justify-center gap-10'>
        <img className="w-96" src={Logo}/>
        <div className='flex border  bg-secondary-color border-border-color h-12 rounded-2xl '>
          <img className='w-10 p-2' src={SearchIcon}/>
          <input className='focus:outline-none text-dark-text p-1 bg-secondary-color  w-full' type='text' placeholder='Job Title'/>
          <input className='focus:outline-none text-dark-text border-l border-border-color p-1  bg-secondary-color  w-full' type='text' placeholder='City'/>
          <button className='bg-main-color w-64 rounded-2xl text-white m-1'>Search</button>
        </div>
      </div>
      {/*Jobs*/}
      <div className='grid grid-cols-2 py-10 gap-2'>
     <div className='flex flex-col gap-3'>
      {/*Box*/}
          <div className="bg-secondary-color rounded-xl p-2" onClick={handleToggle} >
            {/*header*/}
            <div className="">
             
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-3xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-2" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*information*/}
              <div className='flex gap-4 pb-5'>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
           {/*Box*/}
           <div className="bg-secondary-color rounded-xl p-2">
            {/*header*/}
            <div className="">
             
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-3xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-2" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*information*/}
              <div className='flex gap-4 pb-5'>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
           {/*Box*/}
           <div className="bg-secondary-color rounded-xl p-2">
            {/*header*/}
            <div className="">
             
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-3xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-2" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*information*/}
              <div className='flex gap-4 pb-5'>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
           {/*Box*/}
           <div className="bg-secondary-color rounded-xl p-2">
            {/*header*/}
            <div className="">
             
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-3xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-2" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*information*/}
              <div className='flex gap-4 pb-5'>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-40 h-8 text-center rounded-lg flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
     </div>
     {/*Proper*/}
     <div className="">
      {showContent && (
        <Box className=" p-2 border border-gray-300 rounded-lg shadow-lg">
          <Typography >   {/*Name Of Job*/}
            <div>
            <Button  onClick={handleToggle} sx={{color:'gray'}} className="hover:bg-transparent  ">
          <FontAwesomeIcon icon={faXmark} />
          </Button>
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-3xl text-black">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-2" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm w-16 border-b border-border-color">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />          
                </span>
              </div>
              </div>
              </Typography>
          <Typography sx={{ mt: 2 }} className='flex'> 
            <button  className='flex items-center justify-center border border-dark-text rounded-md m-2 p-2 '>3 Hours Ago</button>
            <button  className='flex items-center justify-center border border-green-600 rounded-md m-2 p-2 text-green-600'>33 Aplicants</button>
            <button className='flex items-center justify-center border border-dark-text rounded-md m-2 p-2 text-main-text'><img className="w-6 h-6 pr-1" src={VectorTech} />Verified Employer</button>
          </Typography>
        </Box>
      )}
      </div>
    </div>
    </div>
  )
}

export default Home