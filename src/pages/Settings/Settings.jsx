import ChangeEmailAddressSection from "./helpers/ChangeEmailAddressSection";
import DeviceManagementSection from "./helpers/DeviceManagementSection";

const Settings = () => {
  return (
    <div className="md:pl-10">
      <h2 className="font-bold text-4xl">Settings</h2>
      <ChangeEmailAddressSection />
      <DeviceManagementSection />
    </div>
  );
};

export default Settings;
