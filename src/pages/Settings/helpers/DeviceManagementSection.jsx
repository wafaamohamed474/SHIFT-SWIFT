
import LogoutButton from "../../../components/logoutButton/LogoutButton";

const devices = [
  {
    device: "Mobile",
    dateLoggedIn: "April 13, 2023",
    ipAddress: "324.978.243.456 Cairo",
    isCurrent: true,
  },
  {
    device: "Mobile",
    dateLoggedIn: "April 13, 2023",
    ipAddress: "324.978.243.456 Cairo",
    isCurrent: false,
  },
];

const DeviceManagementSection = () => {
  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <label className="font-semibold text-2xl text-main-color">Device Management</label>
      <div className="mt-4 w-full md:w-2/3">
      
      
      {devices.map((device, index) => (
        <div key={index} className="mb-4 rounded-md  ">
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="bg-fill-bg-color p-1 border border-border-color">Device</div>
            <div className="p-1 text-dark-text border border-border-color">{device.device}</div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="bg-fill-bg-color p-1 border border-border-color">Date Logged In</div>
            <div className="p-1 text-dark-text border border-border-color">{device.dateLoggedIn}</div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="bg-fill-bg-color p-1 border border-border-color">IP Address</div>
            <div className="p-1 text-dark-text border border-border-color">{device.ipAddress}</div>
          </div>
 
           
          <div className="grid grid-cols-2 gap-2 mb-1">
          <div className="bg-fill-bg-color p-1 border border-border-color">Actions</div>
            <div className="p-1 text-dark-text border border-border-color">
              {device.isCurrent ? (
                <span className="text-dark-text">This Device</span>
              ) : ( 
                 <LogoutButton/>
              )}
            </div>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default DeviceManagementSection;

