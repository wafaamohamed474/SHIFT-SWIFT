import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-bg-color pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-t border-border-color pt-10">
          <div className="text-2xl font-bold text-main-color tracking-widest">
            SHIFT SWIFT
          </div>
          <div className="flex flex-wrap justify-between mt-6 md:mt-0 md:gap-16">
            <div className="flex flex-col text-main-text space-y-2">
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/services" className="hover:underline">Service</Link>
              <Link to="/company-review" className="hover:underline">Company Review</Link>
            </div>

            <div className="flex flex-col text-main-text space-y-2">
              <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/for-employer" className="hover:underline">For Employer</Link>
            </div>

            <div className="flex flex-col text-main-text space-y-2">
              <Link to="/twitter" className="hover:underline">Twitter</Link>
              <Link to="/facebook" className="hover:underline">Facebook</Link>
              <Link to="/instagram" className="hover:underline">Instagram</Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border-color pt-4 text-center text-main-text text-sm">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link> | 
          <Link to="/terms" className="hover:underline"> Terms & Conditions</Link> | 
          <Link to="/cookies" className="hover:underline"> Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
