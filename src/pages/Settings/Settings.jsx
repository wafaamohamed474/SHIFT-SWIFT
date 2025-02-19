import ChangeEmailAddressSection from "./helpers/ChangeEmailAddressSection";
import DeleteAccountSection from "./helpers/DeleteAccountSection";
import DeviceManagementSection from "./helpers/DeviceManagementSection";

const Settings = () => {
  return (
    <div className="md:pl-10">
      <h2 className="font-bold text-4xl">Settings</h2>
      <ChangeEmailAddressSection />
      <DeviceManagementSection />
      <DeleteAccountSection />
    </div>
  );
};

export default Settings;
