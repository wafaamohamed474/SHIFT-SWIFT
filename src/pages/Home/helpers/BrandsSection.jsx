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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center py-10">
        {[Google, Calvin, Teams, Twitch, Amazon, Figma].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="w-20 lg:w-36 object-contain transform transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}

export default BrandsSection;
