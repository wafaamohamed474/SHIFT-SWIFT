
import AccountTypeSection from "./helpers/AccountTypeSection";
import PersonalInfoSection from "./helpers/PersonalInfoSection";
import LookingForJobSection from "./helpers/LookingForJobSection";
import EducationSection from "./helpers/EducationSection";

const Profile = () => {
  return (
    <div className="md:pl-10">
      <h2 className="font-bold text-4xl">Profile Info</h2>
      {/* Account Type */}
      <AccountTypeSection />
      {/* Personal Info */}
      <PersonalInfoSection />
      {/* Looking for a Job */}
      <LookingForJobSection />
      {/* Education */}
      <EducationSection/>
      
    </div>
  );
};

export default Profile;
