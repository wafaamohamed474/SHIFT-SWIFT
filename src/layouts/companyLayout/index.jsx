import CompanySidebar from "../../components/companySidebar/CompanySidebar";
import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 h-full">
        <div className=" hidden md:block md:col-span-3 border-r border-border-color pt-14 ">
          <CompanySidebar />
        </div>
        <div className=" h-full pt-14 col-span-12  md:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyLayout;
