import PersonalInfoSection from "./helpers/PersonalInfoSection";
import EducationSection from "./helpers/EducationSection";

const Profile = () => {
  return (
    <div className="md:pl-10">
      <h2 className="font-bold text-4xl">Profile Info</h2>

      {/* Personal Info */}
      <PersonalInfoSection />

      {/* Education */}
      <EducationSection />
    </div>
  );
};

export default Profile;
