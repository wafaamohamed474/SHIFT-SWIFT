import { useEffect, useState } from "react";
import ProfilePictureUpload from "../profilePictureUpload/ProfilePictureUpload";
import { getUserData, getUserType } from "../../services/authService";
import { GetProfilePicture } from "../../services/api/account";
import userLogo from "../../assets/userLogo.jpg";
import ModalPortal from "../modalPortal/ModalPortal";

export default function ProfileCard() {
  const { firstName = "", lastName = "", email = "" } = getUserData() ?? {};
  const id =
    getUserType() === "user"
      ? getUserData()?.memberId
      : getUserData()?.companyId;

  const [showUpload, setShowUpload] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const fetchProfilePicture = async () => {
    try {
      const data = await GetProfilePicture(id);
      setImageUrl(data?.data);
    } catch (err) {
      console.error("Error fetching profile picture", err);
    }
  };
  useEffect(() => {
    fetchProfilePicture();
  }, []);

  return (
    <>
      <div
        className="w-full h-48 rounded-md bg-main-color flex flex-col justify-center items-center cursor-pointer"
        onClick={() => setShowUpload(true)}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border border-white shadow">
          <img
            src={imageUrl ? imageUrl : userLogo}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="text-bg-color">{firstName + " " + lastName}</h4>
        <p className="text-border-color">{email}</p>
      </div>

      {showUpload && (
        <ModalPortal>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-lg p-4 w-full max-w-md shadow-lg">
              <div className="flex justify-end items-center w-full">
                <button
                  onClick={() => {
                    setShowUpload(false);
                    fetchProfilePicture(); // إعادة تحميل الصورة بعد إغلاق الرفع
                  }}
                  className="text-gray-600 hover:text-gray-900 text-xl font-bold"
                >
                  &times;
                </button>
              </div>
              <ProfilePictureUpload onUpload={fetchProfilePicture} />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
