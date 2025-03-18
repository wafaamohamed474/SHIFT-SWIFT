import Google from "../../../assets/google.png";
import Amazon from "../../../assets/amazon.png";
import Teams from "../../../assets/teams.png";
import Calvin from "../../../assets/calvine.png";
import Twitch from "../../../assets/twitch.png";
import Figma from "../../../assets/figma.png";
function BrandsSection() {
  return (
    <div className="container bg-secondary-color pb-10 mt-10 text-center border-b border-border-color">
      <h6 className="font-semibold text-2xl lg:text-3xl py-5">
        Trusted by brands & startups
      </h6>
      <div className="grid grid-cols-6  py-10 lg:ml-4">
        <img className="w-16 lg:w-40 lg:h-20" src={Google} />
        <img className="w-16 lg:w-40 lg:h-20" src={Calvin} />
        <img className="w-16 lg:w-40 lg:h-20" src={Teams} />
        <img className="w-16 lg:w-40 lg:h-20" src={Twitch} />
        <img className="w-16 lg:w-40 lg:h-20" src={Amazon} />
        <img className="w-16 lg:w-40 lg:h-20" src={Figma} />
      </div>
      
    </div>
  );
}

export default BrandsSection;
